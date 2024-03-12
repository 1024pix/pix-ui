import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const INPUT_VALIDATION_STATUS_MAP = {
  default: '',
  error: 'pix-input-password__error-container',
  success: 'pix-input-password__success-container',
};

export default class PixInputPassword extends Component {
  @tracked isPasswordVisible = false;

  get id() {
    if (!this.args.id || !this.args.id.toString().trim()) {
      throw new Error('ERROR in PixInput component, @id param is not provided');
    }
    return this.args.id;
  }

  @action
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const InputElement = document.getElementById(this.args.id);
    if (InputElement) {
      InputElement.focus();
    }
  }

  get validationStatusClassName() {
    return INPUT_VALIDATION_STATUS_MAP[this.args.validationStatus] || '';
  }

  get ariaDescribedBy() {
    return this.args.validationStatus === 'error' ? 'text-input-password-error' : null;
  }

  get hasError() {
    return this.args.validationStatus === 'error';
  }

  get hasErrorMessage() {
    return this.hasError && !!this.args.errorMessage;
  }

  get hasSuccess() {
    return this.args.validationStatus === 'success';
  }
}
