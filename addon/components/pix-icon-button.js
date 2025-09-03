import { warn } from '@ember/debug';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class PixIconButton extends Component {
  text = 'pix-icon-button';

  get size() {
    return this.args.size || 'big';
  }

  get color() {
    return this.args.color || 'light-grey';
  }

  get isDisabled() {
    warn(
      'PixIconButton: @isDisabled attribute should be a boolean.',
      [true, false, undefined, null].includes(this.args.isDisabled),
      {
        id: 'pix-ui.icon-button.is-disabled.not-boolean',
      },
    );

    return this.args.isDisabled ? 'true' : null;
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
    if (this.isDisabled) return;

    if (this.args.triggerAction) {
      this.args.triggerAction(params);
    }
  }
}
