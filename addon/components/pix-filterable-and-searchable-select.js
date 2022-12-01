import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class PixFilterableAndSearchableSelect extends Component {
  @tracked selectedCategories = [];

  id = 'pix-filterable-and-searchable-select' + guidFor(this);

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
