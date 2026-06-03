import { MODAL_VARIANTS } from '@1024pix/pix-ui/helpers/variants';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import PixModalHeader from './pix-modal-header';
import PixOverlay from './pix-overlay';

export default class PixSidebar extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixSidebar component: @title argument is required.');
    }
  }

  get variant() {
    if (this.args.variant && !MODAL_VARIANTS.includes(this.args.variant)) {
      throw new Error(
        `ERROR in PixSidebar component: @variant should be one of ${MODAL_VARIANTS.join(', ')}`,
      );
    }

    const value = this.args.variant ?? 'default';

    return value;
  }

  get id() {
    return guidFor(this);
  }

  <template>
    <PixOverlay class="pix-sidebar__overlay" @isVisible={{@showSidebar}} @onClose={{@onClose}} @focusOnClose={{@focusOnClose}}>
      <div
        class="pix-sidebar pix-sidebar--{{this.variant}}
          {{unless @showSidebar ' pix-sidebar--hidden'}}"
        role="dialog"
        aria-labelledby="sidebar-title--{{this.id}}"
        aria-describedby="sidebar-content--{{this.id}}"
        aria-modal="true"
        ...attributes
      >
        <PixModalHeader
          class="pix-sidebar__header"
          @id="sidebar-title--{{this.id}}"
          @title={{@title}}
          @subtitle={{@subtitle}}
          @iconName={{@iconName}}
          @variant={{this.variant}}
        />

        <div id="sidebar-content--{{this.id}}" class="pix-sidebar__content">
          {{yield to="content"}}
        </div>
        <div class="pix-sidebar__footer pix-sidebar__footer--{{this.variant}}">
          {{yield to="footer"}}
        </div>
      </div>
    </PixOverlay>
  </template>
}
