export const isObject = (val) => {
  return val !== null && typeof val === "object";
};

export const extend = Object.assign;

export function hasChanged(value, oldValue) {
  return !Object.is(value, oldValue);
}

export function hasOwn(val, key) {
  return Object.prototype.hasOwnProperty.call(val, key);
}

export const camelize = (str: string) => {
  return str.replace(/-(\w)/g, (_, c: string) => {
    return c ? c.toUpperCase() : "";
  });
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toHandlerKey = (str: string) => {
  return str ? "on" + capitalize(str) : "";
};