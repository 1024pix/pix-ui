import { MODAL_VARIANTS } from '@1024pix/pix-ui/helpers/variants';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import PixModalHeader from './pix-modal-header';
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
      @labelledBy="modal-title--{{this.id}}"
    >
      <div class="pix-modal pix-modal--{{this.variant}}" ...attributes>
        <PixModalHeader
          @id="modal-title--{{this.id}}"
          @title={{@title}}
          @subtitle={{@subtitle}}
          @variant={{this.variant}}
          @iconName={{@iconName}}
          @plainIcon={{@plainIcon}}
          @onCloseButtonClick={{@onCloseButtonClick}}
        />

        <div class="pix-modal__content">
          {{yield to="content"}}
        </div>
        <div class="pix-modal__footer">
          {{yield to="footer"}}
        </div>
      </div>
    </PixOverlay>
  </template>
}
