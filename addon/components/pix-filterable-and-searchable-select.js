import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { createClass } from '../common/add-dynamic-style-tag';

export default class PixFilterableAndSearchableSelect extends Component {
  @tracked selectedCategories = [];
  mainId = 'pix-pfass-' + guidFor(this);
  pixSelectId = 'pix-pfass-select-' + guidFor(this);
  pixMultiSelectId = 'pix-pfass-multi-select-' + guidFor(this);

  @action
  selectCategories(categories) {
    this.selectedCategories = categories;
  }

  get classLabel() {
    const cssClass = ['pix-filterable-and-searchable-select__label'];

    if (this.args.screenReaderOnly) cssClass.push('screen-reader-only');

    return cssClass.join(' ');
  }

  get categories() {
    const categoryNames = [];
    this.args.options.forEach((option) => {
      if (!categoryNames.includes(option.category)) {
        categoryNames.push(option.category);
      }
    });

    return categoryNames.map((category) => {
      return { label: category, value: category };
    });
  }

  get categoriesPlaceholder() {
    return `${this.args.categoriesPlaceholder} (${this.selectedCategories.length})`;
  }

  get selectableOptions() {
    const selectableOptions = [];
    const categories =
      this.selectedCategories.length === 0
        ? this.categories.map(({ value }) => value)
        : this.selectedCategories;

    this.args.options.forEach((option) => {
      if (categories.includes(option.category)) {
        selectableOptions.push(option);
      }
    });

    return selectableOptions;
  }

  @action
  setSelectWidth(element) {
    const baseFontRemRatio = Number(
      getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
    );

    const multiSelectWidth = document
      .getElementById(this.pixMultiSelectId)
      .getBoundingClientRect().width;

    const selectWidth = Math.ceil(multiSelectWidth / baseFontRemRatio);

    const className = `sizing-select-${this.pixSelectId}`;
    createClass(`.${className}`, `width: calc(100% - ${selectWidth}rem);`);

    element.className = element.className + ' ' + className;
  }
}
