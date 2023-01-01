<script >
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";
export default {
  data() {
    return {
      message: "helloworld",
    };
  },
  // 组合式API：将同一个逻辑关注点相关代码收集在一起
  setup() {
    //生命周期钩子函数中有一个参数，回调函数
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    return {};
  },
};
</script>

<template>
  <div></div>
</template>

 