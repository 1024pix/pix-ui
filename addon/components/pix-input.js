import Component from '@glimmer/component';

const INPUT_VALIDATION_STATUS_MAP = {
  default: '',
  error: 'pix-input__input--error',
  success: 'pix-input__input--success',
};

export default class PixInput extends Component {
  get id() {
    if (!this.args.id || !this.args.id.toString().trim()) {
      throw new Error('ERROR in PixInput component, @id param is not provided');
    }
    return this.args.id;
  }

  get label() {
    return this.args.label;
  }

  get ariaLabel() {
    return this.args.label ? null : this.args.ariaLabel;
  }

  get validationStatusClassName() {
    return INPUT_VALIDATION_STATUS_MAP[this.args.validationStatus] || '';
  }
}
