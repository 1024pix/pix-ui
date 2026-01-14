import { warn } from '@ember/debug';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import { formatMessage } from '../translations';

export default class PixNavigation extends Component {
  @service router;
  @service shrinkNavigationService;

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

  formatMessage(message, values) {
    return formatMessage(this.args.locale ?? 'fr', `pixNavigation.${message}`, values);
  }

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

    if (!disabledElement && this.navigationMenuOpened) {
      this.navigationMenuOpened = false;
      this.router.off('routeDidChange', this.closeNavigation);
    }
  }

  @action
  shrinkNavigation() {
    this.shrinkNavigationService.shrinkNavigation();
  }

  get shrunkNavigationIcon() {
    return this.shrinkNavigationService.isShrunk ? 'arrowMenuOpen' : 'arrowMenuClose';
  }

  get shrunkNavigationAriaLabel() {
    return this.formatMessage(
      this.shrinkNavigationService.isShrunk
        ? 'expandNavigationAriaLabel'
        : 'shrinkNavigationAriaLabel',
    );
  }

  get navigationId() {
    return `${this._navigationId}-nav`;
  }

  get footerId() {
    return `${this._navigationId}-footer`;
  }
}
