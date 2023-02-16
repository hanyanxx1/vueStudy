import { createRenderer } from "../runtime-core";

function createElement(type) {
  return document.createElement(type);
}

function patchProp(el, key, preValue, nextValue) {
  const isOn = (key: string) => /^on[A-Z]/.test(key);
  if (isOn(key)) {
    const event = key.slice(2).toLowerCase();
    el.addEventListener(event, nextValue);
  } else {
    if (nextValue == null || nextValue === "") {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, nextValue);
    }
  }
}

function insert(el, parent) {
  parent.append(el);
}

const render: any = createRenderer({
  createElement,
  patchProp,
  insert,
});

export const createApp = (...args) => {
  return render.createApp(...args);
};

export * from "../runtime-core";
