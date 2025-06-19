import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

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

  get options() {
    return [...(this.args.options || [])];
  }

  get hasValues() {
    return this.args.values && Array.isArray(this.args.values);
  }

  get displayedOptions() {
    const optionsWithCheckedStatus = this.options.map((option) => ({
      ...option,
      checked: this.hasValues ? this.args.values.includes(option.value) : false,
    }));

    if (this.args.isSearchable) {
      return [...optionsWithCheckedStatus.sort(sortOptionsByCheckedFirst)];
    }

    return optionsWithCheckedStatus;
  }

  get mainInputClassName() {
    let classes = 'pix-multi-select-main-input';

    if (this.args.isSearchable) {
      classes += ' pix-multi-select-main-input--is-searchable';
    }
    if (this.args.className) {
      classes += ` ${this.args.className}`;
    }

    return classes;
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
      return this.displayedOptions.filter(({ label }) => this._search(label));
    }
    return this.displayedOptions;
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
  }

  get className() {
    const { className } = this.args;
    return ' ' + className;
  }
}
