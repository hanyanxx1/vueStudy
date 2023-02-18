import { createRenderer } from "../runtime-core";

function createElement(type) {
  return document.createElement(type);
}

function setElementText(el, text) {
  el.textContent = text;
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

function insert(child, parent, anchor = null) {
  parent.insertBefore(child, anchor);
}

function remove(child) {
  const parent = child.parentNode;
  if (parent) {
    parent.removeChild(child);
  }
}

const render: any = createRenderer({
  createElement,
  patchProp,
  insert,
  setElementText,
  remove,
});

export const createApp = (...args) => {
  return render.createApp(...args);
};

export * from "../runtime-core";
