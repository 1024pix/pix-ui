import { warn } from '@ember/debug';
import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import onClickOutside from 'ember-click-outside/modifiers/on-click-outside';
import { PopperJS } from 'ember-popperjs';
import { gt, or } from 'ember-truth-helpers';

import onArrowDownUpAction from '../modifiers/on-arrow-down-up-action';
import onEnterAction from '../modifiers/on-enter-action';
import onEscapeAction from '../modifiers/on-escape-action';
import { formatMessage } from '../translations';
import PixCheckbox from './pix-checkbox';
import PixIcon from './pix-icon';
import PixLabel from './pix-label';

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
        const selectWidth = Number(listWidth / baseFontRemRatio + 0.5).toFixed(2); // Fix for FF

        const element = document.getElementById(`container-${this.multiSelectId}`);
        element.style.setProperty('--pix-multi-select-width', `${selectWidth}rem`);
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

  get selectSearchLabel() {
    return formatMessage(this.args.locale ?? 'fr', 'select.search');
  }

  @action
  focus(event) {
    if (!event.target) return;
    if (!this.isExpanded) return;

    if (this.args.isSearchable) {
      event.target.querySelector(`#${this.searchId}`)?.focus();
    }
  }

  <template>
    <div
      class="pix-multi-select {{if @inlineLabel ' pix-multi-select--inline'}}"
      id="container-{{this.multiSelectId}}"
      ...attributes
      {{onClickOutside this.hideDropDown}}
      {{onArrowDownUpAction this.listId this.showDropDown this.isExpanded}}
      {{onEscapeAction this.hideDropDown this.multiSelectId}}
    >
      <PixLabel
        @for={{this.multiSelectId}}
        @requiredLabel={{@requiredLabel}}
        @subLabel={{@subLabel}}
        @size={{@size}}
        @screenReaderOnly={{@screenReaderOnly}}
        @inlineLabel={{@inlineLabel}}
      >
        {{yield to="label"}}
      </PixLabel>

      <div>
        <PopperJS @placement={{or @placement "bottom-start"}} as |reference popover|>
          <button
            {{reference}}
            id={{this.multiSelectId}}
            type="button"
            aria-expanded={{this.isAriaExpanded}}
            aria-controls={{this.listId}}
            aria-haspopup="menu"
            class={{this.mainInputClassName}}
            disabled={{@isDisabled}}
            {{on "click" this.toggleDropDown}}
          >
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
          </button>

          <ul
            {{popover}}
            class="pix-multi-select-list {{unless this.isExpanded 'pix-multi-select-list--hidden'}}"
            id={{this.listId}}
            role="menu"
            aria-hidden={{this.isExpanded undefined "true"}}
            {{on "transitionend" this.focus}}
          >
            {{#if @isSearchable}}
              <li class="pix-select__search">
                <PixIcon class="pix-select-search__icon" @name="search" @ariaHidden={{true}} />
                <label class="screen-reader-only" for={{this.searchId}}>
                  {{this.selectSearchLabel}}
                </label>
                <input
                  class="pix-select-search__input"
                  id={{this.searchId}}
                  autocomplete="off"
                  tabindex={{if this.isExpanded "0" "-1"}}
                  placeholder={{@searchPlaceholder}}
                  {{on "input" this.updateSearch}}
                />
              </li>
            {{/if}}
            {{#if (gt this.results.length 0)}}
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
            {{else}}
              <li
                class="pix-multi-select-list__item pix-multi-select-list__item--no-result"
              >{{@emptyMessage}}</li>
            {{/if}}
          </ul>
        </PopperJS>
      </div>
    </div>
  </template>
}
