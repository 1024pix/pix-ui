import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { warn } from '@ember/debug';
import { formatMessage } from '../translations';

export default class PixRadioButton extends Component {
  constructor() {
    super(...arguments);

    warn(
      'PixRadioButton: @state attribute should be used along with @isDisabled attribute.',
      this.stateWarning,
      {
        id: 'pix-ui.radio-button.state.cant-be-used-without-is-disabled',
      },
    );
  }
  text = 'pix-radio-button';

  get stateWarning() {
    return Boolean(this.isDisabled) && (!this.hasErrorState || !this.hasSuccessState);
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

  get isDisabled() {
    warn(
      'PixRadioButton: @isDisabled attribute should be a boolean.',
      [true, false, undefined, null].includes(this.args.isDisabled),
      {
        id: 'pix-ui.radio-button.is-disabled.not-boolean',
      },
    );

    return this.args.isDisabled || this.args.disabled ? 'true' : null;
  }

  get inputClasses() {
    const classes = ['pix-radio-button__input'];

    if (this.hasSuccessState || this.hasErrorState) {
      classes.push(`${classes[0]}--state`);
    }

    return classes.join(' ');
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

  @action
  avoidCheckedStateChangeIfIsDisabled(event) {
    if (this.args.isDisabled) {
      event.preventDefault();
    }
  }
}
