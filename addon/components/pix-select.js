import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { createClass } from '../common/add-dynamic-style-tag';

export default class PixSelect extends Component {
  @tracked isExpanded = false;
  @tracked searchValue = null;
  searchId = 'search-input-' + guidFor(this);

  constructor(...args) {
    super(...args);

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
        document.querySelector("[aria-selected='true']").focus();
      } else if (this.args.isSearchable) {
        document.getElementById(this.searchId).focus();
      } else if (this.displayDefaultOption) {
        document.querySelector("[aria-selected='true']").focus();
      }
    }
  }

  _getTextWidth(text, font = 'Roboto') {
    const canvas = (this._getTextWidth.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }

  _getCssStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
  }

  _getCanvasFont(el = document.body) {
    const fontWeight = this._getCssStyle(el, 'font-weight') || 'normal';
    const fontSize = this._getCssStyle(el, 'font-size') || '0.875rem';
    const fontFamily = this._getCssStyle(el, 'font-family') || 'Roboto';

    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }

  @action
  setSelectWidth() {
    if (!this.args.isComputeWidthDisabled) {
      const baseFontRemRatio = Number(
        getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
      );

      const checkIconWidth = 1.125 * baseFontRemRatio;

      const options = document.querySelectorAll("li[role='option']");

      // let listWidth = this._getTextWidth(options[0], this._getCanvasFont(options[0]));
      let listWidth = options[0].getBoundingClientRect().width * 1.125;
      console.log({ listWidth });

      console.log(options[0]);

      // for (let i = 1; i < this.args.options.length; i++) {
      //   const optionWidth = this._getTextWidth(options[i], this._getCanvasFont(options[i]));
      //   if (optionWidth > listWidth) {
      //     listWidth = optionWidth;
      //   }
      //   console.log({ option: optionWidth }, { list: listWidth });
      // }

      const buttonGap = getComputedStyle(document.getElementById(this.selectId)).gap.match(
        /\d+(\.\d+)?/,
      )[0];

      console.log({ buttonGap });
      const selectWidth = (listWidth + checkIconWidth + buttonGap * 2) / baseFontRemRatio;

      const className = `sizing-select-${this.selectId}`;
      createClass(`.${className}`, `width: ${selectWidth}rem;`);

      const element = document.getElementById(`container-${this.selectId}`);

      element.className = element.className + ' ' + className;
    }
  }
}
