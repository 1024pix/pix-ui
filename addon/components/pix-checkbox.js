import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

export default class PixCheckbox extends Component {
  get id() {
    return this.args.id || guidFor(this);
  }

  get inputClasses() {
    const classes = ['pix-checkbox__input'];

    if (this.args.isIndeterminate) {
      classes.push(`${classes[0]}--indeterminate`);
    }

    return classes.join(' ');
  }

  @action
  toggleChecked() {
    if (this.args.onChange) {
      return this.args.onChange(!this.args.checked, this.args.value);
    }
  }
}
