import { VARIANTS } from '@1024pix/pix-ui/helpers/variants';
import { warn } from '@ember/debug';
import Component from '@glimmer/component';

export default class PixAppLayout extends Component {
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
