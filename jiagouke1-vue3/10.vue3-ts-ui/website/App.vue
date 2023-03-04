<template>
  <z-button
    type="primary"
    round
    :loading="buttonLoading"
    icon="z-icon-menu"
    @click="buttonClick"
  ></z-button>
  <z-button icon="z-icon-loading" type="success" round>按钮</z-button>
  <z-button icon="z-icon-loading" type="warning" round>按钮</z-button>
  <z-icon name="loading"></z-icon>

  <z-button-group>
    <z-button type="primary" icon="z-icon-arrow-left-bold">上一页</z-button>
    <z-button type="primary">
      下一页
      <i class="z-icon-arrow-right-bold"></i
    ></z-button>
  </z-button-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useButton } from "./hook/useButton";
export default defineComponent({
  setup() {
    return {
      ...useButton(),
    };
  },
});
</script>
