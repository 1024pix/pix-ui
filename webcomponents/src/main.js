import { defineCustomElement } from 'vue';

import PixTag from './components/PixTag.ce.vue';

const pixTagWebComponent = defineCustomElement(PixTag, {});
customElements.define('pix-tag', pixTagWebComponent);

export { pixTagWebComponent };
