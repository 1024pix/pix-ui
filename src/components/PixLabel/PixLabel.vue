<template>
  <label class="pix-label">
    <abbr title="" class="mandatory-mark" v-if="requiredLabel">*</abbr>

    {{label}}

    <span class="pix-label__sub-label" v-if="subLabel">
      {{subLabel}}
    </span>
  </label>
</template>

<script setup>
import { defineProps } from 'vue';
import './PixLabel.css';

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
  }
});
</script>
