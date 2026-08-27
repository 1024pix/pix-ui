import { warn } from '@ember/debug';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import PixButton from './pix-button';
import PixIconButton from './pix-icon-button';

export default class PixNavigation extends Component {
  @service router;
  @service shrinkNavigationService;

  constructor(...args) {
    super(...args);
    this._navigationId = 'navigation-' + guidFor(this);
    warn(
      'PixNavigation: @texts.openMenu and @texts.closeMenu are required',
      this.args.texts?.openMenu && this.args.texts?.closeMenu,
      {
        id: 'pix-navigation.open-close-menu.required',
      },
    );
    warn(
      'PixNavigation: @texts.mainNavigation attribute is required for accessibility.',
      this.args.texts?.mainNavigation,
      {
        id: 'pix-ui.stepper-component.texts.mainNavigation.required',
      },
    );
    warn(
      'PixNavigation: @texts.expandNavigation and @texts.shrinkNavigation attributes are required for accessibility.',
      this.args.texts?.expandNavigation && this.args.texts?.shrinkNavigation,
      {
        id: 'pix-ui.stepper-component.texts.shrink-expand-navigation.required',
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
    return this.shrinkNavigationService.isShrunk
      ? this.args.texts.expandNavigation
      : this.args.texts.shrinkNavigation;
  }

  get menuLabel() {
    return this.navigationMenuOpened ? this.args.texts.closeMenu : this.args.texts.openMenu;
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
              {{this.menuLabel}}
            </span>
          </PixButton>
        </div>
      </header>
      <nav
        class="pix-navigation__nav"
        {{on "click" this.closeNavigation}}
        aria-label={{@texts.mainNavigation}}
        id={{this.navigationId}}
      >
        {{yield to="navElements"}}
      </nav>
      <footer class="pix-navigation__footer" id={{this.footerId}}>{{yield to="footer"}}</footer>
    </aside>
  </template>
}
