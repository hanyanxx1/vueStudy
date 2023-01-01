<script >
import { provide, ref } from 'vue';
import Content from "./components/Content.vue";
export default {
  data() {
    return {
      message: "helloworld",
    };
  },
  setup() {
    const name=ref('张三')
    provide('name',name)
    function changeName(){
      name.value='李四'
    }
    return {changeName};
  },
  components: {
    Content,
  },
};
</script>

<template>
  <div>
    <Content/>
    <button @click="changeName">改变name</button>
  </div>
</template>

 