import { h } from "../../lib/guide-minivue.esm.js";
export const Foo = {
  setup(props) {
    console.log(props);

    props.count++;
    console.log(props);
  },
  render() {
    return h("div", {}, "foo: " + this.count);
  },
};
