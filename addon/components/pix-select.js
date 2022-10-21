import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class PixSelect extends Component {
  @tracked isExpanded = false;
  @tracked selectedOption = null;
  @tracked searchData = null;

  constructor(...args) {
    super(...args);

    this.flattenOptions = this.args.options.flatMap((element) => element.options, []);
    this.displayCategory = this.args.options.length > 1;
  }

  get isAriaExpanded() {
    return this.isExpanded ? 'true' : 'false';
  }

  get listId() {
    return `listbox-${this.args.labels.select.id}`;
  }

  get innerText() {
    if (this.selectedOption) {
      const { label } = this.flattenOptions.find((option) => option.value === this.selectedOption);

      return label || this.args.labels.select.innerText;
    } else {
      return this.args.labels.select.innerText;
    }
  }

  get results() {
    console.log('flat', this.flattenOptions);
    if (!this.searchData) return this.args.options;
    const options = this.flattenOptions.filter((option) => option.label.includes(this.searchData));
    const results = [];
    options.forEach(({ category, value, label }) => {
      const categoryIndex = results.findIndex((result) => result.category === category);
      if (categoryIndex !== -1) {
        results[categoryIndex].options.push({ value, label });
      } else {
        results.push({ category, options: [{ label, value }] });
      }
    });
  }

  @action
  toggleDropdown(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.isExpanded = !this.isExpanded;
  }

  @action
  showDropdown(event) {
    if (this.isExpanded) return;

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.isExpanded = true;
  }

  @action
  hideDropdown(event) {
    if (!this.isExpanded) return;

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.isExpanded = false;
  }

  @action
  onSelect(option, event) {
    this.selectedOption = option.value;
    this.args.onSelect(this.selectedOption);

    this.hideDropdown(event);
    document.getElementById(this.args.labels.select.id).focus();
  }

  @action
  filterOptions(event) {
    this.searchData = event.target.value;
  }
}
