import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixSelect extends Component {
  @tracked isExpanded = false;
  @tracked searchValue = null;
  searchInputId = 'search-input-' + guidFor(this);
  selectId = 'select-' + guidFor(this);

  constructor(...args) {
    super(...args);

    if (!this.args.label) throw new Error('ERROR in PixSelect, a label is required');

    const categories = [];
    this.args.options.forEach((element) => {
      if (
        !categories.find((category) => element.category === category) &&
        element.category !== undefined
      ) {
        categories.push(element.category);
      }
    });

    this.displayCategory = categories.length > 1;
  }

  get className() {
    const classes = ['pix-select-button'];
    if (this.args.className) {
      classes.push(this.args.className);
    }
    if (this.args.errorMessage) {
      classes.push('pix-select-button--error');
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

  get results() {
    let results = [];
    let options = this.args.options;

    if (this.searchValue) {
      options = this.args.options.filter((option) =>
        option.label.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }

    if (!this.displayCategory) return options;

    options.forEach(({ category, value, label }) => {
      const categoryIndex = results.findIndex((result) => result.category === category);
      if (categoryIndex !== -1) {
        results[categoryIndex].options.push({ value, label });
      } else {
        results.push({ category, options: [{ label, value }] });
      }
    });
    return results;
  }

  @action
  toggleDropdown(event) {
    if (this.isExpanded) {
      this.hideDropdown(event);
    } else {
      this.showDropdown(event);
    }
  }

  @action
  showDropdown(event) {
    event.stopPropagation();
    event.preventDefault();

    this.isExpanded = true;
  }

  @action
  hideDropdown(event) {
    event.stopPropagation();
    event.preventDefault();

    this.isExpanded = false;
  }

  @action
  onChange(option, event) {
    this.args.onChange(option.value);

    this.hideDropdown(event);
    document.getElementById(this.selectId).focus();
  }

  @action
  filterOptions(event) {
    this.searchValue = event.target.value.trim();
  }

  @action
  lockTab(event) {
    if (event.code === 'Tab' && this.isExpanded) {
      event.preventDefault();
      document.getElementById(this.searchInputId).focus();
    }
  }

  @action
  setButtonWidth() {
    const baseFontRemRatio = 16;
    const listWidth = document.getElementById(this.listId).getBoundingClientRect().width;
    document.getElementById(this.selectId).style.width = `${(1 / baseFontRemRatio) * listWidth}rem`;
  }
}
