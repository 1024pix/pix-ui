import Component from '@glimmer/component';
import { warn } from '@ember/debug';

export default class PixNavigation extends Component {
  get variant() {
    const value = this.args.variant ?? 'primary';
    warn(
      `PixNavigation: @variant "${value}" should be certif, orga or primary`,
      ['primary', 'orga', 'certif'].includes(value),
      {
        id: 'pix-ui.pix-navigation.variant.not-valid',
      },
    );

    return value;
  }
  get classNames() {
    return ['pix-navigation', `pix-navigation--${this.variant}`].join(' ');
  }
}
