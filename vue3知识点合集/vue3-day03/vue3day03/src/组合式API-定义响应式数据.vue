<script >
import Content from "./components/Content.vue";
import { ref,reactive,toRefs, toRef } from 'vue'
export default {
  data() {
    return {
      massage: "helloworld",
    };
  },
  // 组合式API：将同一个逻辑关注点相关代码收集在一起
  setup() {
    //组件被创建之前执行,不需要使用this,this不会指向实例
    console.log("setup");

    // msg的逻辑代码
    // 没有响应式
    let msg = "hello";
    console.log(msg);
    function changeMsg(){
      msg='nihao'
      console.log(msg);//数据不是响应式
    }

    // 通过ref定义响应式变量
    // counter的逻辑代码
    const counter=ref(0)//ref()返回带有value属性的对象
    function changeCounter(){
      counter.value++
    }

    //通过reactive定义响应式引用类型的数据
    // obj的逻辑代码
    const obj=reactive({
        name:"张三",
        age:18,
        children:{
          name:'小张'
        }
    })
    function changeObjName(){
      obj.name='李四'
    }
    // toRefs（object）使解构后的数据重新获得响应式
    let {name,children}=toRefs(obj)
    //通过ES6扩展运算符进行结构使得对象中的属性不是响应式的
    return { msg,changeMsg,counter,changeCounter,obj,changeObjName,...toRefs(obj),name,children };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  components: {
    Content,
  },
};
</script>

<template>
  <div>
    <h2>{{msg}}</h2>
    <button @click="changeMsg">改变msg</button>
    <!-- 模板会自动解析value值 -->
    <h2>{{counter}}</h2>
    <button @click="changeCounter">改变counter</button>
    <h2>{{obj.name}}</h2>
    <h2>{{name}}</h2>
    <button @click="changeObjName">改变名字</button>
    <h2>{{children.name}}</h2>
    <Content></Content>
  </div>
</template>

 