<script setup>
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

.pix-tag {
  @extend %pix-body-s;

  display: inline-block;
  padding: var(--pix-spacing-1x) var(--pix-spacing-4x);
  color: var(--pix-primary-900);
  font-weight: var(--pix-font-medium);
  white-space: nowrap;
  text-align: center;
  vertical-align: baseline;
  background-color: var(--pix-primary-100);
  border: 1px solid transparent;
  border-radius: 0.95rem;

  &--grey-light,
  &--neutral,
  &--grey {
    color: var(--pix-neutral-900);
    background-color: var(--pix-neutral-100);
  }

  &--yellow-light,
  &--secondary,
  &--yellow {
    color: var(--pix-secondary-900);
    background-color: var(--pix-secondary-100);
  }

  &--purple-light,
  &--tertiary,
  &--blue {
    color: var(--pix-tertiary-900);
    background-color: var(--pix-tertiary-100);
  }

  &--green-light,
  &--success,
  &--green {
    color: var(--pix-success-900);
    background-color: var(--pix-success-100);
  }

  &--error {
    color: var(--pix-error-900);
    background-color: var(--pix-error-100);
  }

  &--purple {
    color: var(--pix-primary-900);
    background-color: var(--pix-primary-100);
  }

  &--dark {
    color: var(--pix-neutral-0);
    background-color: var(--pix-neutral-800);
  }

  &--blue-light {
    color: var(--pix-primary-900);
    background-color: var(--pix-info-50);
  }

  &--white {
    color: var(--pix-neutral-900);
    background-color: var(--pix-neutral-0);
  }

  &--orga {
    /** Deprecated color **/
    color: var(--pix-orga-50);
    background-color: var(--pix-orga-500);
  }

  &--orange {
    /** Deprecated color **/
    background-color: var(--pix-warning-700);
  }

  &--orange-light {
    /** Deprecated color **/
    color: var(--pix-warning-900);
    background-color: var(--pix-warning-100);
  }
}
</style>
