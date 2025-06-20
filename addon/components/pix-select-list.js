import Component from '@glimmer/component';

export default class PixSelectList extends Component {
  get categories() {
    const uniqueCategories = new Set(
      ...this.args.options.map((option) => option.category).filter(Boolean),
    );
    return Array.from(uniqueCategories.values());
  }

  get displayCategory() {
    return this.categories.length > 0;
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

    options.forEach(({ category, value, label, icon, iconTitle }) => {
      const categoryIndex = results.findIndex((result) => result.category === category);
      if (categoryIndex !== -1) {
        results[categoryIndex].options.push({ value, label, icon, iconTitle });
      } else {
        results.push({ category, options: [{ label, value, icon, iconTitle }] });
      }
    });
    return results;
  }
}
