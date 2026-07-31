import { warn } from '@ember/debug';
import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import onEnterAction from '../modifiers/on-enter-action';
import { formatMessage } from '../translations';
import PixCheckbox from './pix-checkbox';
import PixIcon from './pix-icon';
import PixSelectBase from './pix-select-base';

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

  get rootClassNames() {
    const classes = ['pix-multi-select'];
    if (this.args.inlineLabel) {
      classes.push('pix-multi-select--inline');
    }
    return classes.join(' ');
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

  get selectSearchLabel() {
    return formatMessage(this.args.locale ?? 'fr', 'select.search');
  }

  get selectBaseProps() {
    // Temporary :
    // used to differentiate initial select/multiselect props
    // from props added for select base component
    return {
      buttonClassName: this.mainInputClassName,
      isExpanded: this.isExpanded,
      isAriaExpanded: this.isAriaExpanded,
      selectSearchLabel: this.selectSearchLabel,
      resultsLength: this.results.length,
      rootClassNames: this.rootClassNames,
      // actions
      toggleDropdown: this.toggleDropDown,
      updateSearch: this.updateSearch,
      hideDropdown: this.hideDropDown,
      showDropdown: this.showDropDown,
    };
  }

  <template>
    <PixSelectBase
      {{! selectBase props }}
      @selectBaseProps={{this.selectBaseProps}}
      {{! inherited props }}
      @requiredLabel={{@requiredLabel}}
      @subLabel={{@subLabel}}
      @size={{@size}}
      @screenReaderOnly={{@screenReaderOnly}}
      @inlineLabel={{@inlineLabel}}
      @placement={{@placement}}
      @isDisabled={{@isDisabled}}
      @isSearchable={{@isSearchable}}
      @searchPlaceholder={{@searchPlaceholder}}
      @emptySearchMessage={{@emptySearchMessage}}
      @errorMessage={{@errorMessage}}
      ...attributes
    >
      <:label>
        {{yield to="label"}}
      </:label>
      <:buttonContent>
        {{#if (has-block "placeholder")}}
          <span class="pix-multi-select__placeholder">{{yield to="placeholder"}}</span>
        {{else if @placeholder}}
          <span class="pix-multi-select__placeholder">{{this.placeholder}}</span>
        {{/if}}
        <PixIcon
          class="pix-multi-select-main-input__dropdown-icon
            {{if this.isExpanded ' pix-multi-select-main-input__dropdown-icon--expand'}}"
          @name={{if this.isExpanded "chevronTop" "chevronBottom"}}
          @ariaHidden={{true}}
        />
      </:buttonContent>
      <:results>
        {{#each this.results as |option|}}
          <li class="pix-multi-select-list__item" role="menuitem">
            <PixCheckbox
              @id={{concat this.multiSelectId "-" option.value}}
              @checked={{this.isCheckBoxChecked option.value}}
              @size="small"
              @class="pix-multi-select-list__item-label"
              value={{option.value}}
              {{on "change" this.onSelect}}
              {{onEnterAction this.hideDropDown this.multiSelectId}}
              tabindex={{if this.isExpanded "0" "-1"}}
            >
              <:label>{{yield option}}</:label>
            </PixCheckbox>
          </li>
        {{/each}}
      </:results>
    </PixSelectBase>
  </template>
}
