import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';

function sortOptionsByCheckedFirst(a, b) {
  if (a.checked && b.checked) return 0;
  if (a.checked) return -1;
  if (b.checked) return 1;
  return 0;
}

function removeCapitalizeAndDiacritics(string) {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export default class PixMultiSelect extends Component {
  @tracked isExpanded = false;
  @tracked searchData;

  @tracked options = [];

  constructor(...args) {
    super(...args);

    this.options = [...(this.args.options || [])];
  }

  get headerClassName() {
    const classes = ['pix-multi-select-header'];
    if (this.args.className) {
      classes.push(this.args.className);
    }

    return classes.join(' ');
  }

  get multiSelectId() {
    if (this.args.id) return this.args.id;
    return 'select-' + guidFor(this);
  }

  get listId() {
    return `list-${this.multiSelectId}`;
  }

  get isAriaExpanded() {
    return this.isExpanded ? 'true' : 'false';
  }

  get results() {
    if (this.args.isSearchable && this.searchData) {
      return this.options.filter(({ label }) => this._search(label));
    }
    return this.options;
  }

  get placeholder() {
    const { values, placeholder } = this.args;
    if (values?.length > 0) {
      const selectedOptionLabels = this.options
        .filter((option) => {
          const hasOption = values.includes(option.value);
          return hasOption && Boolean(option.label);
        })
        .map(({ label }) => label)
        .join(', ');
      return selectedOptionLabels;
    }
    return placeholder;
  }

  _setDisplayedOptions(selected, shouldSort) {
    const options = this.options.map((option) => ({
      ...option,
      checked: selected ? selected.includes(option.value) : false,
    }));

    if (shouldSort && this.args.isSearchable) {
      options.sort(sortOptionsByCheckedFirst);
    }

    this.options = options;
  }

  _search(label) {
    if (this.args.strictSearch) {
      return label.includes(this.searchData);
    }
    return removeCapitalizeAndDiacritics(label).includes(this.searchData);
  }

  @action
  onSelect(event) {
    let selected = [...(this.args.values || [])];
    if (event.target.checked) {
      selected.push(event.target.value);
    } else {
      selected = selected.filter((value) => value !== event.target.value);
    }

    if (this.args.onChange) {
      this.args.onChange(selected);
    }
  }

  @action
  toggleDropDown() {
    if (this.isExpanded) {
      this.hideDropDown();
    } else {
      this.showDropDown();
    }
  }

  @action
  showDropDown() {
    if (this.isExpanded) return;
    this.isExpanded = true;
    this._setDisplayedOptions(this.args.values, true);
  }

  @action
  hideDropDown(event) {
    if (!this.isExpanded) return;

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.isExpanded = false;
  }

  @action
  updateSearch(event) {
    this.searchData = this.args.strictSearch
      ? event.target.value
      : removeCapitalizeAndDiacritics(event.target.value);
    this.isExpanded = true;
    if (!event.target.value) {
      this._setDisplayedOptions(this.args.values, true);
    }
  }

  get className() {
    const { className } = this.args;
    return ' ' + className;
  }
}
