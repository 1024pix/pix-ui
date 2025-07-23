import { VARIANTS } from '@1024pix/pix-ui/helpers/variants';
import { warn } from '@ember/debug';
import Component from '@glimmer/component';

import onWindowResize from '../modifiers/on-window-resize';

export default class PixAppLayout extends Component {
  #computeMarginTopElement(entries) {
    for (const entry of entries) {
      if (entry.target.id === 'pix-layout-banner-container') {
        const baseFontRemRatio = Number(
          getComputedStyle(document.querySelector('html')).fontSize.match(/\d+(\.\d+)?/)[0],
        );
        const bannerHeight = entry.target.getBoundingClientRect().height;
        const top = bannerHeight / baseFontRemRatio;

        const layoutElement = document.querySelector('.pix-app-layout');
        layoutElement.style.setProperty('--pix-app-layout-top', `${top}rem`);
      }
    }
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

  <template>
    <div class={{this.classNames}} ...attributes>
      <section
        class="pix-app-layout__banner"
        id="pix-layout-banner-container"
        {{onWindowResize this.handleMarginContainerNavigation}}
      >
        {{yield to="banner"}}
      </section>
      <div class="pix-app-layout__navigation">{{yield to="navigation"}}</div>
      <div class="pix-app-layout__main">{{yield to="main"}}</div>
      <div class="pix-app-layout__footer">{{yield to="footer"}}</div>
    </div>
  </template>
}
