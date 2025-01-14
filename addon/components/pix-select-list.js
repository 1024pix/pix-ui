import Component from '@glimmer/component';

export default class PixSelectList extends Component {
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

  get isDefaultOptionHidden() {
    return !this.args.isExpanded || this.args.hideDefaultOption;
  }
  get results() {
    const results = [];
    let options = this.args.options;

    if (this.args.searchValue) {
      options = this.args.options.filter((option) =>
        option.label.toLowerCase().includes(this.args.searchValue.toLowerCase()),
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
}
