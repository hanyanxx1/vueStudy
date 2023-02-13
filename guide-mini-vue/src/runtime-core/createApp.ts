import { render } from "./renderer";
import { createVNode } from "./vnode";

export function createApp(rootComponent) {
  const app = {
    mount(rootContainer) {
      const vnode = createVNode(rootComponent);
      render(vnode, rootContainer);
    },
  };
  return app;
}
