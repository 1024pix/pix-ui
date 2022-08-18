import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PixModal extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixModal component: @title argument is required.');
    }
  }

  @action
  stopPropagation(event) {
    event.stopPropagation();
  }

  @action
  closeAction(params) {
    if (this.args.onCloseButtonClick) {
      this.args.onCloseButtonClick(params);
    }
  }
}
