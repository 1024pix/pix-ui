import Component from '@glimmer/component';

export default class PixFilterableAndSearchableSelect extends Component {
  get categories() {
    const categoryNames = [];
    this.args.selectOptions.forEach((option) => {
      if (!categoryNames.includes(option.category)) {
        return categoryNames.push(option.category);
      }
    });

    return categoryNames.map((category) => {
      return { label: category, value: category };
    });
  }
}
