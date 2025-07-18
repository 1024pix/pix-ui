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

<style lang="scss">
@use "@assets/pix-design-tokens/shadows";

.pix-block {
  position: relative;
  background-color: var(--pix-neutral-0);
  border-radius: var(--pix-spacing-2x);

  &--primary {
    padding: var(--pix-spacing-6x);
    border: solid 1px var(--pix-primary-100);
  }

  &--orga {
    padding: var(--pix-spacing-3x);
    border: solid 1px rgb(var(--pix-orga-500-inline), 0.45);
  }

  &--certif {
    padding: var(--pix-spacing-3x);
    border: solid 1px rgb(var(--pix-certif-500-inline), 0.45);
  }

  &--admin {
    padding: var(--pix-spacing-3x);
    border: solid 1px var(--pix-primary-100);
  }

  &--condensed {
    padding: 0;
  }
}

</style>
