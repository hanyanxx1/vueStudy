<script>
export default {
  data() {
    return {
      message: "helloWorld",
      age: 0,
    };
  },
  computed: {
    //计算属性,只要依赖值不变，那么不会重新计算,计算属性将基于它们的响应依赖关系缓存，提高性能
    // 简写
    // reverseMsg:function(){
    //   console.log("计算属性");
    //   return this.message.split('').reverse().join('')
    // }
    // 每一个计算属性都有一个getter和setter
    // 完整的写法
    reverseMsg: {
      // 计算属性一般是没有set方法，计算属性是只读属性
      set: function (newValue) {
        //在设置或者更改计算属性的时候调用
        console.log(newValue);//你好
        this.message=newValue
      },
      get: function () {
        return this.message.split("").reverse().join("");
      },
    },
  },
  methods: {
    reverseMessage: function () {
      console.log("methods");
      return this.message.split("").reverse().join("");
    },
  },
};
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <!-- 第一种：js表达式,总共会计算三次 -->
    <p>{{ message.split("").reverse().join("") }}</p>
    <p>{{ message.split("").reverse().join("") }}</p>
    <p>{{ message.split("").reverse().join("") }}</p>
    <!-- 第二种使用计算属性 -->
    <p>{{ reverseMsg }}</p>
    <p>{{ reverseMsg }}</p>
    <p>{{ reverseMsg }}</p>
    <!-- 第三种使用methods中的方法 -->
    <p>{{ reverseMessage() }}</p>
    <p>{{ reverseMessage() }}</p>
    <p>{{ reverseMessage() }}</p>
    <button @click="message = '你好'">改变message</button>
    <button @click="reverseMsg = '你好'">改变reverseMessage</button>
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
.d1 {
  font-size: 50px;
}
</style>
