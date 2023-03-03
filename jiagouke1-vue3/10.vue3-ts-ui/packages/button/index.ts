import { App } from "vue";
import Button from "./src/button.vue";
Button.install = (app: App): void => {
  app.component(Button.name, Button); // 注册全局组件
};
export default Button;