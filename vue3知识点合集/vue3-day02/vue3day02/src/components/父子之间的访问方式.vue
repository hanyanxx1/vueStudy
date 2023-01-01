<template>
    <div>
        <!-- 父子组件的访问方式 -->
        <!-- 父组件访问子组件：$refs：开发中常用-->
        <!-- ref:用来给元素或者子组件注册引用信息， -->
        <!-- 子组件访问父组件：$parent ,在开发中尽量少用,组件复用性很高-->
        <!-- 子组件访问根组件：$root  -->
        <Hello :message="msg"  aaa='123' :list='list' ref="hello"></Hello>
        <p ref="p"></p>
    </div>
</template>
<script>
import Hello from './Hello.vue'
export default {
    data(){
        return{
            msg:"helloworld",
            list:[1,2,3,4],
            a:20
        }
    },
    methods:{
    },
    mounted(){
        // console.log(this.$refs);
    },
    components:{
        Hello
    }
}
</script>

