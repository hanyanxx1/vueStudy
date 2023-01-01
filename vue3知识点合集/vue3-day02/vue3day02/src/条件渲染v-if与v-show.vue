<script>
export default {
  data() {
    return {
      age: 18,
      sex:'woman',
      isShow:true
    };
  },
};
</script>

<template>
  <div>
    <!-- v-if -->
    <p v-if="age > 18">我是成年人了</p>
    <p v-else-if="age == 18">我今天正好18岁</p>
    <p v-else>我还是个小朋友</p>
    <!-- 在 <template> 元素上使用 v-if 条件渲染分组 -->
    <template v-if="age>=18"> 
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
    </template>
    <!-- v-show -->
    <p v-show="sex=='man'">男生</p>
    <p v-show="sex=='woman'">女生</p>
    <!-- v-show 只是简单地切换元素的 display CSS property,带有 v-show 的元素始终会被渲染并保留在 DOM 中，频繁切换状态 -->
    <!-- v-if:只有后面为false,对应的元素以及子元素都不会被渲染，控制dom元素的创建和销毁，运行时条件很少改变，一次性 -->
    <h2 v-if="isShow">标题内容1-v-if</h2>
    <h2 v-show="!isShow">标题内容2-v-show</h2>
    <button @click="isShow=!isShow">改变isShow</button>
  </div>
</template>

<style>
</style>
