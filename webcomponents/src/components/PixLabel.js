import { defineCustomElement } from 'vue';

import PixLabel from './PixLabel.vue';

window.customElements.define('pix-label', defineCustomElement(PixLabel, { shadowRoot: false }));
