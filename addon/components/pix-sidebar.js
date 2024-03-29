import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixSidebar extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixSidebar component: @title argument is required.');
    }
  }

  @action
  closeAction(event) {
    if (this.args.onClose && this.isClickOnOverlay(event)) {
      this.args.onClose(event);
    }
  }

  isClickOnOverlay(event) {
    return event.target.classList.contains('pix-sidebar__overlay');
  }

  get id() {
    return guidFor(this);
  }
}
