import { createApp } from "vue";
import App from "./App.vue";
import ZUI from "z-ui";

import "theme-chalk/src/index.scss"

// 创建应用 并使用组件库
createApp(App).use(ZUI).mount("#app");
