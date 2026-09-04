import { warn } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import onClickOutside from 'ember-click-outside/modifiers/on-click-outside';
import { or } from 'ember-truth-helpers';

import onArrowDownUpAction from '../modifiers/on-arrow-down-up-action';
import onEscapeAction from '../modifiers/on-escape-action';
import PixFloating from './pix-floating';
import PixIcon from './pix-icon';
import PixLabel from './pix-label';
import PixSelectList from './pix-select-list';

/**
 * @typedef {object} PixSelectOption
 * @property {string} value - Valeur de l'option.
 * @property {string} label - Texte affiché.
 * @property {string} [category] - Regroupe l'option sous une catégorie, affichée comme intertitre dans la liste.
 * @property {string} [icon] - Nom d'une icône affichée avant le texte.
 * @property {string} [iconTitle] - Description de l'icône pour les lecteurs d'écran.
 */

/**
 * @typedef {object} PixSelectTexts
 * @property {string} placeholder - Texte affiché tant qu'aucune option n'est sélectionnée. Obligatoire.
 * @property {string} [requiredLabel] - Rend le champ obligatoire et affiche un astérisque, dont ce texte est l'infobulle.
 * @property {string} [subLabel] - Complément d'information affiché sous le libellé.
 * @property {string} [selectSearchLabel] - Intitulé du champ de recherche, lu par les lecteurs d'écran (accessible uniquement).
 * @property {string} [searchPlaceholder] - Texte indicatif affiché dans le champ de recherche.
 * @property {string} [emptySearchMessage] - Message affiché quand aucune option ne correspond à la recherche.
 */

/**
 * @typedef {object} PixSelectArgs
 * @property {PixSelectOption[]} options - Options proposées. Obligatoire.
 * @property {(value: string) => unknown} onChange - Appelée avec la valeur de l'option choisie. Obligatoire.
 * @property {PixSelectTexts} texts - Textes du composant. Obligatoire.
 * @property {string} [value] - Valeur de l'option sélectionnée.
 * @property {string} [id] - Identifiant du champ. Généré automatiquement s'il n'est pas fourni.
 * @property {boolean} [isDisabled] - Désactive le champ.
 * @property {boolean} [isSearchable] - Ajoute un champ de recherche en tête de liste.
 * @property {(value: string) => unknown} [onSearch] - Prend en charge la recherche à la place du filtrage interne, pour interroger un serveur par exemple.
 * @property {boolean} [hideDefaultOption] - Retire l'option qui permet de revenir à « aucun choix ».
 * @property {string} [iconName] - Nom d'une icône affichée dans le champ, avant le texte.
 * @property {boolean} [plainIcon] - Affiche `iconName` dans sa variante pleine.
 * @property {'small' | 'default' | 'large'} [size] - Taille du libellé. Par défaut : `default`.
 * @property {boolean} [screenReaderOnly] - Masque le libellé visuellement, tout en le laissant lisible par les lecteurs d'écran.
 * @property {boolean} [inlineLabel] - Place le libellé sur la même ligne que le champ.
 * @property {boolean} [isFullWidth] - Étend le champ à toute la largeur disponible.
 * @property {string} [errorMessage] - Message d'erreur affiché sous le champ. Sa présence applique le style d'erreur.
 * @property {string} [className] - Classes CSS ajoutées au bouton d'ouverture.
 * @property {string} [placement] - Position de la liste par rapport au champ, au sens de Floating UI. Par défaut : `bottom-start`.
 * @property {boolean} [isComputeWidthDisabled] - Désactive l'alignement automatique de la largeur du champ sur celle de la liste.
 */

/**
 * @typedef {object} PixSelectSignature
 * @property {HTMLDivElement} Element
 * @property {PixSelectArgs} Args
 * @property {{ label: [] }} Blocks
 */

export default class PixSelect extends Component {
  @service elementHelper;
  @tracked isExpanded = false;
  @tracked searchValue = null;

  constructor(...args) {
    super(...args);
    warn(
      'PixSelect: @texts.placeholder attribute is mandatory for usability.',
      Boolean(this.args.texts?.placeholder),
      {
        id: 'pix-ui.select-placeholder.mandatory',
      },
    );

    this.searchId = 'search-input-' + guidFor(this);
    this.selectId = this.args.id ? this.args.id : 'select-' + guidFor(this);
    this.listId = `listbox-${this.selectId}`;

    if (!this.args.isComputeWidthDisabled) {
      this.elementHelper.waitForElement(this.listId).then((elementList) => {
        const baseFontRemRatio = Number(
          getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
        );
        const listWidth = elementList.getBoundingClientRect().width;
        const selectWidth = Number(listWidth / baseFontRemRatio + 0.5).toFixed(2); // Fix for FF

        const element = document.getElementById(`container-${this.selectId}`);
        element.style.setProperty('--pix-select-width', `${selectWidth}rem`);
      });
    }
  }

  get displayDefaultOption() {
    return !this.searchValue && !this.args.hideDefaultOption;
  }

  get buttonClassName() {
    const buttonClasses = ['pix-select-button'];
    if (this.args.className) {
      buttonClasses.push(this.args.className);
    }
    if (this.args.errorMessage) {
      buttonClasses.push('pix-select-button--error');
    }

    return buttonClasses.join(' ');
  }

  get rootClassNames() {
    const classes = ['pix-select'];
    if (this.args.inlineLabel) {
      classes.push('pix-select--inline');
    }

    if (this.args.isFullWidth) {
      classes.push('pix-select--full-width');
    }

    return classes.join(' ');
  }

  get isAriaExpanded() {
    return this.isExpanded ? 'true' : 'false';
  }

  get placeholder() {
    if (!this.args.value) return this.args.texts?.placeholder;
    const option = this.args.options.find((option) => option.value === this.args.value);
    return option ? option.label : this.args.texts?.placeholder;
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
    if (this.args.onSearch) {
      this.args.onSearch(event.target.value);
      return;
    }
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
      class={{this.rootClassNames}}
      id="container-{{this.selectId}}"
      {{onClickOutside this.hideDropdown}}
      {{onArrowDownUpAction this.listId this.showDropdown this.isExpanded}}
      {{onEscapeAction this.hideDropdown this.selectId}}
      {{on "keydown" this.lockTab}}
      ...attributes
    >
      {{#if (has-block "label")}}
        <PixLabel
          @for={{this.selectId}}
          @requiredLabel={{@texts.requiredLabel}}
          @subLabel={{@texts.subLabel}}
          @size={{@size}}
          @screenReaderOnly={{@screenReaderOnly}}
          @inlineLabel={{@inlineLabel}}
        >
          {{yield to="label"}}
        </PixLabel>
      {{/if}}

      <div class="pix-select__button-container">
        <PixFloating
          @placement={{or @placement "bottom-start"}}
          @strategy="absolute"
          @offsetOptions={{4}}
          as |reference popover|
        >
          <button
            {{reference}}
            type="button"
            id={{this.selectId}}
            class={{this.buttonClassName}}
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
          <div
            {{popover}}
            class="pix-select__dropdown {{unless this.isExpanded ' pix-select__dropdown--closed'}}"
            {{on "transitionend" this.focus}}
            aria-hidden={{this.isExpanded undefined "true"}}
          >
            {{#if @isSearchable}}
              <div class="pix-select__search">
                <PixIcon class="pix-select-search__icon" @name="search" @ariaHidden={{true}} />
                <label class="screen-reader-only" for={{this.searchId}}>
                  {{@texts.selectSearchLabel}}
                </label>
                <input
                  class="pix-select-search__input"
                  id={{this.searchId}}
                  autocomplete="off"
                  tabindex={{if this.isExpanded "0" "-1"}}
                  placeholder={{@texts.searchPlaceholder}}
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
              @defaultOptionValue={{@texts.placeholder}}
              @emptySearchMessage={{@texts.emptySearchMessage}}
            />
          </div>
        </PixFloating>
        {{#if @errorMessage}}
          <p class="pix-select__error-message">{{@errorMessage}}</p>
        {{/if}}
      </div>
    </div>
  </template>
}
