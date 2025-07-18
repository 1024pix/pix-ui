<script setup>
defineProps({
  variant: { type : String, default: "primary", validator: (value) => {
    return ['primary', 'certif', 'orga', 'admin'].includes(value);
    } },
  condensed: { type: Boolean, default: false },
});
</script>

<template>
  <div
    class="pix-block"
    :class="{
      [`pix-block--${variant}`]:true,
      'pix-block--condensed': condensed,
    }"
  >
    <slot></slot>
  </div>
</template>

