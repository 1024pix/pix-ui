import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PixIconButton extends Component {
  text = 'pix-icon-button';

  get icon() {
    const defaultIcon = 'plus';
    return this.args.icon ? this.args.icon : defaultIcon;
  }

  get size() {
    return this.args.size || 'big';
  }

  get color() {
    return this.args.color || 'light-grey';
  }

  get ariaLabel() {
    if (!this.args.ariaLabel || !this.args.ariaLabel.trim()) {
      throw new Error('ERROR in PixIconButton component, @ariaLabel param is not provided.');
    }
    return this.args.ariaLabel;
  }

  @action
  triggerAction(params) {
    if (this.args.triggerAction) {
      this.args.triggerAction(params);
    }
  }
}
