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
  <hr />

  <z-row>
    <z-col :span="6"><div style="background: red">111</div></z-col>
    <z-col :span="6" :offset="6"
      ><div style="background: yellow">222</div></z-col
    >
    <z-col :span="6"><div style="background: pink">333</div></z-col>
  </z-row>
  <div style="border: 3px purple solid; width: 80%; margin: 0 auto">
    <z-row :gutter="20">
      <z-col :span="8"><div style="background: red">111</div></z-col>
      <z-col :span="8"><div style="background: yellow">222</div></z-col>
      <z-col :span="8"><div style="background: pink">333</div></z-col>
    </z-row>
  </div>
  <div style="border: 3px purple solid; width: 80%; margin: 0 auto">
    <z-row justify="space-around">
      <z-col :span="2"><div style="background: red">111</div></z-col>
      <z-col :span="2"><div style="background: yellow">222</div></z-col>
      <z-col :span="2"><div style="background: pink">333</div></z-col>
    </z-row>
  </div>
  <hr />
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
