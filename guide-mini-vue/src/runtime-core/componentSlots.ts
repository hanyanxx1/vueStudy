import { ShapeFlags } from "../shared/src/shapeFlags";

export function initSlots(instance, children) {
  const { vnode } = instance;
  if (vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN) {
    normalizeObjectSlots(children, instance.slots);
  }
}

const normalizeSlotValue = (value) => {
  return Array.isArray(value) ? value : [value];
};

const normalizeObjectSlots = (children, slots) => {
  for (const key in children) {
    const value = children[key];
    if (typeof value === "function") {
      slots[key] = (props) => normalizeSlotValue(value(props));
    }
  }
};
