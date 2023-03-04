import { App } from "vue";
import Button from "@z-ui/button";
import Icon from "@z-ui/icon";
import ButtonGroup from "@z-ui/button-group";
import Row from "@z-ui/row";
import Col from "@z-ui/col";
const components = [Button, Icon, ButtonGroup, Row, Col];
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
