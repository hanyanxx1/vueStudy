import { h } from "../../lib/guide-minivue.esm.js";

window.self = null;
export default {
  name: "App",
  setup() {
    return {
      msg: "mini-vue",
    };
  },
  render() {
    window.self = this;
    return h(
      "div",
      {
        id: "root",
        class: ["red", "hard"],
        onClick() {
          console.log("click");
        },
      },
      "hi, " + this.msg
      // [h("p", { class: "red" }, "hi"), h("p", { class: "blue" }, "mini-vue")]
    );
  },
};
