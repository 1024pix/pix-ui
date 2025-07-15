import { defineCustomElement } from 'vue';

import PixTag from './PixTag.vue';

window.customElements.define('pix-tag', defineCustomElement(PixTag, { shadowRoot: false }));
