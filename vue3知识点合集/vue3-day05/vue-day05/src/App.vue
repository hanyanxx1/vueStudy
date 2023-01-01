<script>
import Home from "./views/Home.vue";
import store from "./store";
// vue3中如何设置状态管理
// provide/inject 跨级通信
export default { 
  provide: {
    store,
  },
  components: {
    Home,
  },
};
</script>

<template>
  <Home />
</template>
 
<style>
</style>
