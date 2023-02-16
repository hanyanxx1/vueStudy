import { effect } from "../reactivity";
import { ShapeFlags } from "../shared/src/shapeFlags";
import { createComponentInstance, setupComponent } from "./component";
import { createAppAPI } from "./createApp";
import { Fragment, Text } from "./vnode";

export function createRenderer(options) {
  const {
    createElement: hostCreateElement,
    patchProp: hostPatchProp,
    insert: hostInsert,
  } = options;

  const render = (vnode, container) => {
    patch(null, vnode, container);
  };

  function patch(n1, n2, container, parentComponent = null) {
    const { type, shapeFlag } = n2;

    switch (type) {
      case Text:
        processText(n1, n2, container);
        break;
      case Fragment:
        processFragment(n1, n2, container);
        break;
      default:
        if (shapeFlag & ShapeFlags.ELEMENT) {
          processElement(n1, n2, container);
        } else if (shapeFlag & ShapeFlags.STATEFUL_COMPONENT) {
          processComponent(n1, n2, container, parentComponent);
        }
    }
  }

  function processFragment(n1, n2, container) {
    if (!n1) {
      mountChildren(n2, container);
    }
  }

  function processText(n1, n2, container) {
    const { children } = n2;
    const textNode = (n2.el = document.createTextNode(children));
    container.append(textNode);
  }

  function processElement(n1, n2, container) {
    if (!n1) {
      mountElement(n2, container);
    } else {
      updateElement(n1, n2, container);
    }
  }

  function updateElement(n1, n2, container) {
    console.log(n1, n2);
  }

  function mountElement(vnode, container) {
    const el = (vnode.el = hostCreateElement(vnode.type));

    const { children, shapeFlag } = vnode;

    if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
      el.textContent = children;
    } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      mountChildren(vnode, el);
    }

    const { props } = vnode;
    for (const key in props) {
      const nextVal = props[key];
      hostPatchProp(el, key, nextVal);
    }

    hostInsert(el, container);
  }

  function mountChildren(n2, container) {
    n2.children.forEach((v) => {
      patch(null, v, container);
    });
  }

  function processComponent(n1, n2, container, parentComponent) {
    mountComponent(n2, container, parentComponent);
  }

  function mountComponent(initialVNode, container, parentComponent) {
    const instance = createComponentInstance(initialVNode, parentComponent);

    setupComponent(instance);

    setupRenderEffect(instance, initialVNode, container);
  }

  function setupRenderEffect(instance, initialVNode, container) {
    function componentUpdateFn() {
      if (!instance.isMounted) {
        const { proxy } = instance;
        const subTree = (instance.subTree = instance.render.call(proxy));

        patch(null, subTree, container, instance);

        initialVNode.el = subTree.el;

        instance.isMounted = true;
      } else {
        const { proxy } = instance;
        const nextTree = instance.render.call(proxy);
        const prevTree = instance.subTree;

        instance.subTree = nextTree;

        patch(prevTree, nextTree, container);
      }
    }

    effect(componentUpdateFn);
  }

  return {
    render,
    createApp: createAppAPI(render),
  };
}
