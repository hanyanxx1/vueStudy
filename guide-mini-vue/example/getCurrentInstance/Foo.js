import { h, getCurrentInstance } from "../../lib/guide-minivue.esm.js";
export const Foo = {
  name: "Foo",
  setup(props) {
    const instance = getCurrentInstance();
    console.log("Foo:", instance);
  },
  render() {
    return h("div", {}, "foo: ");
  },
};
