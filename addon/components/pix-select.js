import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixSelect extends Component {
  selectId = 'select-' + guidFor(this);
  @tracked isValueAValidOption = false;

  constructor() {
    super(...arguments);

    if (!this.args.label) throw new Error('ERROR in PixSelect, a label is required');

    if (this.args.isSearchable) {
      this.datalistId = 'pix-select-list-' + guidFor(this);
    }
  }

  get isBig() {
    return this.args.size === 'big';
  }

  get isValid() {
    return this.args.isValidationActive && this.isValueAValidOption;
  }

  @action
  onChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event);
    }

    if (!this.args.isSearchable || !this.args.options) {
      return;
    }

    if (this.args.isValidationActive) {
      this.isValueAValidOption = _checkIfValueIsAValidOption({
        value: event.target.value,
        options: this.args.options,
      });
    }
  }
}

function _checkIfValueIsAValidOption({ value, options }) {
  return value
    ? options.some((option) => option.label.toLowerCase() === value.toLowerCase())
    : false;
}
