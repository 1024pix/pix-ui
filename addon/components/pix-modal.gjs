import { MODAL_VARIANTS } from '@1024pix/pix-ui/helpers/variants';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import PixIconButton from './pix-icon-button';
import PixOverlay from './pix-overlay';
import PixIcon from './pix-icon';

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

  get variant() {
    if (this.args.variant && !MODAL_VARIANTS.includes(this.args.variant)) {
      throw new Error(
        `ERROR in PixModal component: @variant should be one of ${MODAL_VARIANTS.join(', ')}`,
      );
    }

    const value = this.args.variant ?? 'default';

    return value;
  }

  <template>
    <PixOverlay
      @isVisible={{@showModal}}
      @onClose={{@onCloseButtonClick}}
      @focusOnClose={{@focusOnClose}}
      @hasCenteredContent={{true}}
    >
      <div
        class="pix-modal pix-modal--{{this.variant}}"
        role="dialog"
        aria-labelledby="modal-title--{{this.id}}"
        aria-describedby="modal-content--{{this.id}}"
        aria-modal="true"
        ...attributes
      >
        <div class="pix-modal__header pix-modal__header--{{this.variant}}">
          <div class="pix-modal__header__title-section">
            {{#if @iconName}}
              <div class="pix-modal__icon-container pix-modal__icon-container--{{this.variant}}">
                <PixIcon @name={{@iconName}} @plainIcon={{@plainIcon}} @ariaHidden={{true}} />
              </div>
            {{/if}}
            <div>
              <h1 id="modal-title--{{this.id}}" class="pix-modal__title">{{@title}}</h1>
              {{#if @subtitle}}
                <p title={{@subtitle}} class="pix-modal__subtitle">{{@subtitle}}</p>
              {{/if}}
            </div>
          </div>

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
