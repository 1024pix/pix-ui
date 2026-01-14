import { action } from '@ember/object';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShrinkNavigationService extends Service {
  @tracked canNavigationBeShrunk = false;
  @tracked isShrunk = false;

  @action displayShrunkNavigationButton() {
    this.canNavigationBeShrunk = true;
  }

  @action shrinkNavigation() {
    this.isShrunk = !this.isShrunk;

    const root = document.documentElement;

    if (this.isShrunk) {
      return root.style.setProperty('--pix-navigation-width', '88px');
    }
    return root.style.setProperty('--pix-navigation-width', '15rem');
  }
}
