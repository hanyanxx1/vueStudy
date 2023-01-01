<script >
import Hello from './components/Hello.vue'
export default {
  data() {
    return {
      massage: "helloworld",
      isShow:true
    };
  },
  components:{
    Hello
  },
};
</script>

<template>
  <div>
    <Hello v-if="isShow" />
    <button @click="isShow=!isShow">控制Hello组件</button>
  </div>
</template>

 