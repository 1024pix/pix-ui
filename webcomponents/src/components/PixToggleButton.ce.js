import { defineCustomElement } from 'vue';

import PixToggleButton from './PixToggleButton.ce.vue';

window.customElements.define(
  'pix-toggle-button',
  defineCustomElement(PixToggleButton, { shadowRoot: true }),
);
