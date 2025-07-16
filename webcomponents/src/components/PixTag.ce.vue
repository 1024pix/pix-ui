<script setup>
import './PixTag.scss';
defineProps({
  color: String,
});
</script>

<template>
  <div :class="{[`pix-tag--${color}`]: color}" class="pix-tag">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use './PixTag.scss';
</style>
