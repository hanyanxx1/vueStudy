import { createApp } from "vue";
import App from "./App.vue";

const vm = createApp(App).mount("#app");
console.log(vm.message);
