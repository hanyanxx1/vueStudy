<script>
export default{
  data(){
    return {
      list:[]
    }
  }
}
</script>

<template>
  <div>
    <!-- vue-router是基于路由和组件的，路由是用来设定访问路径，将路径和组件映射起来， -->
     <h1>Hello App!</h1>
    <router-view name="ShopTop"></router-view>
    <router-view></router-view>
    <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <!-- 使用一个自定义组件 router-link 来创建链接。这使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码 -->
    <!-- to="路径" -->
    <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/user/123">Go to User</router-link>
      <!-- <router-link to="/news/456">Go to News</router-link> -->
      <router-link :to="{name:'news',params:{id:456}}">Go to News</router-link>
      <router-link to="/parent">Go to Parent</router-link>
      <router-link to="/page">Go to Page</router-link>
    </p>
    <!-- 路由出口，占位符 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    
    <router-view name="ShopFooter"></router-view>
  </div>
</template>

<style>
</style>
