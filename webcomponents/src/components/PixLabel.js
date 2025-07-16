import { defineCustomElement } from 'vue';

import PixLabel from './PixLabel.ce.vue';

window.customElements.define('pix-label', defineCustomElement(PixLabel, { shadowRoot: false }));
