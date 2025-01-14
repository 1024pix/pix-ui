import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PixMNavigation extends Component {
  constructor(...args) {
    super(...args);
    this._navigationId = 'navigation-' + guidFor(this);
  }
  @tracked
  navigationMenuOpened = false;

  @action
  toggleNavigationMenu() {
    this.navigationMenuOpened = !this.navigationMenuOpened;
  }

  @action
  handleNavigationClick(event) {
    if (event.target.nodeName === 'A') {
      this.navigationMenuOpened = false;
    }
  }

  get navigationId() {
    return `${this._navigationId}-nav`;
  }

  get footerId() {
    return `${this._navigationId}-footer`;
  }
}
