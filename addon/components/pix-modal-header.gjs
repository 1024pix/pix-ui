import { MODAL_VARIANTS } from '@1024pix/pix-ui/helpers/variants';
import Component from '@glimmer/component';

import PixIcon from './pix-icon';
import PixIconButton from './pix-icon-button';

export default class PixModalHeader extends Component {
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
    <div class="pix-modal-header pix-modal-header--{{this.variant}}">
      <section class="pix-modal-header__title-section">
        {{#if @iconName}}
          <div
            class="pix-modal-header__icon-container pix-modal-header__icon-container--{{this.variant}}"
          >
            <PixIcon @name={{@iconName}} @plainIcon={{@plainIcon}} @ariaHidden={{true}} />
          </div>
        {{/if}}
        <div>
          <h1 id={{@id}} class="pix-modal-header__title">{{@title}}</h1>
          {{#if @subtitle}}
            <p title={{@subtitle}} class="pix-modal-header__subtitle">{{@subtitle}}</p>
          {{/if}}
        </div>

      </section>

      <PixIconButton
        @iconName="close"
        @triggerAction={{@onCloseButtonClick}}
        @ariaLabel="Fermer"
        @size="small"
        @withBackground={{true}}
        class="pix-modal-header__close-button"
      />
    </div>
  </template>
}
