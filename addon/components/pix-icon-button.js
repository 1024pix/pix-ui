import Component from '@glimmer/component';
import { action } from '@ember/object';
import { warn } from '@ember/debug';

export default class PixIconButton extends Component {
  text = 'pix-icon-button';

  get size() {
    return this.args.size || 'big';
  }

  get color() {
    return this.args.color || 'light-grey';
  }

  get ariaLabel() {
    warn(
      'PixIconButton: @label attribute should be a string.',
      !['', null, undefined].includes(this.args.ariaLabel),
      {
        id: 'pix-ui.icon-button.close-button-label.not-string',
      },
    );

    return this.args.ariaLabel;
  }

  @action
  triggerAction(params) {
    if (this.args.triggerAction) {
      this.args.triggerAction(params);
    }
  }
}
