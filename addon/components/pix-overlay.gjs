import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';

import onEscapeAction from '../modifiers/on-escape-action';
import trapFocus from '../modifiers/trap-focus';

export default class PixOverlay extends Component {
  @action
  onClick(event) {
    const isClickOnOverlay = event.target.classList.contains('pix-overlay');

    if (this.args.onClose && isClickOnOverlay) {
      this.args.onClose(event);
    }
  }

  <template>
    <div
      class="pix-overlay
        {{unless @isVisible ' pix-overlay--hidden'}}
        {{if @hasCenteredContent ' pix-overlay--with-centered-content'}}"
      {{on "click" this.onClick}}
      {{trapFocus @isVisible @focusOnClose}}
      {{onEscapeAction @onClose}}
      ...attributes
    >
      {{yield}}
    </div>
  </template>
}
