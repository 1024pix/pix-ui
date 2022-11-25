import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixFilterableAndSearchableSelect extends Component {
  @tracked selectedCategories = [];

  @action
  selectCategories(categories) {
    this.selectedCategories = categories;
    console.log(categories);
  }

  get categories() {
    const categoryNames = [];
    this.args.selectOptions.forEach((option) => {
      if (!categoryNames.includes(option.category)) {
        categoryNames.push(option.category);
      }
    });

    return categoryNames.map((category) => {
      return { label: category, value: category };
    });
  }

  get selectableOptions() {
    const selectableOptions = [];
    const categories =
      this.selectedCategories.length === 0
        ? this.categories.map(({ value }) => value)
        : this.selectedCategories;

    this.args.selectOptions.forEach((option) => {
      if (categories.includes(option.category)) {
        selectableOptions.push(option);
      }
    });

    return selectableOptions;
  }
}
