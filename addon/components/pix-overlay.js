import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class PixOverlay extends Component {
  @action
  onClick(event) {
    const isClickOnOverlay = event.target.classList.contains('pix-overlay');

    if (this.args.onClose && isClickOnOverlay) {
      this.args.onClose(event);
    }
  }
}
