<template>
  <div>
    <h2>我是Hello组件</h2>
    <!-- <h2>Hello--{{ obj.message }}</h2> -->
    <h2>Hello--{{newMsg}}</h2>
    <h2>Hello--{{newMsg}}</h2>
    <h2>Hello--{{newMsg}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
      newMsg:function(){
          return this.message()
      }
  },
  inject: ["message"],
  //   inject: ["obj"],
};
</script>