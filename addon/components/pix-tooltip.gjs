import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import onEscapeAction from '../modifiers/on-escape-action';

export default class PixTooltip extends Component {
  @tracked isTooltipVisible = false;

  get position() {
    const correctsPosition = [
      'top',
      'right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'top-left',
      'top-right',
    ];
    return correctsPosition.includes(this.args.position) ? this.args.position : 'top';
  }

  get display() {
    return typeof this.args.hide === 'undefined' || !this.args.hide;
  }

  @action
  showTooltip() {
    this.isTooltipVisible = true;
  }

  @action
  hideTooltip() {
    setTimeout(() => (this.isTooltipVisible = false));
  }

  @action
  hideTooltipOnMouseOut(event) {
    const isFocused = event.target.contains(document.activeElement);

    if (isFocused) {
      return;
    }

    this.hideTooltip(event);
  }

  <template>
    <div
      class="pix-tooltip {{if this.isTooltipVisible 'pix-tooltip--visible' ''}}"
      {{onEscapeAction this.hideTooltip}}
      {{on "mouseover" this.showTooltip}}
      {{on "mouseleave" this.hideTooltipOnMouseOut}}
      {{on "focusin" this.showTooltip}}
      {{on "focusout" this.hideTooltip}}
      ...attributes
    >
      {{#if (has-block "triggerElement")}}
        <span class="pix-tooltip__trigger-element" tabindex="0">
          {{yield to="triggerElement"}}
        </span>
      {{/if}}

      {{#if (has-block "tooltip")}}
        {{#if this.display}}
          <span
            id={{@id}}
            role="tooltip"
            class="pix-tooltip__content pix-tooltip__content--{{this.position}}
              {{if @isInline 'pix-tooltip__content--inline'}}
              {{if @isLight 'pix-tooltip__content--light'}}
              {{if @isWide 'pix-tooltip__content--wide'}}"
          >
            {{yield to="tooltip"}}
          </span>
        {{/if}}
      {{/if}}
    </div>
  </template>
}
