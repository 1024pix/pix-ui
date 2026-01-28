import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import PixIconButton from './pix-icon-button';
import PixOverlay from './pix-overlay';
export default class PixSidebar extends Component {
  constructor(...args) {
    super(...args);

    if (!this.args.title) {
      throw new Error('ERROR in PixSidebar component: @title argument is required.');
    }
  }

  get id() {
    return guidFor(this);
  }

  <template>
    <PixOverlay @isVisible={{@showSidebar}} @onClose={{@onClose}} @focusOnClose={{@focusOnClose}}>
      <div
        class="pix-sidebar {{unless @showSidebar ' pix-sidebar--hidden'}}"
        role="dialog"
        aria-labelledby="sidebar-title--{{this.id}}"
        aria-describedby="sidebar-content--{{this.id}}"
        aria-modal="true"
        ...attributes
      >
        <div class="pix-sidebar__header">
          <h1 id="sidebar-title--{{this.id}}" class="pix-sidebar__title">{{@title}}</h1>
          <PixIconButton
            @iconName="close"
            @triggerAction={{@onClose}}
            @ariaLabel="Fermer"
            @size="small"
            @withBackground={{true}}
            class="pix-sidebar__close-button"
          />
        </div>
        <div id="sidebar-content--{{this.id}}" class="pix-sidebar__content">
          {{yield to="content"}}
        </div>
        <div class="pix-sidebar__footer">
          {{yield to="footer"}}
        </div>
      </div>
    </PixOverlay>
  </template>
}
