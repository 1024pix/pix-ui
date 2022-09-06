import Component from '@glimmer/component';

const labelSizeToClass = new Map([
  ['small', 'pix-checkbox__label--small'],
  ['default', 'pix-checkbox__label--default'],
  ['large', 'pix-checkbox__label--large'],
]);

export default class PixCheckbox extends Component {
  constructor() {
    super(...arguments);

    if (!this.args.id || !this.args.id.toString().trim()) {
      throw new Error('ERROR in PixCheckbox component, @id param is not provided');
    }
  }

  get labelSizeClass() {
    return labelSizeToClass.get(this.args.labelSize);
  }
}
