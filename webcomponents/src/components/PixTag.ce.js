import { defineCustomElement } from 'vue';

import PixTag from './PixTag.ce.vue';

// shadowRoot: true TEMPORAIRE
window.customElements.define('pix-tag', defineCustomElement(PixTag, { shadowRoot: true }));
