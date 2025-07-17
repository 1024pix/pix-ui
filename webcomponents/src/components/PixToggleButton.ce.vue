<script setup>
import { useId } from 'vue';
import PixLabel from './PixLabel.ce.vue';
import { pixLabelProps } from './PixLabel.props';
import './PixToggleButton.scss';

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
@use './PixToggleButton.scss';
</style>
