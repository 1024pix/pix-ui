import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixInput extends Component {
  @tracked isValueAValidOption = false;

  constructor() {
    super(...arguments);

    if (this.args.searchableOptions) {
      this.datalistId = 'pix-select-list-' + guidFor(this);
    }
  }

  @action
  onInputChange(event) {
    if (!this.isSearchable) {
      return;
    }

    this.isValueAValidOption = _checkIfValueIsAValidOption(
      event.target.value,
      this.args.searchableOptions,
    );

    if (this.args.onChange) {
      this.args.onChange(event);
    }
  }

  get isSearchable() {
    return this.args.searchableOptions;
  }
}

function _checkIfValueIsAValidOption(value, options) {
  if (!value) {
    return false;
  }

  return options.find(
    (option) => option.value.toLowerCase() === value.toLowerCase()
  );
}
