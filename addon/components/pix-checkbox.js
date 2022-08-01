import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

const ERROR_MESSAGE =
  'ERROR in PixCheckbox component, you must provide @label or @ariaLabel params';

const labelSizeToClass = new Map([
  ['small', 'pix-checkbox__label--small'],
  ['default', 'pix-checkbox__label--default'],
  ['large', 'pix-checkbox__label--large'],
]);

export default class PixCheckbox extends Component {
  get id() {
    if (!this.args.id || !this.args.id.toString().trim()) {
      throw new Error('ERROR in PixCheckbox component, @id param is not provided');
    }
    return this.args.id;
  }

  get label() {
    if (!this.args.label && !this.args.ariaLabel) {
      throw new Error(ERROR_MESSAGE);
    }
    return htmlSafe(this.args.label);
  }

  get ariaLabel() {
    if (!this.args.label && !this.args.ariaLabel) {
      throw new Error(ERROR_MESSAGE);
    }
    return this.args.label ? null : this.args.ariaLabel;
  }

  get labelSizeClass() {
    return labelSizeToClass.get(this.args.labelSize);
  }
}
