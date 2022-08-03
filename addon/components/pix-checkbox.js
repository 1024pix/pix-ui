import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

const labelSizeToClass = new Map([
  ['small', 'pix-checkbox__label--small'],
  ['default', 'pix-checkbox__label--default'],
  ['large', 'pix-checkbox__label--large'],
]);

export default class PixCheckbox extends Component {
  constructor() {
    super(...arguments);

    if (!this.args.label) {
      throw new Error('ERROR in PixCheckbox component, you must provide @label params');
    }
    this.label = htmlSafe(this.args.label);
  }

  get id() {
    if (!this.args.id || !this.args.id.toString().trim()) {
      throw new Error('ERROR in PixCheckbox component, @id param is not provided');
    }
    return this.args.id;
  }

  get labelSizeClass() {
    return labelSizeToClass.get(this.args.labelSize);
  }
}
