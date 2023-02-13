import { h } from "../../lib/guide-minivue.esm.js";

export default {
  name: "App",
  setup() {
    return {
      msg: "mini-vue",
    };
  },
  render() {
    return h("div", "hi, " + this.msg);
  },
};
