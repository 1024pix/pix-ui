import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixSelect extends Component {
  @tracked isValueAValidOption = false;

  constructor() {
    super(...arguments);

    if (this.args.isSearchable) {
      this.datalistId = 'pix-select-list-' + guidFor(this);
    }
  }
  
  get label() {
    const labelIsDefined = this.args.label && this.args.label.trim();
    const idIsNotDefined = this.args.id && !this.args.id.trim();

    if (labelIsDefined && idIsNotDefined) {
      throw new Error('ERROR in PixSelect component, @id param is necessary when giving @label');
    }
    return this.args.label || null;
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
        options: this.args.options
      });
    }
  }
}

function _checkIfValueIsAValidOption({ value, options }) {
  return value
    ? options.some((option) => option.label.toLowerCase() === value.toLowerCase())
    : false;
}
