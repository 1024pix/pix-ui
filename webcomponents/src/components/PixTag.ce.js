import { defineCustomElement } from 'vue';

import PixTag from './PixTag.ce.vue';

window.customElements.define('pix-tag', defineCustomElement(PixTag));
