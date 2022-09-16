import Component from '@glimmer/component';
import { action } from '@ember/object';
import uniqueId from '@1024pix/pix-ui/utils/unique-id';

export default class PixModal extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixModal component: @title argument is required.');
    }
  }

  @action
  closeAction(event) {
    if (this.args.onCloseButtonClick && this.isClickOnOverlay(event)) {
      this.args.onCloseButtonClick(event);
    }
  }

  isClickOnOverlay(event) {
    return event.target.classList.contains('pix-modal__overlay');
  }

  get id() {
    return uniqueId();
  }
}
