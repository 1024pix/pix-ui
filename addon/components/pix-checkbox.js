import Component from '@glimmer/component';

export default class PixCheckbox extends Component {
  constructor() {
    super(...arguments);

    if (!this.args.id || !this.args.id.toString().trim()) {
      throw new Error('ERROR in PixCheckbox component, @id param is not provided');
    }
  }

  get inputClasses() {
    const classes = ['pix-checkbox__input'];

    if (this.args.isIndeterminate) {
      classes.push(`${classes[0]}--indeterminate`);
    }

    return classes.join(' ');
  }

  get labelClasses() {
    const classes = ['pix-checkbox__label'];

    if (this.args.labelSize) {
      classes.push(`${classes[0]}--${this.args.labelSize}`);
    }

    if (this.args.screenReaderOnly) {
      classes.push('screen-reader-only');
    }

    return classes.join(' ');
  }
}
