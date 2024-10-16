import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixSelect extends Component {
  @service elementHelper;
  @tracked isExpanded = false;
  @tracked searchValue = null;

  constructor(...args) {
    super(...args);

    const categories = [];

    this.searchId = 'search-input-' + guidFor(this);
    this.selectId = this.args.id ? this.args.id : 'select-' + guidFor(this);
    this.listId = `listbox-${this.selectId}`;

    this.args.options.forEach((element) => {
      if (!categories.includes(element.category) && element.category !== undefined) {
        categories.push(element.category);
      }
    });
    this.displayCategory = categories.length > 0;

    if (!this.args.isComputeWidthDisabled) {
      this.elementHelper.waitForElement(this.listId).then((elementList) => {
        const baseFontRemRatio = Number(
          getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
        );
        const listWidth = elementList.getBoundingClientRect().width;
        const selectWidth = listWidth / baseFontRemRatio;

        const element = document.getElementById(`container-${this.selectId}`);
        element.style.setProperty('--pix-select-width', `${selectWidth}rem`);
      });
    }

    this.elementHelper.waitForElement(`container-${this.selectId}`).then((element) => {
      this.rootElement = element;
    });
  }

  get displayDefaultOption() {
    return !this.searchValue && !this.args.hideDefaultOption;
  }

  get isDefaultOptionHidden() {
    return !this.isExpanded || this.args.hideDefaultOption;
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
        option.label.toLowerCase().includes(this.searchValue.toLowerCase()),
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
    if (this.args.isDisabled) return;

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
    if (this.args.isDisabled) return;

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
      if (this.args.isSearchable) document.getElementById(this.searchId).focus();
    }
  }

  @action
  focus() {
    if (this.isExpanded) {
      if (this.args.value) {
        this.rootElement.querySelector("[aria-selected='true']").focus();
      } else if (this.args.isSearchable) {
        document.getElementById(this.searchId).focus();
      } else if (this.displayDefaultOption) {
        this.rootElement.querySelector("[aria-selected='true']").focus();
      }
    }
  }
}
