import PixLabel from '@/components/PixLabel/PixLabel.ce.vue';
import {defineCustomElement} from "vue";

export { PixLabel };

const pixLabelWebComponent = defineCustomElement(PixLabel)
customElements.define('pix-label', pixLabelWebComponent);