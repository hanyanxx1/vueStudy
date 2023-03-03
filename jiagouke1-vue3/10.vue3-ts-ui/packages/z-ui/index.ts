import { App } from "vue";
import Button from "@z-ui/button";
import Icon from "@z-ui/icon";
const components = [Button, Icon];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
// 在使用组件库的时候可以使用 createApp().use(XXX)
export default {
  install,
};

// 组件库看效果的网址 -》 文档  =》 md -> webpack
