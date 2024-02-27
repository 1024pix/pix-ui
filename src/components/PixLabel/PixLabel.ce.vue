<template>
  <label class="pix-label">
    <abbr title="" class="mandatory-mark" v-if="requiredLabel">*</abbr>

    {{label}}

    <span class="pix-label__sub-label" v-if="subLabel">
      {{subLabel}}
    </span>

    <span class="pix-label__sub-label" v-if="subLabel">
      LabelSize {{labelSize}}
    </span>
  </label>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  label: {
    type: String,
    required: true,
  },
  requiredLabel: {
    default: false,
    type: Boolean,
    required: true,
  },
  subLabel: {
    type: String,
  },
  screenReaderOnly: {
    type: Boolean,
  },
  labelSize: {
    type: String,
    validator(value) {
      return ['small', 'large', 'default'].includes(value)
    }
  },
  inlineLabel: {
    type: Boolean,
  }
});
</script>

<style>
@import "PixLabel.css";
</style>
