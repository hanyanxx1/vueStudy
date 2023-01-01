<script>
export default {
  data() {
    return {
      counter: 0,
      msg: "helloWorld",
      checked: "",
      fruits: [],
      sex: "男",
      city: "张家界",
      citys: [],
    };
  },
  methods: {
    changeValue(e) {
      console.log(e);
      this.msg = e.target.value;
    },
    downmsg:function(){
      console.log(this.msg);
    }
  },
};
</script>

<template>
  <div>
    <!-- v-model基本使用 -->
    <input type="text" v-model="msg" />
    <h2>{{ msg }}</h2>
    <!-- v-model的原理 -->
    <!-- 
      本质是两个操作：
      1、v-bind绑定一个value属性
      2、v-on给当前元素添加一个input事件
     -->
    <input type="text" :value="msg" @input="changeValue" /><br />
    <!-- 复选框 -->
    <!-- 单个勾选框，v-model为布尔值 -->
    <input type="checkbox" v-model="checked" />
    <h2>{{ checked }}</h2>
    <!-- 多个勾选框 -->
    <input type="checkbox" v-model="fruits" value="苹果" />苹果
    <input type="checkbox" v-model="fruits" value="梨子" />梨子
    <input type="checkbox" v-model="fruits" value="荔枝" />荔枝
    <input type="checkbox" v-model="fruits" value="西瓜" />西瓜
    <input type="checkbox" v-model="fruits" value="哈密瓜" />哈密瓜
    <h2>喜欢的水果：{{ fruits }}</h2>
    <!-- 单选框 -->
    <input type="radio" v-model="sex" value="男" />男
    <input type="radio" v-model="sex" value="女" />女
    <h2>{{ sex }}</h2>
    <!-- 选项框 -->
    <!-- 单选 -->
    <select name="" id="" v-model="city">
      <option value="张家界">张家界</option>
      <option value="长沙">长沙</option>
      <option value="益阳">益阳</option>
      <option value="邵阳">邵阳</option>
    </select>
    <h2>{{ city }}</h2>
    <!-- 多选 -->
    <select name="" id="" v-model="citys" multiple>
      <option value="张家界">张家界</option>
      <option value="长沙">长沙</option>
      <option value="益阳">益阳</option>
      <option value="邵阳">邵阳</option>
    </select>
    <h2>{{ citys }}</h2>
    <!-- 修饰符的使用 -->
    <!-- .lazy,当输入框失去焦点，再去同步输入框中的数据 -->
    <input type="text" v-model.lazy="msg" />
    <h2>{{ msg }}</h2>
    <!-- .number将输入框的内容自动转为数字类型 -->
    <input type="text" v-model.number="counter">
    <h2>{{typeof counter}}</h2>
    <!-- .trim:自动过滤用户输入的首尾空白字符 -->
    <input type="text" v-model.trim="msg" @keydown="downmsg">
    <h2>{{msg}}</h2>
  </div>
</template>

<style>
</style>
