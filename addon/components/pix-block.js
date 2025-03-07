import { warn } from '@ember/debug';
import Component from '@glimmer/component';

export default class PixBlockComponent extends Component {
  text = 'pix-block';

  get variant() {
    const value = this.args.variant ?? 'default';
    warn(
      `PixBlock: @variant "${value}" should be default, certif, orga or admin`,
      ['default', 'orga', 'certif', 'admin'].includes(value),
      {
        id: 'pix-ui.pix-block.variant.not-valid',
      },
    );

    return value;
  }
}
