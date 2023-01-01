<script >
import Content from "./components/Content.vue";
export default {
  data() {
    return {
      massage: "helloworld",
    };
  },
  components: {
    Content,
  },
};
</script>

<template>
  <div>
    <Content><button>按钮</button></Content>
    <Content><input type="text" /></Content>
    <!-- 如果有多个值，同时放入组件进行替换时，一起作为替换元素 -->
    <Content>
      <!-- v-slot 只能添加在 <template> 上 -->
      <!-- 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的 -->
      <template v-slot:button></template>
      <template v-slot:input><input type="text" /></template>
      <template v-slot:h2><h2>插槽</h2></template>
    </Content>
    <!-- 作用域插槽：父组件替换插槽的标签，但是数据由子组件来提供 -->
    <!-- 无序列表 -->
    <Content>
      <!-- 包含所有插槽 prop 的对象命名为 slotProps -->
      <template v-slot:default="slotProps"
        ><ul>
          <li v-for="item in slotProps.list" :key="item">{{item}}</li></ul
      ></template>
    </Content>
    <!-- 有序列表 -->
    <Content>     <template v-slot:default="slotProps"
        ><ol>
          <li v-for="item in slotProps.list" :key="item">{{item}}</li></ol
      ></template></Content>
  </div>
</template>

 