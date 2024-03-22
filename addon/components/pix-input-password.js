import PixInputBase from './pix-input-base';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixInputPassword extends PixInputBase {
  constructor() {
    super(...arguments);

    this.prefix = 'pix-input-password';
    this.inputValidationError = {
      default: '',
      error: 'pix-input-password__container--error',
      success: 'pix-input-password__container--success',
    };
  }

  @tracked isPasswordVisible = false;

  @action
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const InputElement = document.getElementById(this.args.id);
    if (InputElement) {
      InputElement.focus();
    }
  }
}
