<script>
export default {
  data() {
    return {
      list: [1, 3, 6, 4, 5],
    };
  },
  methods: {
    changeList: function () {
      //通过索引值去修改数组,vue3可以的
      // this.list[5]=7
      // push();给数组末尾添加元素
      // this.list.push(7,8,9)
      // pop();给数组删除掉数组的最末尾的元素
      // this.list.pop()
      // shift();给数组的第一位进行删除
      // this.list.shift()
      // unshift();给数组首位开始添加元素
      // this.list.unshift(0,9,9)
      // splice();//删除元素、插入元素、替换元素
      // 第一个参数：表示开始插入或者开始删除的元素的位置下标
      // 删除元素
      // 第二个参数：表示传入要删除几个元素(如果没有传，就删除后面所有的元素)
      // 插入元素：
      // 第二个参数：传入0,并且后面接上要插入的元素
      // 替换元素：
      // 第二个参数：表示我们替换几个元素，后面的参数表示用于替换前面的元素的
      // this.list.splice(1,3,7,8,9)
      // sort();排序
      // this.list.sort()
      // reverse();翻转
      this.list.reverse()
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <button @click="changeList">改变数组</button>
  </div>
</template>

<style>
</style>
