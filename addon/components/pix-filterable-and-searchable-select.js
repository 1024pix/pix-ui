import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixFilterableAndSearchableSelect extends Component {
  @service elementHelper;
  @tracked selectedCategories = [];

  constructor(...args) {
    super(...args);
    this.mainId = 'pix-pfass-' + guidFor(this);
    this.pixSelectId = 'pix-pfass-select-' + guidFor(this);
    this.pixMultiSelectId = 'pix-pfass-multi-select-' + guidFor(this);

    this.elementHelper.waitForElement(this.pixSelectId).then(() => {
      const baseFontRemRatio = Number(
        getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
      );

      const multiSelectWidth = document
        .getElementById(this.pixMultiSelectId)
        .getBoundingClientRect().width;

      const selectWidth = Math.ceil(multiSelectWidth / baseFontRemRatio);

      const className = `sizing-select-${this.pixSelectId}`;
      this.elementHelper.createClass(`.${className}`, `width: calc(100% - ${selectWidth}rem);`);

      const element = document.getElementById(`container-${this.pixSelectId}`);

      element.className = element.className + ' ' + className;
    });
  }

  @action
  selectCategories(categories) {
    this.selectedCategories = categories;
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
}
