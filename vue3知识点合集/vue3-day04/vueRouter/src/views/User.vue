<template>
    <div>用户</div>
</template>
 <!---<script>
export default {
    props:['id'],
    mounted(){
        // $route表示当前活跃的路由对象
        console.log(this.$route.params.id);
        console.log(this.id);
    }
}
</script>
--->
<script setup> 
    import {useRoute} from 'vue-router'
    console.log(useRoute().params.id);
   const props= defineProps({
        id:String
    })
    console.log(props.id);
</script>
