import { createVNode } from "./vnode";

export function createAppAPI(render) {
  return function createApp(rootComponent) {
    const app = {
      mount(rootContainer) {
        const vnode = createVNode(rootComponent);
        render(vnode, rootContainer);
      },
    };
    return app;
  };
}
