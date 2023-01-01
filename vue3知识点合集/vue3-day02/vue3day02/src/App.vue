<script>
// import HomeView from "./components/HomeView.vue";
import HomeView from "./v-model数据的双向绑定.vue";
export default {
  data() {
    return {
      message: "helloworld",
    };
  },
  components: {
    HomeView,
  },
};
</script>

<template>
  <div>
    {{ message }}
    <HomeView></HomeView>
  </div>
</template>

<style></style>
