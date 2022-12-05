import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixModal extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixModal component: @title argument is required.');
    }
  }

  @action
  closeAction(event) {
    if (this.args.onClose) {
      const currentElement = document.getElementById(this.modalId);
      this.args.onClose(event, currentElement);
    }
  }

  @action
  stopPropagation(event) {
    event.stopPropagation();
  }

  get modalId() {
    if (this.args.id) return this.args.id;
    return guidFor(this);
  }
}
