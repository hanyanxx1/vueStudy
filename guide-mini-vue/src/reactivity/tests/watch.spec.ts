import { nextTick, ref } from "../../runtime-core";
import { reactive } from "../reactive";
import { watch } from "../watch";

describe("api: watch", () => {
  it("watching single source: getter", async () => {
    const state = reactive({ count: 0 });
    let dummy;
    watch(
      () => state.count,
      (count, prevCount) => {
        dummy = [count, prevCount];
        // assert types
        count + 1;
        if (prevCount) {
          prevCount + 1;
        }
      },
      { flush: "sync", immediate: true }
    );
    state.count++;
    await nextTick();
    expect(dummy).toMatchObject([1, 0]);
  });

  it("watching single source: ref", async () => {
    const count = ref(0);
    let dummy;
    watch(
      count,
      (count, prevCount) => {
        dummy = [count, prevCount];
        // assert types
        count + 1;
        if (prevCount) {
          prevCount + 1;
        }
      },
      { flush: "sync", immediate: true }
    );
    count.value++;
    await nextTick();
    expect(dummy).toMatchObject([1, 0]);
  });
});