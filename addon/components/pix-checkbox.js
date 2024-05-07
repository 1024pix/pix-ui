import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

export default class PixCheckbox extends Component {
  constructor() {
    super(...arguments);
  }

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

  get isDisabled() {
    return this.args.isDisabled || this.args.disabled;
  }

  @action
  avoidCheckedStateChangeIfIsDisabled(event) {
    if (this.args.isDisabled) {
      event.preventDefault();
    }
  }
}
