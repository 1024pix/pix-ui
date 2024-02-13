<template>
  <label>
    <abbr title={} class="mandatory-mark" v-if={requiredLabel}>*</abbr>

    {{label}}

    <span class="pix-label__sub-label" v-if={subLabel}>{{subLabel}}</span>
  </label>
</template>

<script setup>
import {ref} from 'vue';
import './label.css';

const label = ref({
  type: String,
  required: true,
})

const requiredLabel = ref({
  default: false,
  type: String,
  required: true,
})

const subLabel = ref({
  type: String,
})
</script>
