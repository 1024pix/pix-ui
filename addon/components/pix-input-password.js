import PixInput from './pix-input'
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const ERROR_MESSAGE = 'ERROR in PixInputPassword component, you must provide @label or @ariaLabel params';

export default class PixInputPassword extends PixInput {

  @tracked isPasswordVisible = false;

  get label() {
    if (!this.args.label && !this.args.ariaLabel) {
      throw new Error(ERROR_MESSAGE);
    }
    return this.args.label;
  }

  get type() {
    return this.isPasswordVisible ? 'text' : 'password';
  }

  get ariaLabel() {
    if (!this.args.label && !this.args.ariaLabel) {
      throw new Error(ERROR_MESSAGE);
    }
    return this.args.label ? null : this.args.ariaLabel;
  }

  get className() {
    return super.className;
  }

  @action
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
