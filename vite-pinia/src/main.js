import { createApp } from "vue";
import App from "./App.vue";

// import { createPinia } from "pinia";
import { createPinia } from "./pinia";
import { useCounterStore1 } from "./stores/counter1";

const app = createApp(App);

// 基本上咱们js中的插件都是函数
const pinia = createPinia();

pinia.use(function ({ store }) {
  let local = localStorage.getItem(store.$id + "PINIA_STATE");

  if (local) {
    store.$state = JSON.parse(local);
  }

  //插件就是一个函数，use是用来注册插件的
  store.$subscribe(({ storeId: id }, state) => {
    localStorage.setItem(id + "PINIA_STATE", JSON.stringify(state));
  });

  store.$onAction(() => {
    //埋点
  });
  //插件的核心就是利用 $subscribe $onAction
});

app.use(pinia); // 插件要求得有一个install方法

app.mount("#app");

// 异步路由，在任何地方都可以使用pinia
const store = useCounterStore1();
console.log(store.count);
