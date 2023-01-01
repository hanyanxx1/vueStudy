<script >
import { ref, reactive, watch, watchEffect } from "vue";
export default {
  data() {
    return {
      message: "helloworld",
    };
  },
  // 组合式API：将同一个逻辑关注点相关代码收集在一起
  setup() {
    const counter = ref(0);
    function changeCounter() {
      counter.value++;
    }
    const user = reactive({
      name: "张三",
      age: 18,
    });
    function changeUserName() {
      user.name = "李四";
    }
    // watch(侦听的响应式引用，回调函数)
    // watch(counter, (newVal, oldVal) => {
    //   console.log("newVal-----", newVal);
    //   console.log("oldVal-----", oldVal);
    // });
    // watch([user, counter], (newVal, oldVal) => {
    //   console.log("newVal-----", newVal);
    //   console.log("oldVal-----", oldVal);
    // });
    // watchEffect(回调函数)注意不需要指定监听的属性，组件初始化的时候会执行一次回调函数，自动收集依赖
    watchEffect(() => {
      console.log(user.name);
    });
    /*
    watch和watchEffect的区别：
    1、watchEffect不需要指定监听的属性，自动收集依赖，只要在回调中引用到了响应式的属性，只要这些属性发生改变，回调就会执行，
       watch只能侦听指定的属性，做出回调函数的执行，可以侦听多个，vue3开始后
    2、watch可以获取到新值和旧值，watcheffect拿不到
    3、watchEffect在组件初始化的时候就会自动执行一次，用来收集依赖，watch不需要，一开始就指定了
    */
    return { counter, user, changeCounter, changeUserName };
  },
  // 选项式API
  watch: {
    message: function (newVal, oldVal) {},
  },
};
</script>

<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="changeCounter">改变counter</button>
    <h2>{{ user.name }}</h2>
    <button @click="changeUserName">改变use的名字</button>
  </div>
</template>

 