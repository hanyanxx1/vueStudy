import { h } from "../../lib/guide-minivue.esm.js";
import { Foo } from "./Foo.js";

export default {
  name: "App",
  setup() {
    return {};
  },
  render() {
    return h("div", {}, [
      h("div", {}, "App"),
      h(Foo, {
        onAdd(a, b) {
          console.log("onAdd", a, b);
        },
        onAddFoo(a, b) {
          console.log("onAddFoo", a, b);
        },
      }),
    ]);
  },
};
