<template>
    <div>
        <!-- 组件是带有名称的可复用的实例,单独功能模块的封装 -->
        <p>----------------</p>
        <Hello :message="msg"  aaa='123' :list='list'></Hello>
        <p>-------------------</p>
        <h2>我是content组件内容</h2> 
        <h2>{{msg}}</h2>
        <button @click="msg='你好'">改变msg</button>
        <!-- <Hello></Hello> -->
        <button @click="sendParent">提交数据给父组件</button>
    </div>
</template>
<script>
import Hello from './Hello.vue'
export default {
    data(){//让每一个组件对象都返回一个新的对象，不会造成数据污染
        return{
            msg:"helloworld",
            list:[1,2,3,4]
        }
    },
    methods:{
        // 1、在子组件中，通过$emit来触发事件
        sendParent:function(){
            // this.$emit('自定义事件的名称','发送的事件参数')
            this.$emit('injectMsg',this.msg)
        },
    },
    components:{
        Hello
    }
}
</script>

