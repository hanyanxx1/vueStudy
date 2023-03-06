<template>
  <div class="z-checkbox">
    <span class="z-checkbox__input">
      <input
        type="checkbox"
        v-model="model"
        :checked="isChecked"
        @change="handleChange"
        :name="name"
        :disabled="disabled"
        :indeterminate="indeterminate"
        :value="label"
      />
    </span>
    <span class="z-checkbox-label">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCheckbox } from "./useCheckbox";

export default defineComponent({
  name: "ZCheckbox",
  props: {
    // 属性校验 vue2 里面也是一样
    name: String,
    indeterminate: Boolean,
    checked: Boolean,
    disabled: Boolean,
    label: [String, Number],
    modelValue: [String, Number],
  },
  emits: ["update:modelValue", "change"],
  setup(props) {
    return useCheckbox(props);
  },
});
</script>
