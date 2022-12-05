import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixSelect extends Component {
  @tracked isExpanded = false;
  @tracked searchValue = null;
  searchId = 'search-input-' + guidFor(this);

  constructor(...args) {
    super(...args);

    if (!this.args.label && !this.args.id)
      throw new Error('ERROR in PixSelect, a @label or an @id was not provided');

    const categories = [];
    this.args.options.forEach((element) => {
      if (!categories.includes(element.category) && element.category !== undefined) {
        categories.push(element.category);
      }
    });

    this.displayCategory = categories.length > 0;
  }

  get selectId() {
    if (this.args.id) return this.args.id;
    return 'select-' + guidFor(this);
  }

  get displayDefaultOption() {
    return !this.searchValue && !this.args.hideDefaultOption;
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

  get dropDownId() {
    return `dropdown-${this.selectId}`;
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
    event.preventDefault();

    this.isExpanded = true;
  }

  @action
  hideDropdown(event) {
    if (this.isExpanded) {
      event.preventDefault();

      this.isExpanded = false;
    }
  }

  @action
  onChange(option, event) {
    this.args.onChange(option.value);

    this.hideDropdown(event);
    document.getElementById(this.selectId).focus();
  }

  @action
  setSearchValue(event) {
    this.searchValue = event.target.value.trim();
  }

  @action
  lockTab(event) {
    if (event.code === 'Tab' && this.isExpanded) {
      event.preventDefault();
      document.getElementById(this.searchId).focus();
    }
  }

  @action
  focus() {
    if (this.isExpanded) {
      if (this.args.value) {
        document.querySelector("[aria-selected='true']").focus();
      } else if (this.args.isSearchable) {
        document.getElementById(this.searchId).focus();
      } else if (this.displayDefaultOption) {
        document.querySelector("[aria-selected='true']").focus();
      }
    }
  }

  @action
  setSelectWidth() {
    const baseFontRemRatio = 16;
    const checkIconWidth = 16;
    const listWidth = document.getElementById(this.listId).getBoundingClientRect().width;
    const selectWidth = (listWidth + checkIconWidth) / baseFontRemRatio;
    document.getElementById(`container-${this.selectId}`).style.width = `${selectWidth}rem`;
  }
}
