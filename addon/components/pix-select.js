import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixSelect extends Component {
  @tracked isExpanded = false;
  selectId = 'select-' + guidFor(this);
  @tracked isValueAValidOption = false;

  constructor(...args) {
    super(...args);

    if (!this.args.label) throw new Error('ERROR in PixSelect, a label is required');

    if (this.args.isSearchable) {
      this.datalistId = 'pix-select-list-' + guidFor(this);
    }
  }

  get className() {
    const classes = [];
    if (this.args.className) {
      classes.push(` ${this.args.className}`);
    }
    if (this.args.errorMessage) {
      classes.push(' pix-select-button--error');
    }
    return classes.join(' ');
  }

  get isAriaExpanded() {
    return this.isExpanded ? 'true' : 'false';
  }

  get listId() {
    return `listbox-${this.selectId}`;
  }

  get placeholder() {
    if (!this.args.value) return this.args.placeholder;
    const option = this.args.options.find((option) => option.value === this.args.value);
    return option ? option.label : this.args.placeholder;
  }

  get defaultOption() {
    return {
      value: '',
    };
  }

  @action
  toggleDropdown(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.isExpanded = !this.isExpanded;
  }

  @action
  showDropdown(event) {
    if (this.isExpanded) return;

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.isExpanded = true;
  }

  @action
  hideDropdown(event) {
    if (!this.isExpanded) return;

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.isExpanded = false;
  }

  @action
  onChange(option, event) {
    this.args.onChange(option.value);

    this.hideDropdown(event);
    document.getElementById(this.selectId).focus();
  }

  @action
  lockTab(event) {
    if (event.code === 'Tab' && this.isExpanded) {
      event.preventDefault();
    }
  }

  get isBig() {
    return this.args.size === 'big';
  }

  get isValid() {
    return this.args.isValidationActive && this.isValueAValidOption;
  }

  @action
  onChangeOld(event) {
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
