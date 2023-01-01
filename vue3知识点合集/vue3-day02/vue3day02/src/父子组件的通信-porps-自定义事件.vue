<script>
import Content from './components/Content.vue'
export default {
  data() {
    return {
      message:""
    };
  },
  methods:{
    getChildMsg:function(value){
      console.log(value);
      this.message=value
    }
  },
  components:{
    Content
  }
};
</script>

<template>
  <div>
    <!-- 拿到子组件Content的数据，通过自定义事件 -->
    <!-- 2、在父组件中，通过v-on监听子组件中自定义的事件 -->
    <Content @injectMsg="getChildMsg"></Content>
    <p>------------------</p>
    <h2>{{message}}</h2>
  </div>
</template>

<style>
</style>
