import { createVNode } from "../vnode";

export function renderSlot(slots, name, props) {
  const slot = slots[name];
  if (slot) {
    return createVNode("div", {}, slot(props));
  }
}
