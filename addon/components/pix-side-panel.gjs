import { MODAL_VARIANTS } from '@1024pix/pix-ui/helpers/variants';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import PixModalHeader from './pix-modal-header';
import PixOverlay from './pix-overlay';

export default class PixSidePanel extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixSidePanel component: @title argument is required.');
    }
  }

  get variant() {
    if (this.args.variant && !MODAL_VARIANTS.includes(this.args.variant)) {
      throw new Error(
        `ERROR in PixSidePanel component: @variant should be one of ${MODAL_VARIANTS.join(', ')}`,
      );
    }

    const value = this.args.variant ?? 'default';

    return value;
  }

  get id() {
    return guidFor(this);
  }

  <template>
    <PixOverlay
      class="pix-side-panel__overlay"
      @isVisible={{@showSidePanel}}
      @onClose={{@onClose}}
      @focusOnClose={{@focusOnClose}}
    >
      <div
        class="pix-side-panel pix-side-panel--{{this.variant}}
          {{unless @showSidePanel ' pix-side-panel--hidden'}}"
        role="dialog"
        aria-labelledby="side-panel-title--{{this.id}}"
        aria-describedby="side-panel-content--{{this.id}}"
        aria-modal="true"
        ...attributes
      >
        <PixModalHeader
          class="pix-side-panel__header"
          @id="side-panel-title--{{this.id}}"
          @title={{@title}}
          @subtitle={{@subtitle}}
          @iconName={{@iconName}}
          @variant={{this.variant}}
          @onCloseButtonClick={{@onClose}}
        />

        <div id="side-panel-content--{{this.id}}" class="pix-side-panel__content">
          {{yield to="content"}}
        </div>
        <div class="pix-side-panel__footer pix-side-panel__footer--{{this.variant}}">
          {{yield to="footer"}}
        </div>
      </div>
    </PixOverlay>
  </template>
}
