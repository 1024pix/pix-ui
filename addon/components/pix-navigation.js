import { warn } from '@ember/debug';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PixMNavigation extends Component {
  constructor(...args) {
    super(...args);
    this._navigationId = 'navigation-' + guidFor(this);
    warn(
      'PixNavigation: @openLabel and @closeLabel are required',
      this.args.openLabel && this.args.closeLabel,
      {
        id: 'pix-navigation.open-close-labels',
      },
    );
  }

  @tracked
  navigationMenuOpened = false;

  @action
  toggleNavigationMenu() {
    this.navigationMenuOpened = !this.navigationMenuOpened;
  }

  @action
  handleNavigationClick() {
    this.navigationMenuOpened = false;
  }

  get navigationId() {
    return `${this._navigationId}-nav`;
  }

  get footerId() {
    return `${this._navigationId}-footer`;
  }
}
