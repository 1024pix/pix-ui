import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { warn } from '@ember/debug';
import { formatMessage } from '../translations';

export default class PixCheckbox extends Component {
  constructor() {
    super(...arguments);
  }

  get id() {
    return this.args.id || guidFor(this);
  }

  get stateId() {
    return `${this.id}-state`;
  }

  get hasSuccessState() {
    return this.args.state === 'success';
  }

  get hasErrorState() {
    return this.args.state === 'error';
  }

  get inputClasses() {
    const classes = ['pix-checkbox__input'];

    if (this.args.isIndeterminate) {
      classes.push(`${classes[0]}--indeterminate`);
    }

    if (this.hasSuccessState) {
      classes.push(`${classes[0]}--state-success`);
    }

    if (this.hasErrorState) {
      classes.push(`${classes[0]}--state-error`);
    }

    return classes.join(' ');
  }

  get isDisabled() {
    warn(
      'PixCheckbox: @isDisabled attribute should be a boolean.',
      [true, false, undefined, null].includes(this.args.isDisabled),
      {
        id: 'pix-ui.checkbox.is-disabled.not-boolean',
      },
    );

    return this.args.isDisabled || this.args.disabled ? 'true' : null;
  }

  @action
  avoidCheckedStateChangeIfIsDisabled(event) {
    if (this.args.isDisabled) {
      event.preventDefault();
    }
  }

  get stateSuccessMessage() {
    return this.formatMessage('state.success');
  }

  get stateErrorMessage() {
    return this.formatMessage('state.error');
  }

  formatMessage(message) {
    return formatMessage('fr', `input.${message}`);
  }
}
