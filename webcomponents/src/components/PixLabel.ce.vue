<script setup>
import "../../../assets/pix-design-tokens/index.scss";

import { computed } from 'vue';

const props = defineProps({
});
</script>

<template>
  <label>
    <slot></slot>
  </label>
</template>
