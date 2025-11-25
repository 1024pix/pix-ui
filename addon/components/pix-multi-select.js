import { warn } from '@ember/debug';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

function removeCapitalizeAndDiacritics(string) {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export default class PixMultiSelect extends Component {
  @tracked isExpanded = false;
  @tracked searchData;
  @service elementHelper;

  constructor(...args) {
    super(...args);

    this.searchId = 'search-input-' + guidFor(this);
    this.multiSelectId = this.args.id ? this.args.id : 'select-' + guidFor(this);
    this.listId = `list-${this.multiSelectId}`;

    if (!this.args.isComputeWidthDisabled) {
      this.elementHelper.waitForElement(this.listId).then((elementList) => {
        const baseFontRemRatio = Number(
          getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
        );
        const listWidth = elementList.getBoundingClientRect().width;
        const selectWidth = listWidth / baseFontRemRatio;

        const element = document.getElementById(`container-${this.multiSelectId}`);
        element.style.setProperty('--pix-multi-select-width', `${selectWidth + 0.5}rem`); // Fix for FF
      });
    }

    warn(
      `PixMultiSelect: @strictSearch is deprecated in favour of @onSearch`,
      !this.args.strictSearch,
      {
        id: 'pix-ui.pix-multi-select.strictSearch.deprecated',
      },
    );
  }

  get options() {
    return [...(this.args.options || [])];
  }

  get mainInputClassName() {
    let classes = 'pix-multi-select-main-input';

    if (this.args.className) {
      classes += ` ${this.args.className}`;
    }

    return classes;
  }

  get isAriaExpanded() {
    return this.isExpanded ? 'true' : 'false';
  }

  get results() {
    if (this.args.isSearchable && this.searchData) {
      return this.args.options.filter(({ label }) => this._search(label));
    }
    return this.args.options;
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
    if (this.args.onSearch) {
      this.args.onSearch(event.target.value);
    } else {
      this.searchData = this.args.strictSearch
        ? event.target.value
        : removeCapitalizeAndDiacritics(event.target.value);
    }
  }

  @action
  isCheckBoxChecked(value) {
    return this.args.values?.includes(value);
  }

  get className() {
    const { className } = this.args;
    return ' ' + className;
  }

  @action
  focus(event) {
    if (!event.target) return;
    if (!this.isExpanded) return;

    if (this.args.isSearchable) {
      event.target.querySelector(`#${this.searchId}`)?.focus();
    }
  }
}
