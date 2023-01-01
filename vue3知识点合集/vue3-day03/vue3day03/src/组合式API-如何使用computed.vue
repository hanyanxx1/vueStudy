<script >
import { ref, reactive, watch, watchEffect, computed } from "vue";
export default {
  data() {
    return {
      message: "helloworld",
    };
  },
  // 组合式API：将同一个逻辑关注点相关代码收集在一起
  setup() {
    const counter = ref(0);

    const msg = ref("helloworld");
    const reverseMsg = computed(() => {
      //返回一个带有value属性的对象
      return msg.value.split("").reverse().join("");
    });
    console.log(reverseMsg.value);
    const user = reactive({
      name: "张三",
      age: 18,
      reverseMsg: computed(() => {
        //返回一个带有value属性的对象
        return msg.value.split("").reverse().join("");
      }),
    });
    console.log(user.reverseMsg);

    return { counter, user, msg };
  },
  // 选项式API
  computed: {
    reverseMsg: function () {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>

<template>
  <div></div>
</template>

 