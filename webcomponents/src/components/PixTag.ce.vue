<script setup>

import { computed } from 'vue';

const props = defineProps({
  color: String,
});

const classes = computed(() => {
  const { color } = props;
  const classes = [];
  if (color) classes.push(`pix-tag--${color}`);
  return classes.join(' ');
});
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
