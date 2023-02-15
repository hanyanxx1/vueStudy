import { h, createTextVNode } from "../../lib/guide-minivue.esm.js";
import { Foo } from "./Foo.js";

export default {
  name: "App",
  setup() {
    return {};
  },
  render() {
    const app = h("div", {}, "App");
    // const foo = h(Foo, {}, h("p", {}, "123"));
    const foo = h(
      Foo,
      {},
      {
        header: ({ age }) => [
          h("p", {}, "header" + age),
          createTextVNode("你好呀"),
        ],
        footer: ({ age }) => h("p", {}, "footer" + age),
      }
    );
    return h("div", {}, [app, foo]);
  },
};
