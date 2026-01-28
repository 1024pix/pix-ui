import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import PixIconButton from './pix-icon-button';
import PixOverlay from './pix-overlay';

export default class PixModal extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixModal component: @title argument is required.');
    }
  }

  get id() {
    return guidFor(this);
  }

  <template>
    <PixOverlay
      @isVisible={{@showModal}}
      @onClose={{@onCloseButtonClick}}
      @focusOnClose={{@focusOnClose}}
      @hasCenteredContent={{true}}
    >
      <div
        class="pix-modal"
        role="dialog"
        aria-labelledby="modal-title--{{this.id}}"
        aria-describedby="modal-content--{{this.id}}"
        aria-modal="true"
        ...attributes
      >
        <div class="pix-modal__header">
          <h1 id="modal-title--{{this.id}}" class="pix-modal__title">{{@title}}</h1>
          <PixIconButton
            @iconName="close"
            @triggerAction={{@onCloseButtonClick}}
            @ariaLabel="Fermer"
            @size="small"
            @withBackground={{true}}
            class="pix-modal__close-button"
          />
        </div>
        <div id="modal-content--{{this.id}}" class="pix-modal__content">
          {{yield to="content"}}
        </div>
        <div class="pix-modal__footer">
          {{yield to="footer"}}
        </div>
      </div>
    </PixOverlay>
  </template>
}
