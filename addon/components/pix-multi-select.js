import Component from '@glimmer/component';

import { action } from '@ember/object';
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

  @tracked options = [];
  @tracked isLoadingOptions = false;

  constructor(...args) {
    super(...args);
    const { onLoadOptions, id, label, innerText } = this.args;

    const idIsNotDefined = !id || !id.trim();
    const labelIsNotDefined = !label || !label.trim();
    const innerTextIsNotDefined = !innerText || !innerText.trim();

    if (idIsNotDefined || labelIsNotDefined || innerTextIsNotDefined) {
      const missingParams = [];

      if (idIsNotDefined) missingParams.push('@id');
      if (labelIsNotDefined) missingParams.push('@label');
      if (innerTextIsNotDefined) missingParams.push('@innerText');

      throw new Error(
        `ERROR in PixMultiSelect component, ${missingParams.join(', ')} ${
          missingParams.length > 1 ? 'params are' : 'param is'
        } necessary`
      );
    }

    if (onLoadOptions) {
      this.isLoadingOptions = true;
      onLoadOptions().then((options = []) => {
        this.options = options;
        this.isLoadingOptions = false;
      });
    } else {
      this.options = [...(this.args.options || [])];
    }
  }

  get listId() {
    return `list-${this.args.id}`;
  }

  get labelId() {
    return `label-${this.args.id}`;
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

  get innerText() {
    const { selected, innerText } = this.args;
    if (selected?.length > 0) {
      const selectedOptionLabels = this.options
        .filter(({ value, label }) => {
          const hasOption = selected.includes(value);
          return hasOption && Boolean(label);
        })
        .map(({ label }) => label)
        .join(', ');
      return selectedOptionLabels;
    }
    return innerText;
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
    let selected = [...(this.args.selected || [])];
    if (event.target.checked) {
      selected.push(event.target.value);
    } else {
      selected = selected.filter((value) => value !== event.target.value);
    }

    if (this.args.onSelect) {
      this.args.onSelect(selected);
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
    this._setDisplayedOptions(this.args.selected, true);
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
      this._setDisplayedOptions(this.args.selected, true);
    }
  }
}
