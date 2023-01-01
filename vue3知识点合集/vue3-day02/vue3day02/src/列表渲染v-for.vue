<script>
export default {
  data() {
    return {
      person: ["张三", "李四", "王五"],
      personObj:{name:"张三",age:18,sex:'男'}
    };
  },
  methods:{
    addPerson:function(){
      this.person.unshift('赵六')
    }
  }
};
</script>

<template>
  <div>
    <!-- v-for使用数组，item代表数组中每一个元素，index表示数组元素的下标 -->
    <ul>
      <li v-for="item in person" :key="item">{{ item }}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in person" :key="index">
        {{ item }}-->{{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) of person" :key="index">
        {{ item }}-->{{ index }}
      </li>
    </ul>
    <!-- v-for使用对象,item表示键值，key表示键名 -->
    <ul>
      <li v-for="(item,key,index) in personObj" :key="index">{{item}}-->{{key}}-->{{index}}</li>
    </ul>
    <!-- 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素 -->
    <!-- key:唯一标识 -->
    <!-- 快速找到节点，减少渲染次数 ，提升渲染性能-->
    <ul>
      <li v-for="item in person" :key='item'><input type="checkbox" name="" id="">{{item}}</li>
    </ul>
    <button @click="addPerson">增加</button>
  </div>
</template>

<style>
</style>
