import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import PixIcon from './pix-icon';
import PixIconButton from './pix-icon-button';
import PixInputBase from './pix-input-base';
import PixLabel from './pix-label';

export default class PixInputPassword extends PixInputBase {
  constructor() {
    super(...arguments);

    this.prefix = 'pix-input-password';
    this.inputValidationError = {
      default: '',
      error: 'pix-input-password__container--error',
      success: 'pix-input-password__container--success',
    };
  }

  @tracked isPasswordVisible = false;

  @action
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const InputElement = document.getElementById(this.args.id);
    if (InputElement) {
      InputElement.focus();
    }
  }

  <template>
    <div class="pix-input-password {{if @inlineLabel ' pix-input-password--inline'}}">
      <PixLabel
        @for={{this.id}}
        @requiredLabel={{@requiredLabel}}
        @size={{@size}}
        @subLabel={{@subLabel}}
        @screenReaderOnly={{@screenReaderOnly}}
        @inlineLabel={{@inlineLabel}}
      >
        {{yield to="label"}}
      </PixLabel>
      <div>
        <div
          class="pix-input-password__container
            {{this.validationStatusClassName}}
            {{if @prefix 'pix-input-password__with-prefix'}}"
        >

          {{#if @prefix}}
            <span class="pix-input-password__prefix">{{@prefix}}</span>
          {{/if}}

          <input
            id={{this.id}}
            type={{if this.isPasswordVisible "text" "password"}}
            value={{@value}}
            aria-required="{{if @requiredLabel true false}}"
            required={{if @requiredLabel true false}}
            aria-describedby={{this.ariaDescribedBy}}
            ...attributes
          />

          <PixIconButton
            class="pix-input-password__button"
            @iconName={{if this.isPasswordVisible "eye" "eyeOff"}}
            @plainIcon={{true}}
            @ariaLabel={{if
              this.isPasswordVisible
              "Masquer le mot de passe"
              "Afficher le mot de passe"
            }}
            @triggerAction={{this.togglePasswordVisibility}}
            @size="small"
          />

          {{#if this.hasError}}
            <PixIcon
              @name="close"
              @ariaHidden={{true}}
              class="pix-input-password__icon pix-input-password__error-icon"
            />
          {{/if}}
          {{#if this.hasSuccess}}
            <PixIcon
              @name="check"
              @ariaHidden={{true}}
              class="pix-input-password__icon pix-input-password__success-icon"
            />
          {{/if}}
        </div>

        {{#if this.hasErrorMessage}}
          <p id={{this.ariaDescribedBy}} class="pix-input-password__error-message">
            {{@errorMessage}}
          </p>
        {{/if}}
      </div>
    </div>
  </template>
}
