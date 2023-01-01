<template>
  <div>
    <h2>我是content组件内容</h2>
    <h2>{{ message }}</h2>
    <button @click="sendeParent">发送数据</button>
  </div>
</template>
<script>
import { onUpdated, toRefs,ref ,h} from "vue";
export default {
  props: {
    message: {
      type: String,
      default: "你好",
    },
  },
  setup(props,context) {
    //props
    // console.log(props.message);
    // const {message}=toRefs(props)
    // console.log(message.value);
    // onUpdated(()=>{
    //   console.log(message.value);
    // })
    const counter=ref(20)
    function sendeParent(){
      context.emit('injectCounter',counter.value)
    }
    console.log(context.attrs);
    context.expose({
      sendeParent,counter
    })
    return () => h('div', counter.value)
  },
  data() {
    return {
      a: 10,
    };
  },
  // mounted(){
  //   console.log(this.message);
  // }
};
</script>