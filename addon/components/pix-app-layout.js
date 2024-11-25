import Component from '@glimmer/component';
import { warn } from '@ember/debug';

export default class PixAppLayout extends Component {
  get variant() {
    const value = this.args.variant ?? 'primary';
    warn(
      `PixAppLayout: @variant "${value}" should be certif, orga or primary`,
      ['primary', 'orga', 'certif'].includes(value),
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
