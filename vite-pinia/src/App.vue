<script setup>
import { storeToRefs } from "./pinia/storeToRefs";
import { useCounterStore1 } from "./stores/counter1";
import { useCounterStore2 } from "./stores/counter2";
const store1 = useCounterStore1();
const { increment } = useCounterStore1();
const handleClick1 = () => {
  // store1.increment(3);
  increment(3);

  // 3次更新
  // store1.count++;
  // store1.count++;
  // store1.count++;

  // 很像setState({})
  //对象调用
  // store1.$patch({ count: 1000 });
  //函数调用
  // store1.$patch((state) => {
  //   //可以放逻辑
  //   state.count = 2000;
  // });

  // store1.$state = { count: 10000 };
};
const handleReset1 = () => {
  store1.$reset();
};

const store2 = useCounterStore2();
const handleClick2 = () => {
  store2.increment(3);
};
store2.$subscribe(function (storeInfo, state) {
  console.log(storeInfo, state);
});
store2.$onAction(function ({ after, onError }) {
  console.log("before action running1", store2.count);
  after(() => {
    console.log("after action running1", store2.count);
  });
  onError((err) => {
    console.log("error1", err);
  });
});
store2.$onAction(function ({ after, onError }) {
  console.log("before action running2", store2.count);
  after(() => {
    console.log("after action running2", store2.count);
  });
  onError((err) => {
    console.log("error2", err);
  });
});

function handleDispose() {
  store1.$dispose(); //scope.run收集effect的scope.stop是停止effect
}

// 用pinia解构 store 不要用 toRefs 要使用storeToRefs 可以跳过函数处理
const { count, double } = storeToRefs(store1);
</script>

<template>
  ----------------options-------------- <br />
  <!-- {{ store1.count }} /
  {{ store1.double }} -->
  {{ count }} /
  {{ double }}
  <button @click="handleClick1">修改状态</button>
  <button @click="handleReset1">重置状态</button>

  <button @click="handleDispose">卸载响应式</button>
  <hr color="red" />

  ----------------setup--------------<br />
  {{ store2.count }}
  {{ store2.double }}
  <button @click="handleClick2">修改状态</button>
</template>

<style scoped></style>

<!-- https://pinia.vuejs.org/ -->
