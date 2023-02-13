'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const createVNode = function (type, props, children) {
    // 注意 type 有可能是 string 也有可能是对象
    // 如果是对象的话，那么就是用户设置的 options
    // type 为 string 的时候
    // createVNode("div")
    // type 为组件对象的时候
    // createVNode(App)
    const vnode = {
        type,
        props: props || {},
        children,
    };
    return vnode;
};

const h = (type, props = null, children = []) => {
    return createVNode(type, props, children);
};

function createComponentInstance(vnode) {
    const instance = { vnode, type: vnode.type };
    return instance;
}
function setupComponent(instance) {
    setupStatefulComponent(instance);
}
function setupStatefulComponent(instance) {
    const Component = instance.type;
    const { setup } = Component;
    if (setup) {
        const setupResult = setup && setup();
        handleSetupResult(instance, setupResult);
    }
}
function handleSetupResult(instance, setupResult) {
    if (typeof setupResult === "function") {
        instance.render = setupResult;
    }
    finishComponentSetup(instance);
}
function finishComponentSetup(instance) {
    const Component = instance.type;
    instance.render = Component.render;
}

function render(vnode, container) {
    patch(vnode);
}
function patch(vnode, container) {
    processComponent(vnode);
}
function processComponent(vnode, container) {
    mountComponent(vnode);
}
function mountComponent(vnode, container) {
    const instance = createComponentInstance(vnode);
    setupComponent(instance);
    setupRenderEffect(instance);
}
function setupRenderEffect(instance, container) {
    const subTree = instance.render();
    patch(subTree);
}

function createApp(rootComponent) {
    const app = {
        mount(rootContainer) {
            const vnode = createVNode(rootComponent);
            render(vnode);
        },
    };
    return app;
}

exports.createApp = createApp;
exports.h = h;
//# sourceMappingURL=guide-minivue.cjs.js.map
