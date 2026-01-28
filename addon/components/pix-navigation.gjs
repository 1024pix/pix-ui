import { warn } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import { formatMessage } from '../translations';
import PixButton from './pix-button';
import PixIconButton from './pix-icon-button';

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

  <template>
    <aside
      ...attributes
      class="pix-navigation
        {{if this.navigationMenuOpened 'pix-navigation--opened'}}
        {{if this.shrinkNavigationService.isShrunk 'pix-navigation--shrunk'}}"
    >
      <header class="pix-navigation__brand">{{yield to="brand"}}
        {{#if this.shrinkNavigationService.canNavigationBeShrunk}}
          <div class="pix-navigation__shrunk-container">
            <PixIconButton
              class="pix-navigation-shrunk-button"
              @iconName={{this.shrunkNavigationIcon}}
              @triggerAction={{this.shrinkNavigation}}
              @ariaLabel="{{this.shrunkNavigationAriaLabel}}"
            />
          </div>
        {{/if}}
        <div class="pix-navigation__burger-menu"><PixButton
            aria-controls="{{this.navigationId}} {{this.footerId}}"
            aria-expanded={{this.navigationMenuOpened}}
            @iconBefore={{if this.navigationMenuOpened "close" "menu"}}
            @triggerAction={{this.toggleNavigationMenu}}
          >
            <span class="screen-reader-only">
              {{#if this.navigationMenuOpened}}
                {{@closeLabel}}
              {{else}}
                {{@openLabel}}
              {{/if}}
            </span>
          </PixButton>
        </div>
      </header>
      <nav
        class="pix-navigation__nav"
        {{on "click" this.closeNavigation}}
        aria-label={{@navigationAriaLabel}}
        id={{this.navigationId}}
      >
        {{yield to="navElements"}}
      </nav>
      <footer class="pix-navigation__footer" id={{this.footerId}}>{{yield to="footer"}}</footer>
    </aside>
  </template>
}
