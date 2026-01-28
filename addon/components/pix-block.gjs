import { VARIANTS } from '@1024pix/pix-ui/helpers/variants';
import { warn } from '@ember/debug';
import Component from '@glimmer/component';

export default class PixBlockComponent extends Component {
  get variant() {
    const value = this.args.variant ?? 'primary';
    warn(
      `PixBlock: @variant "${value}" should be ${VARIANTS.join(', ')}`,
      VARIANTS.includes(value),
      {
        id: 'pix-ui.pix-block.variant.not-valid',
      },
    );

    return value;
  }

  get cssClass() {
    const cssClass = ['pix-block', `pix-block--${this.variant}`];

    if (this.args.condensed) {
      cssClass.push('pix-block--condensed');
    }

    return cssClass.join(' ');
  }

  <template>
    <div class={{this.cssClass}} ...attributes>

      {{yield}}

    </div>
  </template>
}
