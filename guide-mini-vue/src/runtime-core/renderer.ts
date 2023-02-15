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
    patch(vnode, container);
  };

  function patch(vnode, container, parentComponent = null) {
    const { type, shapeFlag } = vnode;

    switch (type) {
      case Text:
        processText(vnode, container);
        break;
      case Fragment:
        processFragment(vnode, container);
        break;
      default:
        if (shapeFlag & ShapeFlags.ELEMENT) {
          processElement(vnode, container);
        } else if (shapeFlag & ShapeFlags.STATEFUL_COMPONENT) {
          processComponent(vnode, container, parentComponent);
        }
    }
  }

  function processFragment(vnode, container) {
    mountChildren(vnode, container);
  }

  function processText(vnode, container) {
    const { children } = vnode;
    const textNode = (vnode.el = document.createTextNode(children));
    container.append(textNode);
  }

  function processElement(vnode, container) {
    mountElement(vnode, container);
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

  function mountChildren(vnode, container) {
    vnode.children.forEach((v) => {
      patch(v, container);
    });
  }

  function processComponent(vnode, container, parentComponent) {
    mountComponent(vnode, container, parentComponent);
  }

  function mountComponent(initialVNode, container, parentComponent) {
    const instance = createComponentInstance(initialVNode, parentComponent);

    setupComponent(instance);

    setupRenderEffect(instance, initialVNode, container);
  }

  function setupRenderEffect(instance, initialVNode, container) {
    const { proxy } = instance;
    const subTree = instance.render.call(proxy);

    patch(subTree, container, instance);

    initialVNode.el = subTree.el;
  }

  return {
    render,
    createApp: createAppAPI(render),
  };
}
