import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';

export default class PixStructureSwitcher extends Component {
  @service elementHelper;

  constructor(...args) {
    super(...args);
    this.switcherId = 'structure-switcher-' + guidFor(this);
    this.listId = `listbox-${this.switcherId}`;
    this.elementHelper.waitForElement(`container-${this.switcherId}`).then((element) => {
      this.rootElement = element;
    });
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
    event.preventDefault();
    this.isMenuOpen = true;
  }

  @action
  closeMenu(event) {
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
}
