import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PixActionButton extends Component {
  text = 'pix-action-button';

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

  @action
  triggerAction() {
    if (this.args.triggerAction) {
      this.args.triggerAction();
    }
  }
}
