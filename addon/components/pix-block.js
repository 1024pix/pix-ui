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
}
