<template>
  <div>
    <div>about</div>
    <button @click="goBack">后退</button>
  </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route.query.name);
    },
    methods:{
        goBack(){
            // 前进，传入为正值，后退，传入的值则为负值
            // this.$router.go(-1)
            this.$router.back()//后退，等于go(-1)
            this.$router.forword()//前进，等于go(1)
        }
    },

}
</script>