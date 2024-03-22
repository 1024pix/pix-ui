import PixInputBase from './pix-input-base';

export default class PixInput extends PixInputBase {
  constructor() {
    super(...arguments);

    this.prefix = 'pix-input';
    this.inputValidationError = {
      default: '',
      error: 'pix-input__input--error',
      success: 'pix-input__input--success',
    };
  }
}
