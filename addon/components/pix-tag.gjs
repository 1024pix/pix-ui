import Component from '@glimmer/component';

import PixIconButton from './pix-icon-button';

export default class PixTag extends Component {
  get classes() {
    const { color } = this.args;
    const classes = [];
    if (color) classes.push(`pix-tag--${color}`);
    return classes.join(' ');
  }

  <template>
    <div class="pix-tag {{this.classes}}" ...attributes>
      {{yield}}
      {{#if @displayRemoveButton}}
        <PixIconButton
          @ariaLabel="Supprimer"
          @iconName="close"
          @size="xsmall"
          @triggerAction={{@onRemove}}
        />
      {{/if}}
    </div>
  </template>
}
