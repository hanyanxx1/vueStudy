<script >
import Content from "./components/Content.vue";
export default {
  data() {
    return {
      message: "helloworld",
    };
  },
  // 组合式API：将同一个逻辑关注点相关代码收集在一起
  setup() {
    return {};
  },
  methods:{
    injectCounter(value){
      console.log(value);
    }
  },
  mounted(){
    console.log(this.$refs.content);
    this.$refs.content.sendeParent()
  },
  components: {
    Content,
  },
};
</script>

<template>
  <div>
    <!-- <Content class="box" id="content"  @injectCounter='injectCounter'/> -->
    <Content class="box" id="content" ref="content" @injectCounter='injectCounter'/>
    <Content class="box" id="content" />
    <button @click="message='你好'">改变message</button>
  </div>
</template>

 