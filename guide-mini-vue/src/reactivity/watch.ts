import { effect, getCurrentInstance, isRef } from "../runtime-core";
import { hasChanged } from "../shared/src";

export function watch(source, cb, options: any = {}) {
  doWatch(source, cb, options);
}

function doWatch(source, cb, { flush, immediate }) {
  let getter;
  let oldValue;

  if (isRef(source)) {
    getter = () => source.value;
  } else {
    getter = () => source.call(getCurrentInstance());
  }

  const job = () => {
    if (cb) {
      const newValue = runner();
      if (hasChanged(newValue, oldValue)) {
        cb(newValue, oldValue);
        oldValue = newValue;
      }
    }
  };

  let scheduler;
  if (flush == "sync") {
    scheduler = job;
  }

  const runner = effect(getter, {
    scheduler,
    lazy: true,
  });
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = runner();
    }
  }
}
