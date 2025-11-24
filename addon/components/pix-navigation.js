import { warn } from '@ember/debug';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PixMNavigation extends Component {
  @service router;

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

    if (this.navigationMenuOpened) {
      this.router.on('routeDidChange', this.closeNavigation);
    } else {
      this.router.off('routeDidChange', this.closeNavigation);
    }
  }

  @action
  closeNavigation(event) {
    const disabledElement = event?.srcElement?.closest('[aria-disabled=true]');

    if (!disabledElement) {
      this.navigationMenuOpened = false;
      this.router.off('routeDidChange', this.closeNavigation);
    }
  }

  get navigationId() {
    return `${this._navigationId}-nav`;
  }

  get footerId() {
    return `${this._navigationId}-footer`;
  }
}
