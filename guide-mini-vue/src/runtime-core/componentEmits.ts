import { camelize, toHandlerKey } from "../shared/src";

export function emit(instance, event, ...rawArgs) {
  const { props } = instance;

  const handler = props[toHandlerKey(camelize(event))];
  if (handler) {
    handler(...rawArgs);
  }
}
