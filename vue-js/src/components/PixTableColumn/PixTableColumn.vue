<script setup>
import { computed, getCurrentInstance, useSlots } from 'vue';

const props = defineProps({
  context: String,
  type: {
    type: String,
    default: 'text',
    validator(value) {
      const correctTypes = ['number', 'text', 'checkbox', 'tag', 'tagDate'];
      return correctTypes.includes(value);
    }
  },
  sortOrder: {
    type: String,
    validator(value) {
      if (value === undefined) return true;
      const correctSortOrders = ['asc', 'desc', null];
      return correctSortOrders.includes(value);
    }
  },
  ariaLabelDefaultSort: {
    type: String,
    required: true,
  },
  ariaLabelSortDesc: {
    type: String,
    required: true,
  },
  ariaLabelSortAsc: {
    type: String,
    required: true,
  },
  isMainRow: Boolean,
});

const slots = useSlots();

const displayHeader = computed(() => {
  return props.context === 'header';
});

const sortable = computed(() => {
  return !!getCurrentInstance()?.vnode.props?.onSort
});

const iconName = computed(() => {
  const isText = props.type === 'text';
  if (!props.sortOrder) {
    return isText ? 'sortAz' : 'sort';
  }
  if (props.sortOrder === 'asc') {
    return isText ? 'sortAzAsc' : 'sortAsc';
  }
  return isText ? 'sortAzDesc' : 'sortDesc';
});

const iconLabel = computed(() => {
  if (!props.sortOrder) {
    return props.ariaLabelDefaultSort;
  }
  if (props.sortOrder === 'asc') {
    return props.ariaLabelSortDesc;
  }
  return props.ariaLabelSortAsc;
});

const ariaSort = computed(() => {
  if (!sortable) {
    return undefined;
  }
  if (!props.sortOrder) {
    return 'none';
  }
  if (props.sortOrder === 'asc') {
    return 'ascending';
  }
  return 'descending';
});
</script>

<template>
  <th v-if="displayHeader" scope="col" :aria-sort="ariaSort">
    <div class="pix-table-header-container">
      <slot name="header"></slot>
      <button>
        ↕️
      </button>
      <!-- TODO
      <PixIconButton
        v-if="sortable"
        @ariaLabel={{this.iconLabel}}
        @iconName={{this.iconName}}
        @triggerAction={{@onSort}}
        @size="small"
      />
      -->
    </div>
  </th>
  <th v-else-if="isMainRow" scope="row" :class="{
    [`pix-table-column--${type}`]: !!type,
  }">
    <slot name="cell"></slot>
  </th>
  <td v-else :class="{
    [`pix-table-column--${type}`]: !!type,
  }">
    <slot name="cell"></slot>
    <p v-if="!!slots.subcell">
      <slot name="subcell"></slot>
    </p>
  </td>
</template>

<style lang="scss">
@use "@assets/pix-design-tokens/typography";

td.pix-table-column {
    &--number {
      text-align: left;
    }

    &--checkbox {
      width: 3.25rem;
    }

    &--tag {
      padding-top: 0.875rem;
      padding-bottom: 0.875rem;
      text-align: left;
    }

  &--tag-date {
    padding-top: var(--pix-spacing-1x);
    padding-bottom: var(--pix-spacing-1x);

    .pix-tag {
      text-align: left;
    }

    p {
      @extend %pix-body-xs;

      margin-top: 0.125rem;
      color: var(--pix-neutral-900);
      text-align: center;
    }
  }
  }

</style>
