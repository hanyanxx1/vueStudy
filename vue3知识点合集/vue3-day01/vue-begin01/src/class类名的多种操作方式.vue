<script>
export default {
  data() {
    return {
      message: "helloWorld",
      isActive: true,
      error:{},
      classObj: {
        active: true,
        helloWorld: true,
      },
      activeClass:"active"
    };
  },
  computed:{
    chassObjCom:function(){
      return{
        active:this.isActive && !this.error,
        helloWorld: this.error
      }
    }
  }
};
</script>

<template>
  <div>
    <!--第一种：放置字符串 -->
    <p class="active">hello</p>
    <!-- 第二种：放置对象（常用） -->
    <!-- <p :class="{类名：boolean}">hello1</p> -->
    <p :class="{ active: isActive }">hello1</p>
    <p :class="{ active: isActive, helloWorld: isActive }">hello1</p>
    <button @click="isActive = !isActive">改变active</button>
    <!-- 和普通的类同时存在，不会冲突 -->
    <p :class="{ active: isActive }" class="helloWorld">hello1</p>
    <p :class="classObj">hello1</p>
    <!-- 使用computed -->
    <p :class="chassObjCom">hellocomputed</p>
    <!-- 数组语法(不常用) -->
    <p :class="[message,activeClass]">hello2</p>
    <!-- 数组和对象结合 -->
    <p :class="[message,{active: isActive}]">hello3</p>
  </div>
</template>

<style>
.active {
  font-size: 50px;
  color: blue;
}
.helloWorld {
  background-color: pink;
}
</style>
