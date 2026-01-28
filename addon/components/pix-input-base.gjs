import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class PixInputBase extends Component {
  prefix;
  inputValidationError;

  constructor() {
    super(...arguments);

    this.prefix = 'pix-input-base';
    this.inputValidationError = {
      default: '',
      error: 'pix-input-base--error',
      success: 'pix-input-base--success',
    };
  }

  get id() {
    if (this.args.id) return this.args.id;
    return this.prefix + '-' + guidFor(this);
  }

  get validationStatusClassName() {
    return this.inputValidationError[this.args.validationStatus] || '';
  }

  get ariaDescribedBy() {
    return this.args.validationStatus === 'error' ? this.prefix + '-error' : null;
  }

  get rootClassNames() {
    const classNames = ['pix-input'];
    if (this.args.inlineLabel) {
      classNames.push('pix-input--inline');
    }

    if (this.args.isFullWidth) {
      classNames.push('pix-input--full-width');
    }

    return classNames.join(' ');
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
