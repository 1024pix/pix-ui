import Component from '@glimmer/component';
import { formatMessage } from '../translations';

import PixIconButton from './pix-icon-button';

export default class PixTag extends Component {
  get classes() {
    const { color } = this.args;
    const classes = [];
    if (color) classes.push(`pix-tag--${color}`);
    return classes.join(' ');
  }

  get ariaLabel() {
    return formatMessage(this.args.locale || 'fr', 'tag.removeButton');
  }

  <template>
    <div class="pix-tag {{this.classes}}" ...attributes>
      {{yield}}
      {{#if @displayRemoveButton}}
        <PixIconButton
          @ariaLabel={{this.ariaLabel}}
          @iconName="close"
          @size="xsmall"
          @triggerAction={{@onRemove}}
        />
      {{/if}}
    </div>
  </template>
}
