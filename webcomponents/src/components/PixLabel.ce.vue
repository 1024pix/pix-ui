<script setup>
import { computed } from "vue";
import { pixLabelProps } from "./PixLabel.props";

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

<style lang="scss">
@use '@assets/pix-design-tokens/index.scss';

.pix-label {
  display: block;
  color: var(--pix-neutral-900);
  font-weight: var(--pix-font-medium);

  &--disabled {
    color: var(--pix-neutral-500);
  }

  &--default {
    @extend %pix-body-m;
  }

  &--small {
    @extend %pix-body-s;
  }

  &--large {
    @extend %pix-body-l;
  }

  &--inline-label {
    font-weight: var(--pix-font-normal);
  }

  &__sub-label {
    @extend %pix-body-xs;

    display: block;
    color: var(--pix-neutral-500);
  }
}
</style>
