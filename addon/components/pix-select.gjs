import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import onClickOutsideModifier from 'ember-click-outside/modifiers/on-click-outside';
import { FloatingUI } from 'ember-primitives/floating-ui';

import onArrowDownUpAction from '../modifiers/on-arrow-down-up-action';
import onEscapeAction from '../modifiers/on-escape-action';
import PixIcon from './pix-icon';
import PixLabel from './pix-label';
import PixSelectList from './pix-select-list';

export default class PixSelect extends Component {
  @service elementHelper;
  @tracked isExpanded = false;
  @tracked searchValue = null;

  constructor(...args) {
    super(...args);

    this.searchId = 'search-input-' + guidFor(this);
    this.selectId = this.args.id ? this.args.id : 'select-' + guidFor(this);
    this.listId = `listbox-${this.selectId}`;

    if (!this.args.isComputeWidthDisabled) {
      this.elementHelper.waitForElement(this.listId).then((elementList) => {
        const baseFontRemRatio = Number(
          getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
        );

        const listWidth = elementList.parentNode.getBoundingClientRect().width;
        const selectWidth = listWidth / baseFontRemRatio;

        const element = document.getElementById(`container-${this.selectId}`);
        element.style.setProperty('--pix-select-width', `${selectWidth}rem`);
      });
    }
  }

  get displayDefaultOption() {
    return !this.searchValue && !this.args.hideDefaultOption;
  }

  get className() {
    const classes = ['pix-select-button'];
    if (this.args.className) {
      classes.push(this.args.className);
    }
    if (this.args.errorMessage) {
      classes.push('pix-select-button--error');
    }

    return classes.join(' ');
  }

  get isAriaExpanded() {
    return this.isExpanded ? 'true' : 'false';
  }

  get placeholder() {
    if (!this.args.value) return this.args.placeholder;
    const option = this.args.options.find((option) => option.value === this.args.value);
    return option ? option.label : this.args.placeholder;
  }

  get defaultOption() {
    return {
      value: '',
    };
  }

  @action
  toggleDropdown(event) {
    if (this.isExpanded) {
      this.hideDropdown(event);
    } else {
      this.showDropdown(event);
    }
  }

  @action
  showDropdown(event) {
    event.preventDefault();
    if (this.args.isDisabled) return;

    this.isExpanded = true;
  }

  @action
  hideDropdown(event) {
    if (this.isExpanded) {
      event.preventDefault();

      this.isExpanded = false;
    }
  }

  @action
  onChange(option, event) {
    if (this.args.isDisabled) return;

    this.args.onChange(option.value);

    this.hideDropdown(event);
    document.getElementById(this.selectId).focus();
  }

  @action
  setSearchValue(event) {
    this.searchValue = event.target.value.trim();
  }

  @action
  lockTab(event) {
    if (event.code === 'Tab' && this.isExpanded) {
      event.preventDefault();
      if (this.args.isSearchable) document.getElementById(this.searchId).focus();
    }
  }

  @action
  focus(event) {
    if (!event.target) return;
    if (!this.isExpanded) return;

    if (this.args.value) {
      event.target.querySelector("[aria-selected='true']")?.focus();
    } else if (this.args.isSearchable) {
      event.target.querySelector(`#${this.searchId}`)?.focus();
    } else if (this.displayDefaultOption) {
      event.target.querySelector("[aria-selected='true']")?.focus();
    }
  }

  <template>
    <div
      class="pix-select {{if @inlineLabel ' pix-select--inline'}}"
      id="container-{{this.selectId}}"
      {{onClickOutsideModifier this.hideDropdown}}
      {{onArrowDownUpAction this.listId this.showDropdown this.isExpanded}}
      {{onEscapeAction this.hideDropdown this.selectId}}
      {{on "keydown" this.lockTab}}
      ...attributes
    >
      {{#if (has-block "label")}}
        <PixLabel
          @for={{this.selectId}}
          @requiredLabel={{@requiredLabel}}
          @subLabel={{@subLabel}}
          @size={{@size}}
          @screenReaderOnly={{@screenReaderOnly}}
          @inlineLabel={{@inlineLabel}}
        >
          {{yield to="label"}}
        </PixLabel>
      {{/if}}

      <FloatingUI @placement="bottom" as |reference floating|>
        <div>
          <button
            {{reference}}
            type="button"
            id={{this.selectId}}
            class={{this.className}}
            {{on "click" this.toggleDropdown}}
            aria-expanded={{this.isAriaExpanded}}
            aria-controls={{this.listId}}
            aria-disabled={{@isDisabled}}
          >
            {{#if @iconName}}
              <PixIcon
                @name={{@iconName}}
                @plainIcon={{@plainIcon}}
                @ariaHidden={{true}}
                class="pix-select-button__icon"
              />
            {{/if}}

            <span class="pix-select-button__text">{{this.placeholder}}</span>

            <PixIcon
              class="pix-select-button__dropdown-icon"
              @ariaHidden={{true}}
              @name={{if this.isExpanded "chevronTop" "chevronBottom"}}
            />
          </button>

          <div class="pix-select__floating-container" {{floating}}>
            <div
              class="pix-select__dropdown
                {{unless this.isExpanded ' pix-select__dropdown--closed'}}"
              {{on "transitionend" this.focus}}
            >
              {{#if @isSearchable}}
                <div class="pix-select__search">
                  <PixIcon class="pix-select-search__icon" @name="search" @ariaHidden={{true}} />
                  <label class="screen-reader-only" for={{this.searchId}}>{{@searchLabel}}</label>
                  <input
                    class="pix-select-search__input"
                    id={{this.searchId}}
                    autocomplete="off"
                    tabindex={{if this.isExpanded "0" "-1"}}
                    placeholder={{@searchPlaceholder}}
                    {{on "input" this.setSearchValue}}
                  />
                </div>
              {{/if}}
              <PixSelectList
                @hideDefaultOption={{@hideDefaultOption}}
                @listId={{this.listId}}
                @value={{@value}}
                @displayDefaultOption={{this.displayDefaultOption}}
                @searchValue={{this.searchValue}}
                @onChange={{this.onChange}}
                @defaultOption={{this.defaultOption}}
                @selectId={{this.selectId}}
                @isExpanded={{this.isExpanded}}
                @options={{@options}}
                @defaultOptionValue={{@placeholder}}
                @emptySearchMessage={{@emptySearchMessage}}
              />
            </div>
          </div>

          {{#if @errorMessage}}
            <p class="pix-select__error-message">{{@errorMessage}}</p>
          {{/if}}
        </div>
      </FloatingUI>
    </div>
  </template>
}
