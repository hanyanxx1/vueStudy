<template>
  <div>
    <h2>Page页面</h2>
    <button @click="goPage">跳转页面</button>
  </div>
</template>
<script>
export default {
  methods: {
    goPage: function () {
      // console.log(this.$router);
      //    if(123==1221343){
      // this.$router.push('/')
      // 通过传入对象
      // this.$router.push({path:"/"})
      // 带参数
      // this.$router.push({path:"/user/123456"})
      // this.$router.push({name:"news",params:{id:123456}})
      // 带问号
      this.$router.push({path:"/about",query:{name:"zhangsan"}})
      //替换当前位置
    //   this.$router.push({ path: "/about", query: { name: "zhangsan" },replace:true });
    // this.$router.replace({path:"/about",query:{name:"zhangsan"}})
      //    }
    },
  },
};
</script>