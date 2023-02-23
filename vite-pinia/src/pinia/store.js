// 这里存放 defineStore的api

// createPinia(), 默认是一个插件具备一个install方法
// _s 用来存储 id->store
// state 用来存储所有状态的
// _e 用来停止所有状态的

// id  + options
// options
// id + setup
import {
  getCurrentInstance,
  inject,
  reactive,
  effectScope,
  computed,
  isRef,
  isReactive,
} from "vue";
import { piniaSymbol } from "./rootStore";

function isComputed(v) {
  // 计算属性是ref 同时也是一个effect
  return !!(isRef(v) && v.effect);
}

// 核心方法
function createSetupStore(id, setup, pinia, isOption) {
  let scope;
  // 后续一些不是用户定义的属性和方法，内置的api会增加到这个store上
  const store = reactive({}); // store就是一个响应式对象而已

  const initialState = pinia.state.value[id]; //对于setup api 没有初始化状态

  if (!initialState && !isOption) {
    // setup API
    pinia.state.value[id] = {};
  }

  // 父亲可以停止所有 , setupStore 是用户传递的属性和方法
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  function wrapAction(name, action) {
    return function () {
      let ret = action.apply(store, arguments);

      // action执行后可能是promise
      // todo ...

      return ret;
    };
  }
  for (let key in setupStore) {
    const prop = setupStore[key];
    if (typeof prop === "function") {
      // 你是一个action
      // 对action中的this 和 后续的逻辑进行处理 ， 函数劫持
      setupStore[key] = wrapAction(key, prop);
    }

    //如何看这个值是不是状态
    //computed 也是 ref
    if ((isRef(prop) && !isComputed(prop)) || isReactive(prop)) {
      if (isOption) {
        pinia.state.value[id][key] = prop;
      }
    }
  }
  pinia._s.set(id, store); // 将store 和 id映射起来
  Object.assign(store, setupStore);
  return store;
}

function createOptionsStore(id, options, pinia) {
  const { state, actions, getters } = options;

  function setup() {
    // 这里面会对用户传递的state，actions getters 做处理
    const localState = (pinia.state.value[id] = state ? state() : {});
    // getters
    return Object.assign(
      localState, // 用户的状态
      actions, // 用户的动作
      Object.keys(getters || {}).reduce((memo, name) => {
        // 用户计算属性
        memo[name] = computed(() => {
          let store = pinia._s.get(id);
          return getters[name].call(store);
        });
        return memo;
      }, {})
    );
  }

  createSetupStore(id, setup, pinia, true);
}

export function defineStore(idOrOptions, setup) {
  let id;
  let options;

  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  // 可能setup是一个函数，这个稍后处理

  const isSetupStore = typeof setup === "function";

  function useStore() {
    // 在这里我们拿到的store 应该是同一个
    let instance = getCurrentInstance();
    const pinia = instance && inject(piniaSymbol);

    if (!pinia._s.has(id)) {
      // 第一次useStore

      if (isSetupStore) {
        createSetupStore(id, setup, pinia, false);
      } else {
        // 如果是第一次 则创建映射关系
        createOptionsStore(id, options, pinia);
      }
    }
    // 后续通过id 获取对应的store返回

    const store = pinia._s.get(id);

    return store;
  }

  return useStore;
}
