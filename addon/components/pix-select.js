import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixSelect extends Component {
  @tracked isExpanded = false;
  @tracked searchData = null;
  searchInputId = 'search-input-' + guidFor(this);
  selectId = 'select-' + guidFor(this);

  constructor(...args) {
    super(...args);

    if (!this.args.label) throw new Error('ERROR in PixSelect, a label is required');
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

  get results() {
    let results = [];
    let options = this.args.options;

    if (this.searchData) {
      options = this.args.options.filter((option) =>
        option.label.toLowerCase().includes(this.searchData.toLowerCase())
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
  filterOptions(event) {
    this.searchData = event.target.value.trim();
  }

  @action
  lockTab(event) {
    if (event.code === 'Tab' && this.isExpanded) {
      event.preventDefault();
    }
  }
}
