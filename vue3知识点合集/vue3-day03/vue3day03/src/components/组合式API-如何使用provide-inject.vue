<template>
  <div>
    <h2>我是content组件内容</h2>
    <h2>{{name}}</h2>
  </div>
</template>
<script>
import {inject} from 'vue'
export default {
  setup() {
   const name= inject('name')
   return {name}
  },
  data() {
    return {
      a: 10,
    };
  },
};
</script>