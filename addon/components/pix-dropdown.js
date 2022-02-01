import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixDropdown extends Component {
  defaultId = Math.floor(Math.random() * 100);
  @tracked selectedOption = null;
  @tracked isExpanded = false;
  @tracked options = this.args.options;
  @tracked menuId = `menu-${this.defaultId}`;
  @tracked searchInputId = `search-input-${this.defaultId}`;

  constructor() {
    super(...arguments);

    if (!this.args.label && !this.args.placeholder) {
      throw new Error(
        'ERROR in PixDropdown component, you need to provide a label and/or a placeholder'
      );
    }

    if (this.args.selectedOption) {
      this.selectedOption = this.args.options.find(
        ({ value }) => value === this.args.selectedOption
      );
    }
  }

  get hasSelectedOption() {
    return !!this.selectedOption;
  }

  get placeholder() {
    return this.selectedOption?.label || this.args.placeholder;
  }

  get label() {
    const labelIsDefined = this.args.label?.trim();
    const idIsNotDefined = !this.args.id?.trim();

    if (labelIsDefined && idIsNotDefined) {
      throw new Error('ERROR in PixDropdown component, @id param is necessary when giving @label');
    }
    return this.args.label || null;
  }

  @action
  toggleDropdown() {
    this.isExpanded = !this.isExpanded;

    if (this.isExpanded) {
      const searchInput = document.getElementById(this.searchInputId);
      if (searchInput) {
        searchInput.focus();
      }
    }

    const menu = document.getElementById(this.menuId);
    menu.scrollTop = 0;
  }

  @action
  selectOption(option) {
    if (this.selectedOption?.value !== option.value) {
      this.args.onSelect?.(option.value);
      this.selectedOption = option;
    }
    this.isExpanded = false;

    const searchInput = document.getElementById(this.searchInputId);
    if (searchInput) {
      searchInput.value = '';
      this.options = this.args.options;
    }
  }

  @action
  onOptionKeyPress(option, event) {
    if (event.code === 'Enter' || event.code === 'Space') this.selectOption(option);
  }

  @action
  clearSelection(event) {
    event.stopPropagation();
    event.preventDefault();
    this.selectedOption = null;
    this.args.onSelect?.();
  }

  @action
  onClearKeyPress(event) {
    if (event.code === 'Enter' || event.code === 'Space') this.clearSelection(event);
  }

  @action
  filterOptions(event) {
    const filterValue = event.target?.value.toLowerCase();
    this.options = filterValue
      ? this.args.options.filter(({ label }) => label.toLowerCase().includes(filterValue))
      : this.args.options;
  }
}
