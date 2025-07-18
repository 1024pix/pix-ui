<script setup>
import { computed, getCurrentInstance } from 'vue';
import PixBlock from '../PixBlock/PixBlock.vue';

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => {
      return ['primary', 'certif', 'orga', 'admin'].includes(value);
    }
  },
  caption: {
    type: String,
    required: true
  },
  condensed: {
    type: Boolean,
    default: false,
  },
  displayCaption: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits('row-click');

const hasOnRowClick = computed(() => {
  return !!getCurrentInstance()?.vnode.props?.onRowClick
});

function onClick(row, event) {
  event.stopPropagation();
  if (hasOnRowClick) {
    emits('row-click', row);
  }
}
</script>

<template>
  <PixBlock
    :variant="variant"
    class="pix-table"
    :class="{ 'pix-table--condensed': !!condensed }">
    <table>
      <caption :class="{
        'pix-table__caption': displayCaption,
        'screen-reader-only': !displayCaption
      }">
        {{caption}}
      </caption>
      <thead :class="`pix-table-header--${variant}`">
        <tr>
          <slot name="columns" :row="null" context="header"></slot>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in data"
          :key="index"
          :class="{ 'pix-table__clickable-row': hasOnRowClick }"
          @click="onClick(row)"
        >
          <slot name="columns" :row="row" context="cell"></slot>
        </tr>
      </tbody>
    </table>
  </PixBlock>
</template>
<style lang="scss">
@use "@assets/pix-design-tokens/breakpoints";
@use "@assets/pix-design-tokens/typography";

.pix-table {
  min-width: 100%;
  overflow: auto;

  @include breakpoints.device-is('desktop') {
    overflow: unset;
  }

  @extend %pix-body-s;

  &__caption {
    margin-bottom: var(--pix-spacing-3x);
    text-align: left;
    caption-side: top;

    @extend %pix-title-xxs;
  }

  &__clickable-row {
    cursor: pointer;

    &:hover, &:focus, &:active {
      transition: 0.25s ease;
    }

    &:hover {
      background-color: rgba(var(--pix-neutral-100-inline), 0.50);
    }

    &:focus {
      background-color: rgba(var(--pix-neutral-100-inline), 0.40);
    }

    &:active {
      background-color: rgba(var(--pix-neutral-100-inline), 0.75);
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

   tbody > tr:nth-of-type(even):not(.pix-table__clickable-row:hover, .pix-table__clickable-row:focus, .pix-table__clickable-row:active) {
      background-color: rgba(var(--pix-neutral-20-inline), 0.80);
    }

    thead.pix-table-header {
      &--primary {
        background: var(--pix-primary-10);
      }

      &--orga {
        background: var(--pix-orga-50);
      }

      &--certif {
        background: var(--pix-certif-50);
      }

      &--admin {
        background: var(--pix-primary-100);
      }
    }

    .pix-table-header-container {
      display: flex;
      gap: var(--pix-spacing-1x);
      align-items: center;
    }

    th[scope='col'] {
      font-weight: var(--pix-font-bold);
      text-align: start;
      vertical-align: middle;
    }

    th[scope='row'] {
      font-weight: var(--pix-font-normal);
    }


    td, th {
      padding: var(--pix-spacing-4x) var(--pix-spacing-4x);

      &:first-child {
        border-radius: var(--pix-spacing-2x) 0 0 var(--pix-spacing-2x);
      }

      &:last-child {
        border-radius: 0 var(--pix-spacing-2x) var(--pix-spacing-2x) 0;
      }
    }

  &--condensed {
    th, td {
      padding: .5rem var(--pix-spacing-4x);
    }

    td.pix-table-column--tag {
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
    }
  }
}
</style>
