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
    const { onLoadOptions, selected } = this.args;

    if (this.args.title) {
      throw new Error(
        'ERROR in PixMultiSelect component: @title argument has been removed and must not be used anymore. Use @label to display a visible label or aria-label for accessibility.'
      );
    }

    if (this.args.size) {
      throw new Error(
        'ERROR in PixMultiSelect component: @size argument has been removed and must not be used anymore.'
      );
    }

    if (onLoadOptions) {
      this.isLoadingOptions = true;
      onLoadOptions().then((options = []) => {
        this.options = options;
        this._setDisplayedOptions(selected, true);
        this.isLoadingOptions = false;
      });
    } else {
      this.options = [...(this.args.options || [])];
      this._setDisplayedOptions(selected, true);
    }
  }

  get label() {
    const labelIsDefined = this.args.label && this.args.label.trim();
    const idIsNotDefined = this.args.id && !this.args.id.trim();

    if (labelIsDefined && idIsNotDefined) {
      throw new Error(
        'ERROR in PixMultiSelect component, @id param is necessary when giving @label'
      );
    }
    return this.args.label || null;
  }

  get results() {
    if (this.args.isSearchable && this.searchData) {
      return this.options.filter(({ label }) => this._search(label));
    }
    return this.options;
  }

  get placeholder() {
    const { selected, placeholder } = this.args;
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
    let selected = [...(this.args.selected || [])];
    if (event.target.checked) {
      selected.push(event.target.value);
    } else {
      selected = selected.filter((value) => value !== event.target.value);
    }

    this._setDisplayedOptions(selected, false);

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
  focusDropdown() {
    if (this.args.isSearchable && this.args.showOptionsOnInput) {
      this.showDropDown();
    }
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
