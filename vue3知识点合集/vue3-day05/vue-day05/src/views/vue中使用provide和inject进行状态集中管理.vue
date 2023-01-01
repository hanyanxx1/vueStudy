<template>
  <div>
    <div>{{ store.state.msg }}</div>
    <button @click="updateMsg">改变msg</button>
  </div>
</template>
<script>
export default {
  inject: ["store"],
  methods: {
    updateMsg: function () {
      this.store.updateMsg();
    },
  },
};
</script>