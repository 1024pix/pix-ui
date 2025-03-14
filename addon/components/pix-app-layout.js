import { VARIANTS } from '@1024pix/pix-ui/helpers/variants';
import { warn } from '@ember/debug';
import { service } from '@ember/service';
import Component from '@glimmer/component';
export default class PixAppLayout extends Component {
  @service elementHelper;

  constructor(...args) {
    super(...args);

    this.elementHelper.waitForElement('pix-layout-banner-container').then((elementList) => {
      this.#computeMarginTopElement(elementList);
    });
  }

  #computeMarginTopElement(bannerContainer) {
    const baseFontRemRatio = Number(
      getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
    );
    const bannerHeight = bannerContainer.getBoundingClientRect().height;
    const top = bannerHeight / baseFontRemRatio;

    const layoutElement = document.querySelector('.pix-app-layout');
    layoutElement.style.setProperty('--pix-app-layout-top', `${top}rem`);
  }

  handleMarginContainerNavigation = (element) => {
    this.#computeMarginTopElement(element);
  };

  get variant() {
    const value = this.args.variant ?? 'primary';
    warn(
      `PixAppLayout: @variant "${value}" should be ${VARIANTS.join(', ')}`,
      VARIANTS.includes(value),
      {
        id: 'pix-ui.pix-app-layout.variant.not-valid',
      },
    );

    return value;
  }
  get classNames() {
    return ['pix-app-layout', `pix-app-layout--${this.variant}`].join(' ');
  }
}
