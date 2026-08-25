import { warn } from '@ember/debug';
import Component from '@glimmer/component';

import PixIconButton from './pix-icon-button';

export default class PixTag extends Component {
  constructor(...args) {
    super(...args);
    if (this.args.onRemove) {
      warn(
        'PixTag: texts.removeButtonLabel is mandatory when onRemove is provided  ',
        Boolean(this.args.texts?.removeButtonLabel),
        {
          id: 'pix-ui.pix-tag.texts.mandatory',
        },
      );
    }
  }

  get classes() {
    const { color } = this.args;
    const classes = [];
    if (color) classes.push(`pix-tag--${color}`);
    return classes.join(' ');
  }

  <template>
    <div class="pix-tag {{this.classes}}" ...attributes>
      {{yield}}
      {{#if @onRemove}}
        <PixIconButton
          @ariaLabel={{@texts.removeButtonLabel}}
          @iconName="close"
          @size="xsmall"
          @triggerAction={{@onRemove}}
        />
      {{/if}}
    </div>
  </template>
}
