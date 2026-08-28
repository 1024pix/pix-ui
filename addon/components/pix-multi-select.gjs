import { warn } from '@ember/debug';
import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import onClickOutside from 'ember-click-outside/modifiers/on-click-outside';
import { gt, or } from 'ember-truth-helpers';

import onArrowDownUpAction from '../modifiers/on-arrow-down-up-action';
import onEnterAction from '../modifiers/on-enter-action';
import onEscapeAction from '../modifiers/on-escape-action';
import PixCheckbox from './pix-checkbox';
import PixFloating from './pix-floating';
import PixIcon from './pix-icon';
import PixLabel from './pix-label';

/**
 * @typedef {object} PixMultiSelectOption
 * @property {string} value - Valeur de l'option.
 * @property {string} label - Texte affiché.
 */

/**
 * @typedef {object} PixMultiSelectTexts
 * @property {string} placeholder - Texte affiché tant qu'aucune option n'est sélectionnée. Obligatoire.
 * @property {string} [requiredLabel] - Rend le champ obligatoire et affiche un astérisque, dont ce texte est l'infobulle.
 * @property {string} [subLabel] - Complément d'information affiché sous le libellé.
 * @property {string} [searchLabel] - Intitulé du champ de recherche, lu par les lecteurs d'écran (accessible uniquement).
 * @property {string} [searchPlaceholder] - Texte indicatif affiché dans le champ de recherche.
 * @property {string} [emptySearchMessage] - Message affiché quand aucune option ne correspond à la recherche.
 */

/**
 * @typedef {object} PixMultiSelectArgs
 * @property {PixMultiSelectOption[]} options - Options proposées. Obligatoire.
 * @property {string[]} [values] - Valeurs des options sélectionnées.
 * @property {PixMultiSelectTexts} texts - Textes du composant. Obligatoire.
 * @property {(values: string[]) => unknown} [onChange] - Appelée avec la liste complète des valeurs sélectionnées à chaque changement.
 * @property {string} [id] - Identifiant du champ. Généré automatiquement s'il n'est pas fourni.
 * @property {boolean} [isDisabled] - Désactive le champ.
 * @property {boolean} [isSearchable] - Ajoute un champ de recherche en tête de liste.
 * @property {(value: string) => unknown} [onSearch] - Prend en charge la recherche à la place du filtrage interne, pour interroger un serveur par exemple.
 * @property {'small' | 'default' | 'large'} [size] - Taille du libellé. Par défaut : `default`.
 * @property {boolean} [screenReaderOnly] - Masque le libellé visuellement, tout en le laissant lisible par les lecteurs d'écran.
 * @property {boolean} [inlineLabel] - Place le libellé sur la même ligne que le champ.
 * @property {string} [className] - Classes CSS ajoutées au bouton d'ouverture.
 * @property {string} [placement] - Position de la liste par rapport au champ, au sens de Floating UI. Par défaut : `bottom-start`.
 * @property {boolean} [isComputeWidthDisabled] - Désactive l'alignement automatique de la largeur du champ sur celle de la liste.
 */

/**
 * @typedef {object} PixMultiSelectSignature
 * @property {HTMLDivElement} Element
 * @property {PixMultiSelectArgs} Args
 * @property {{ label: [], placeholder: [], default: [PixMultiSelectOption] }} Blocks
 */

export default class PixMultiSelect extends Component {
  @tracked isExpanded = false;
  @service elementHelper;

  constructor(...args) {
    super(...args);

    warn(
      'PixMultiSelect: @texts.placeholder attribute is mandatory for usability. if you not using placeholder {{yield}}',
      Boolean(this.args.texts?.placeholder),
      {
        id: 'pix-ui.select-placeholder.mandatory',
      },
    );

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

  get searchLabel() {
    return this.args.texts?.searchLabel;
  }

  get searchPlaceholder() {
    return this.args.texts?.searchPlaceholder;
  }

  get emptySearchMessage() {
    return this.args.texts?.emptySearchMessage;
  }

  get requiredLabel() {
    return this.args.texts?.requiredLabel;
  }

  get subLabel() {
    return this.args.texts?.subLabel;
  }

  get isAriaExpanded() {
    return this.isExpanded ? 'true' : 'false';
  }

  get results() {
    return this.args.options;
  }

  get placeholder() {
    const { values, texts } = this.args;
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
    return texts?.placeholder;
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
    this.args.onSearch(event.target.value);
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
        @requiredLabel={{this.requiredLabel}}
        @subLabel={{this.subLabel}}
        @size={{@size}}
        @screenReaderOnly={{@screenReaderOnly}}
        @inlineLabel={{@inlineLabel}}
      >
        {{yield to="label"}}
      </PixLabel>

      <div>
        <PixFloating
          @placement={{or @placement "bottom-start"}}
          @strategy="absolute"
          @offsetOptions={{4}}
          as |reference popover|
        >
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
            {{else}}
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
                  {{this.searchLabel}}
                </label>
                <input
                  class="pix-select-search__input"
                  id={{this.searchId}}
                  autocomplete="off"
                  tabindex={{if this.isExpanded "0" "-1"}}
                  placeholder={{this.searchPlaceholder}}
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
              >{{this.emptySearchMessage}}</li>
            {{/if}}
          </ul>
        </PixFloating>
      </div>
    </div>
  </template>
}
