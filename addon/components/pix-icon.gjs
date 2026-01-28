import { ICONS } from '@1024pix/pix-ui/helpers/icons';
import { warn } from '@ember/debug';
import { uniqueId } from '@ember/helper';
import Component from '@glimmer/component';

export default class PixIcon extends Component {
  get title() {
    warn('PixIcon: @alternativeText is deprecated use @title instead', !this.args.alternativeText, {
      id: 'pix-ui.icon.alternativeText.deprecated',
    });

    return this.args.title || this.args.alternativeText || null;
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
      `PixIcon: @name "${this.args.name}" is not one of these : ${Object.keys(ICONS).join(' | ')}`,
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

  <template>
    {{#let (uniqueId) as |titleId|}}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={{this.ariaHidden}}
        role="img"
        class="pix-icon"
        aria-describedby={{if this.title titleId}}
        ...attributes
      >
        {{#if this.title}}
          <title id={{titleId}}>{{this.title}}</title>
        {{/if}}
        <use href="/@1024pix/pix-ui/svg/pix-sprite.svg#{{this.iconName}}" />
      </svg>
    {{/let}}
  </template>
}
