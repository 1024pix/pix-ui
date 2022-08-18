import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PixSidebar extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixSidebar component: @title argument is required.');
    }
  }

  @action
  stopPropagation(event) {
    event.stopPropagation();
  }

  @action
  closeAction(params) {
    if (this.args.onClose) {
      this.args.onClose(params);
    }
  }
}
