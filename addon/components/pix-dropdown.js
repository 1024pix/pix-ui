import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixDropdown extends Component {
  defaultId = Math.floor(Math.random() * 100);
  focusedOption = null;
  focusedIndex = null;
  @tracked page = 1;
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

  get showLimit() {
    if (!this.args.pageSize) return this.options.length;

    const numberOfOptionsAccordingToPage = this.args.pageSize * this.page;
    return Math.min(this.options.length, numberOfOptionsAccordingToPage);
  }

  @action
  resetPreviouslyFocused() {
    if (!this.focusedOption) return;

    const previouslyFocusedElement = document.getElementById(this.focusedOption.value);
    previouslyFocusedElement?.blur();
    this.focusedOption = undefined;
    this.focusedIndex = undefined;
  }

  _navigateToOption(option, index) {
    if (!option) return;

    this.resetPreviouslyFocused();
    this.focusedOption = option;
    this.focusedIndex = index;
    const focusedElement = document.getElementById(option.value);
    focusedElement?.scrollIntoView({ block: 'nearest' });
    focusedElement?.focus();
  }

  _computeNextIndex(isArrowDown, index) {
    const length = this.showLimit;
    let nextIndex;
    if (index === undefined || index === null) {
      nextIndex = isArrowDown ? 0 : length - 1;
    } else {
      const delta = isArrowDown ? 1 : -1;
      nextIndex = index + delta;
    }
    // navigate through array in a circle
    // (i.e. go back to first after last or last after first)
    return ((nextIndex % length) + length) % length;
  }

  @action
  navigateThroughOptions(event) {
    const isArrowDown = event.code === 'ArrowDown';
    if (event.code !== 'ArrowUp' && !isArrowDown) return;
    const nextIndex = this._computeNextIndex(isArrowDown, this.focusedIndex);
    this._navigateToOption(this.options[nextIndex], nextIndex);
  }

  @action
  toggleDropdown() {
    this.isExpanded = !this.isExpanded;

    if (this.isExpanded) {
      this.resetPreviouslyFocused();
      const searchInput = document.getElementById(this.searchInputId);
      if (searchInput) {
        searchInput.focus();
      } else {
        this._navigateToOption(this.options[0], 0);
      }
    }

    const menu = document.getElementById(this.menuId);
    menu.scrollTop = 0;
    this.page = 1;
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
    this._navigateToOption(this.options[0], 0);
    this.args.onSelect?.();
  }

  @action
  onClearKeyPress(event) {
    if (event.code === 'Enter' || event.code === 'Space') this.clearSelection(event);
  }

  @action
  filterOptions(event) {
    this.resetPreviouslyFocused();
    const filterValue = event.target?.value.toLowerCase();
    this.page = 1;
    this.options = filterValue
      ? this.args.options.filter(({ label }) => label.toLowerCase().includes(filterValue))
      : this.args.options;
  }

  _isLastOptionVisible(option) {
    const lastVisibleOption = document.getElementById(option.value);
    const menu = document.getElementById(this.menuId);

    const { bottom, height, top } = lastVisibleOption.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    return top <= menuRect.top ? menuRect.top - top <= height : bottom - menuRect.bottom <= height;
  }

  @action
  incrementPage() {
    if (!this.args.pageSize) return;

    if (this._isLastOptionVisible(this.options[this.showLimit - 1])) {
      this.page += 1;
    }
  }
}
