<script>
export default {
  data() {
    return {
      message: "你好",
      age: 0,
      user: {
        name: "张三",
        age: 18,
        sex: "男",
      },
    };
  },
  methods: {},
  watch: {
    //监听数据的变化
    // 每当message发生变化时，就会调用这个函数
    // message:function(newValue,oldValue){
    //   console.log(newValue);
    //   console.log(oldValue);
    //   //执行异步操作，或者复杂逻辑代码
    //   if(newValue.length<5 || newValue.length>10){
    //     console.log("输入框的内容不能小于5或者大于10");
    //   }
    // }
    message: {
      immediate: true, //初始化的时候调用函数
      handler: function (newValue) {
        console.log(newValue);
        if (newValue.length < 5 || newValue.length > 10) {
          console.log("输入框的内容不能小于5或者大于10");
        }
      },
    },
    //监听不到对象的属性变化，需要使用到深度监听deep
    // user:function(newValue){
    //   console.log(newValue);
    // }
    // user:{
    //   handler:function(newValue){
    //     console.log(newValue);
    //   },
    //   deep:true,//表示是否深度监听，侦听器会一层层的向下遍历，给对象每个属性都加上侦听器
    // }
    "user.name": { //使用字符串的形式进行优化，只会单独监听对象中对应的属性
      handler: function (newValue) {
        console.log(newValue);
      },
      // deep: true, //表示是否深度监听，侦听器会一层层的向下遍历，给对象每个属性都加上侦听器
    },
  },
};
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="message = '你好'">改变message</button>
    <!-- v-model:数据的双向绑定 -->
    <input type="text" v-model="message" />
    <p>{{ user.name }}</p>
    <button @click="user.name = '李四'">改变名字</button>
  </div>
</template>

<style>
</style>
