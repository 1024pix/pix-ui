import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixSelectGroupedOptions extends Component {
  @tracked matchingOptions;
  @tracked optionsHidden = true;
  @tracked selectedOption = {};
  @tracked searchedText;

  constructor() {
    super(...arguments);
    this.matchingOptions = this.args.options;
  }

  get optionsByCategory() {
    const categoryNames = _uniqValues(this.matchingOptions, 'category');
    const { categories } = this.args;

    return categoryNames
      .sort((name1, name2) => name1.localeCompare(name2))
      .map((categoryName) => {
        return {
          ...categories.find(({ name }) => name === categoryName),
          options: this.matchingOptions.filter((option) => option.category === categoryName),
        };
      });
  }

  get inputValue() {
    if (this.searchedText === null) {
      return this.selectedOption.label;
    }
    return this.searchedText;
  }

  @action
  displayOptions() {
    this.searchedText = '';
    this.optionsHidden = false;
  }

  @action
  onClick(e) {
    const { onChange, options } = this.args;

    const value = e.target.getAttribute('optionValue');
    this.selectedOption = _selectOptions(options, value);
    this.hideOptions();
    onChange(this.selectedOption.value);
  }

  @action
  hideOptions() {
    this.optionsHidden = true;
    this.searchedText = null;
    this.matchingOptions = this.args.options;
  }

  @action
  avoidTakingFocus(e) {
    if (event.target.getAttribute('role') !== 'option') {
      e.preventDefault();
    }
  }

  @action
  onSearch(event) {
    this.searchedText = event.target.value;
    this.matchingOptions = this.filterOptions(this.args.options, this.searchedText);
  }

  filterOptions(options, text) {
    const regex = new RegExp(text, 'i');
    return options.filter(({ label }) => {
      return regex.test(label);
    });
  }
}

function _uniqValues(values, key) {
  const allValues = values.map((value) => value[key]);
  const uniqValues = [];

  allValues.forEach((value) => {
    if (!uniqValues.includes(value)) {
      uniqValues.push(value);
    }
  });

  return uniqValues;
}

function _selectOptions(options, value) {
  return options.find((option) => {
    return option.value === value;
  });
}
