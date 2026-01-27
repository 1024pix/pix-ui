import { warn } from '@ember/debug';
import Component from '@glimmer/component';

export default class PixTabs extends Component {
  get variant() {
    const value = this.args.variant ?? 'primary';
    warn(
      `PixTabs: @variant "${value}" should be certif, orga or primary`,
      ['primary', 'orga', 'certif'].includes(value),
      {
        id: 'pix-ui.pix-tabs.variant.not-valid',
      },
    );

    return value;
  }

  get ariaLabel() {
    const value = this.args.ariaLabel;
    warn('PixTabs: @ariaLabel is required.', !['', null, undefined].includes(value), {
      id: 'pix-ui.pix-tabs.ariaLabel.required',
    });

    return value;
  }

  get classNames() {
    return ['pix-tabs', `pix-tabs--${this.variant}`].join(' ');
  }

  <template>
    <nav class={{this.classNames}} aria-label={{this.ariaLabel}} ...attributes>
      {{yield}}
    </nav>
  </template>
}
