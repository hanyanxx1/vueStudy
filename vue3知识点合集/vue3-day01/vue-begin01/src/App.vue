<script>
export default {
  data() {
    return {
      activeColor: "red",
      fontSize: "50px",
      bgcColor: "pink",
      styleObj: {
        color: 'red',
        fontSize: '50px',
        "background-color": 'pink',
      },
    };
  },
};
</script>

<template>
  <div>
    <!-- 第一种：放置字符串 -->
    <p style="color: red">hello</p>
    <!-- 第二种：放置对象 -->
    <!-- CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名 -->
    <!-- <p :style="{key(css属性名):value(属性值，来自于data中的属性)}"></p> -->
    <p
      :style="{
        color: activeColor,
        fontSize: fontSize,
        'background-color': bgcColor,
      }"
    >
      hello1
    </p>
    <p
      :style="styleObj"
    >
      hello1
    </p>
    <p :style="[{border:'5px solid blue'},styleObj]">hello2</p>
  </div>
</template>

<style>
</style>
