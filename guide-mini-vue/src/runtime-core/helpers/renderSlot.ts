import { createVNode, Fragment } from "../vnode";

export function renderSlot(slots, name, props) {
  const slot = slots[name];
  if (slot) {
    return createVNode(Fragment, {}, slot(props));
  }
}
