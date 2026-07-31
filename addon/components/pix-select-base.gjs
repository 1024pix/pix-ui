import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import onClickOutside from 'ember-click-outside/modifiers/on-click-outside';
import { PopperJS } from 'ember-popperjs';
import { gt, or } from 'ember-truth-helpers';

import onArrowDownUpAction from '../modifiers/on-arrow-down-up-action';
import onEscapeAction from '../modifiers/on-escape-action';
import PixIcon from './pix-icon';
import PixLabel from './pix-label';

/*
Select vs MultiSelect initial props

  MultiSelect               Select

  @id                       ""
  @className                ""
  @requiredLabel            ""
  @subLabel                 ""
  @placeholder              ""
  @onChange                 ""
  @onSearch                 ""
  @size                     ""
  @screenReaderOnly         ""
  @inlineLabel              ""
  @isDisabled               ""
  @searchPlaceholder        ""
  @options                  ""
  @isSearchable             ""
  @isComputeWidthDisabled   ""
  @placement                ""
  @locale                   ""
  @strictSearch             /
  @emptyMessage             /
  @values                   @value
                            @iconName
                            @plainIcon
                            @hideDefaultOption
                            @defaultOptionValue
                            @emptySearchMessage
                            @errorMessage
                            @searchLabel
                            @isFullWidth
 */

/**
selectBaseProps

attr
  buttonClassName
  isExpanded
  isAriaExpanded
  selectSearchLabel
  resultsLength
  rootClassNames

events :
  focus
  toggleDropdown
  updateSearch
  hideDropdown
  showDropdown
 */

export default class PixSelectBase extends Component {
  @service elementHelper;

  constructor(...args) {
    super(...args);

    this.searchId = 'search-input-' + guidFor(this);
    this.selectId = this.args.id ? this.args.id : 'select-' + guidFor(this);
    this.listId = `list-${this.selectId}`;

    if (!this.args.isComputeWidthDisabled) {
      this.elementHelper.waitForElement(this.listId).then((elementList) => {
        const baseFontRemRatio = Number(
          getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
        );
        const listWidth = elementList.getBoundingClientRect().width;
        const selectWidth = Number(listWidth / baseFontRemRatio + 0.5).toFixed(2); // Fix for FF

        const element = document.getElementById(`container-${this.selectId}`);
        element.style.setProperty('--pix-multi-select-width', `${selectWidth}rem`);
      });
    }
  }

  @action
  focus(event) {
    if (!event.target) return;
    if (!this.isExpanded) return;

    if (this.args.isSearchable) {
      event.target.querySelector(`#${this.searchId}`)?.focus();
    }
  }

  @action
  lockTab(event) {
    if (event.code === 'Tab' && this.isExpanded) {
      event.preventDefault();
      if (this.args.isSearchable) document.getElementById(this.searchId).focus();
    }
  }

  <template>
    <div
      id="container-{{this.selectId}}"
      class={{@selectBaseProps.rootClassNames}}
      {{onClickOutside @selectBaseProps.hideDropdown}}
      {{onArrowDownUpAction this.listId @selectBaseProps.showDropdown @selectBaseProps.isExpanded}}
      {{onEscapeAction @selectBaseProps.hideDropdown this.selectId}}
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
      <div class="pix-select__button-container">
        <PopperJS @placement={{or @placement "bottom-start"}} as |reference popover|>
          <button
            {{reference}}
            type="button"
            id={{this.selectId}}
            class={{@selectBaseProps.buttonClassName}}
            aria-haspopup="menu"
            aria-expanded={{@selectBaseProps.isAriaExpanded}}
            aria-controls={{this.listId}}
            aria-disabled={{@isDisabled}}
            disabled={{@isDisabled}}
            {{on "click" @selectBaseProps.toggleDropdown}}
          >

            {{yield to="buttonContent"}}

          </button>

          <ul
            {{popover}}
            id={{this.listId}}
            role="menu"
            class="pix-select__dropdown
              {{unless @selectBaseProps.isExpanded ' pix-select__dropdown--closed'}}"
            aria-hidden={{@selectBaseProps.isExpanded undefined "true"}}
            {{on "transitionend" this.focus}}
          >
            {{#if @isSearchable}}
              <li class="pix-select__search">
                <PixIcon class="pix-select-search__icon" @name="search" @ariaHidden={{true}} />
                <label class="screen-reader-only" for={{@selectBaseProps.searchId}}>
                  {{@selectBaseProps.selectSearchLabel}}
                </label>
                <input
                  class="pix-select-search__input"
                  id={{this.searchId}}
                  autocomplete="off"
                  tabindex={{if @selectBaseProps.isExpanded "0" "-1"}}
                  placeholder={{@searchPlaceholder}}
                  {{on "input" @selectBaseProps.updateSearch}}
                />
              </li>
            {{/if}}
            {{#if (gt @selectBaseProps.resultsLength 0)}}

              {{yield to="results"}}

            {{else}}
              {{!
              TODO compare the styles of these two class groups to choose adequate class for li :
              - pix-multi-select-list__item pix-multi-select-list__item--no-result
              - pix-select-list__empty-search-message
              }}
              <li class="pix-select-list__empty-search-message">
                {{@emptySearchMessage}}
              </li>
            {{/if}}
          </ul>
        </PopperJS>
        {{#if @errorMessage}}
          <p class="pix-select__error-message">{{@errorMessage}}</p>
        {{/if}}
      </div>
    </div>
  </template>
}
