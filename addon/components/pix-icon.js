import Component from '@glimmer/component';
import { warn } from '@ember/debug';
import { ICONS } from '@1024pix/pix-ui/helpers/icons';

export default class PixIcon extends Component {
  get alternativeText() {
    return this.args.alternativeText || '';
  }

  get ariaHidden() {
    warn(
      'PixIcon: @ariaHidden must be a boolean, default undefined',
      [true, false, null, undefined].includes(this.args.ariaHidden),
      {
        id: 'pix-ui.icon.aria-hidden.not-boolean',
      },
    );
    return this.args.ariaHidden ? 'true' : undefined;
  }

  get iconName() {
    warn(
      `PixIcon: @name must be one of these : ${Object.keys(ICONS).join(' | ')}`,
      Object.keys(ICONS).includes(this.args.name),
      {
        id: 'pix-ui.icon.not-valid',
      },
    );

    warn(
      'PixIcon: @plainIcon must be a boolean, default undefined',
      [true, false, undefined, null].includes(this.args.plainIcon),
      {
        id: 'pix-ui.icon.plan-icon.not-boolean',
      },
    );

    const icon = ICONS[this.args.name];

    if (!icon) return null;

    return this.args.plainIcon && Boolean(icon.plainIcon) ? icon.plainIcon : icon.default;
  }
}
