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

const isObject = (val) => {
    return val !== null && typeof val === "object";
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
    patch(vnode, container);
}
function patch(vnode, container) {
    if (typeof vnode.type === "string") {
        processElement(vnode, container);
    }
    else if (isObject(vnode.type)) {
        processComponent(vnode, container);
    }
}
function processElement(vnode, container) {
    mountElement(vnode, container);
}
function mountElement(vnode, container) {
    const el = document.createElement(vnode.type);
    const { children } = vnode;
    if (typeof children === "string") {
        el.textContent = children;
    }
    else if (Array.isArray(children)) {
        mountChildren(vnode, el);
    }
    const { props } = vnode;
    for (const key in props) {
        const val = props[key];
        el.setAttribute(key, val);
    }
    container.append(el);
}
function mountChildren(vnode, container) {
    vnode.children.forEach((v) => {
        patch(v, container);
    });
}
function processComponent(vnode, container) {
    mountComponent(vnode, container);
}
function mountComponent(vnode, container) {
    const instance = createComponentInstance(vnode);
    setupComponent(instance);
    setupRenderEffect(instance, container);
}
function setupRenderEffect(instance, container) {
    const subTree = instance.render();
    patch(subTree, container);
}

function createApp(rootComponent) {
    const app = {
        mount(rootContainer) {
            const vnode = createVNode(rootComponent);
            render(vnode, rootContainer);
        },
    };
    return app;
}

export { createApp, h };
//# sourceMappingURL=guide-minivue.esm.js.map
