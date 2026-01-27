import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import onClickOutside from 'ember-click-outside/modifiers/on-click-outside';
import { PopperJS } from 'ember-popperjs';

import onArrowDownUpAction from '../modifiers/on-arrow-down-up-action';
import onEscapeAction from '../modifiers/on-escape-action';
import PixButton from './pix-button';
import PixSelectList from './pix-select-list';

export default class PixStructureSwitcher extends Component {
  constructor(...args) {
    super(...args);
    this.switcherId = 'structure-switcher-' + guidFor(this);
    this.listId = `listbox-${this.switcherId}`;
  }

  @tracked
  isMenuOpen = false;

  @action
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @action
  onSelectListChange(structure, event) {
    this.args.onChange(structure);
    this.closeMenu(event);
    document.getElementById(this.switcherId).focus();
  }

  @action
  openMenu(event) {
    if (this.isMenuOpen) return;

    event.preventDefault();
    this.isMenuOpen = true;
  }

  @action
  closeMenu(event) {
    if (!this.isMenuOpen) return;

    event.preventDefault();
    this.isMenuOpen = false;
  }

  @action
  lockTab(event) {
    if (event.code === 'Tab' && this.isMenuOpen) {
      event.preventDefault();
    }
  }

  @action
  focus() {
    document.getElementById(this.listId).querySelector("[aria-selected='true']").focus();
  }

  <template>
    <div
      id="container-{{this.switcherId}}"
      class="pix-structure-switcher"
      {{onClickOutside this.closeMenu}}
      {{onArrowDownUpAction this.listId this.openMenu this.isMenuOpen}}
      {{onEscapeAction this.closeMenu this.switcherId}}
      {{on "keydown" this.lockTab}}
      ...attributes
    >
      <PopperJS @placement="right-end" as |reference popover|>
        <PixButton
          {{reference}}
          @size="small"
          @variant="secondary"
          aria-controls={{this.listId}}
          id={{this.switcherId}}
          @triggerAction={{this.toggleMenu}}
          aria-expanded={{this.isMenuOpen}}
        >{{@label}}</PixButton>
        {{#if this.isMenuOpen}}
          <div
            {{popover}}
            class="pix-select__dropdown {{unless this.isMenuOpen 'pix-select__dropdown--closed'}}"
          >
            <PixSelectList
              aria-labelledby={{this.switcherId}}
              {{on "transitionend" this.focus}}
              @hideDefaultOption={{true}}
              @listId={{this.listId}}
              @selectId={{this.switcherId}}
              @value={{@value}}
              @onChange={{this.onSelectListChange}}
              @defaultOption={{@defaultOption}}
              @isExpanded={{this.isMenuOpen}}
              @options={{@structures}}
              @defaultOptionValue={{@label}}
            />
          </div>
        {{/if}}
      </PopperJS>
    </div>
  </template>
}
