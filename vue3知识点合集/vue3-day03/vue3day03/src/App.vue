<script setup>
//顶层的绑定会被暴露给模板
//定义响应式的变量，还是需要从vue中引入
import {ref} from 'vue'
//引入组件，不需要注册
import Content from "./components/Content.vue";
// 定义变量，在模板使用不需要暴露出去，模板直接使用
const a=20;
console.log(a);
const b=ref(10)
function addB(){
  b.value++
}
</script>

<template>
  <div>
    <h2>{{a}}</h2>
    <h2>{{b}}</h2>
    <button @click="addB">改变b</button>
    <Content />
  </div>
</template>

 