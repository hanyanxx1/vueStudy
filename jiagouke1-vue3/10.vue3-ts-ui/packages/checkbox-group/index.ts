import { App } from "vue";
import CheckboxGroup from "@z-ui/checkbox/src/checkbox-group.vue";
CheckboxGroup.install = (app: App): void => {
  app.component(CheckboxGroup.name, CheckboxGroup); // 注册全局组件
};
export default CheckboxGroup;
