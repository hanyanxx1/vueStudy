import { h } from "../../lib/guide-minivue.esm.js";

export default {
  name: "App",
  setup() {
    return {
      msg: "mini-vue",
    };
  },
  render() {
    return h(
      "div",
      {
        id: "root",
        class: ["red", "hard"],
      },
      // "hi, mini-vue"
      [h("p", { class: "red" }, "hi"), h("p", { class: "blue" }, "mini-vue")]
    );
  },
};
