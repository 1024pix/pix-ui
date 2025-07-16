<script setup>
import { useId } from 'vue';
import PixLabel from './PixLabel.ce.vue';
import { pixLabelProps } from './PixLabel.props';

const props = defineProps({
  ...pixLabelProps,
  toggled: Boolean,
  useIcons: Boolean,
});

const emits = defineEmits(['change']);

function onToggle() {
  emits('change', !props.toggled);
}

const id = useId()
</script>

<template>
  <div
    class="pix-toggle-button"
    :class="{
      'pix-toggle-button--pressed': toggled,
      'pix-toggle-button--inline': !!inlineLabel,
    }"
  >
    <PixLabel
      :for="id"
      :screenReaderOnly="screenReaderOnly"
      :subLabel="subLabel"
      :size="size"
      :inlineLabel="inlineLabel"
    >
      <slot name="label"></slot>
    </PixLabel>
    <button
      type="button"
      class="pix-toggle-button__button"
      :id="id"
      :class="{'pix-toggle-button__button--icon': useIcons}"
      :aria-pressed="toggled"
      @click="onToggle"
    >
      <span class="pix-toggle-button__view-a">
        <slot name="viewA"></slot>
      </span>
      <span class="pix-toggle-button__view-b">
        <slot name="viewB"></slot>
      </span>
    </button>
  </div>
</template>

<style lang="scss">
@use '@assets/pix-design-tokens/index.scss';

.pix-toggle-button {
  display: inline-flex;
  flex-direction: column;
  gap: var(--pix-spacing-1x);

  &--inline {
    flex-direction: row;
    gap: var(--pix-spacing-2x);
    align-items: center;
  }

  &__button {
    @extend %pix-body-s;

    width: fit-content;
    padding: var(--pix-spacing-1x);
    font-weight: var(--pix-font-bold);
    line-height: 1.572;
    background: var(--pix-neutral-20);
    border: 1px solid var(--pix-neutral-500);
    border-radius: 4px;

    &--icon {
      font-size: 0;
    }
  }

  &__view-a,
  &__view-b {
    display: inline-block;
    padding: var(--pix-spacing-1x) var(--pix-spacing-2x);
    border-radius: 4px;
  }

  &__view-a {
    color: var(--pix-neutral-800);
    font-weight: var(--pix-font-normal);
  }

  &__view-b {
    color: var(--pix-neutral-20);
    background-color: var(--pix-neutral-800);
  }

  &--pressed {
    .pix-toggle-button {
      &__view-a {
        color: var(--pix-neutral-20);
        font-weight: inherit;
        background-color: var(--pix-neutral-800);
      }

      &__view-b {
        color: var(--pix-neutral-800);
        font-weight: var(--pix-font-normal);
        background-color: transparent;
      }
    }
  }
}
</style>
