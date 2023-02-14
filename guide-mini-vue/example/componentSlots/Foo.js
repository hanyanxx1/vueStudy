import { h, renderSlot } from "../../lib/guide-minivue.esm.js";
export const Foo = {
  setup() {
    return {};
  },
  render() {
    const foo = h("p", {}, "foo");
    const age = 18;
    return h("div", {}, [
      renderSlot(this.$slots, "header", { age }),
      foo,
      renderSlot(this.$slots, "footer", { age }),
    ]);
  },
};
