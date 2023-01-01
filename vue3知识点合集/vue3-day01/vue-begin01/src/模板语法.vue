<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      num: 0,
      uname: "张三",
      msg: "<h2>标题</h2>",
      id: "d1",
      url: "https://img11.360buyimg.com/seckillcms/s140x140_jfs/t1/183086/8/7235/75866/60b86debEef345bac/80c5cc8aa066f69c.jpg.webp",
      attributeName:'id',
      mouseEvent:"click"
    };
  },
  methods: {
    //给vue定义方法
    changeUname: function () {
      // this指向vue实例
      this.uname = "李四";
    },
    changeColor: function () {
      this.id = "d2";
    },
  },
};
</script>

<template>
  <!-- 组件实例的所有 property，无论如何定义，都可以在组件的模板中访问。 -->
  <div>
    <p>{{ num }}</p>
    <p>{{ uname }}</p>
    <!-- v-once :当数据改变时，插值处的内容不会更新 -->
    <p v-once>{{ uname }}</p>
    <button @click="changeUname">改变名字</button>
    <p>{{ msg }}</p>
    <!-- v-html：让内容以html的形式显示 -->
    <p v-html="msg"></p>
    <!-- v-bind:动态的绑定属性的内容 -->
    <p v-bind:id="id">v-bind绑定</p>
    <img v-bind:src="url" alt="" />
    <button @click="changeColor">改变颜色</button>
    <button @click="id = 'd2'">改变颜色</button>
    <!-- 使用javascript表达式 -->
    <p>{{ num + 1 }}</p>
    <p>{{ uname.split("").reverse().join("") }}</p>
    <p v-bind:id="id + 1">v-bind绑定</p>
    <!--v-bind 语法糖 : -->
    <p :id="id">v-bind绑定</p>
    <!-- v-on:用于监听 DOM 事件 -->
    <button v-on:click="changeColor">改变颜色</button>
    <!-- v-on语法糖： @ -->
    <button @click="changeColor">改变颜色</button>
    <!-- 动态参数 -->
    <!-- 动态属性 -->
    <p v-bind:[attributeName]="id">v-bind绑定</p>
    <button @click="attributeName='class'">改变属性</button>
    <!-- 动态事件 -->
    <button @[mouseEvent]="attributeName='class'">改变属性</button>
    <button @click="mouseEvent='mouseover'">改变事件</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#d1 {
  color: red;
}
#d2 {
  color: blue;
}
.d1{
  font-size: 50px;
}
</style>
