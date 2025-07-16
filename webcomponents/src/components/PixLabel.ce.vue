<script setup>
import { computed } from "vue";
import { pixLabelProps } from "./PixLabel.props";
import './PixLabel.ce.scss';

const props = defineProps({
  ...pixLabelProps,
  disabled: Boolean,
  requiredLabel: String,
});

const validatedSize = computed(() => {
  return ['small', 'large'].includes(props.size)
    ? props.size
    : 'default';
})
</script>

<template>
  <label
    class="pix-label"
    :class="{
      'screen-reader-only': screenReaderOnly,
      'pix-label--inline-label': inlineLabel,
      'pix-label--disabled': disabled,
      [`pix-label--${validatedSize}`] : true
    }"
    :for="props.for"
  >
    <slot></slot>
    <abbr v-if="props.requiredLabel" :title="props.requiredLabel" class="mandatory-mark">*</abbr>
    <span v-if="props.subLabel" class="pix-label__sub-label">{{subLabel}}</span>
  </label>
</template>
