import { proxyRefs } from "../reactivity";
import { shallowReadonly } from "../reactivity/reactive";
import { emit } from "./componentEmits";
import { initProps } from "./componentProps";
import { PublicInstanceProxyHandlers } from "./componentPublicInstance";
import { initSlots } from "./componentSlots";

export function createComponentInstance(vnode, parent) {
  const instance = {
    vnode,
    type: vnode.type,
    next: null,
    setupState: {},
    props: {},
    slots: {},
    provides: parent ? parent.provides : {},
    parent,
    isMounted: false,
    emit: () => {},
  };

  instance.emit = emit.bind(null, instance) as any;

  return instance;
}

export function setupComponent(instance) {
  const { props, children } = instance.vnode;

  initProps(instance, props);
  initSlots(instance, children);
  setupStatefulComponent(instance);
}

function setupStatefulComponent(instance) {
  const Component = instance.type;

  instance.proxy = new Proxy({ _: instance }, PublicInstanceProxyHandlers);

  const { setup } = Component;
  if (setup) {
    setCurrentInstance(instance);
    const setupResult =
      setup && setup(shallowReadonly(instance.props), { emit: instance.emit });
    setCurrentInstance(null);

    handleSetupResult(instance, setupResult);
  }
}

function handleSetupResult(instance, setupResult) {
  if (typeof setupResult === "function") {
    instance.render = setupResult;
  } else if (typeof setupResult === "object") {
    instance.setupState = proxyRefs(setupResult);
  }

  finishComponentSetup(instance);
}

function finishComponentSetup(instance) {
  const Component = instance.type;

  if (!instance.render) {
    instance.render = Component.render;
  }
}

let currentInstance = null;
export function getCurrentInstance() {
  return currentInstance;
}

export function setCurrentInstance(instance) {
  currentInstance = instance;
}
