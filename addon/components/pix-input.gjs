import PixIcon from './pix-icon';
import PixInputBase from './pix-input-base';
import PixLabel from './pix-label';

export default class PixInput extends PixInputBase {
  constructor() {
    super(...arguments);

    this.prefix = 'pix-input';
    this.inputValidationError = {
      default: '',
      error: 'pix-input__input--error',
      success: 'pix-input__input--success',
    };
  }

  <template>
    <div class={{this.rootClassNames}}>
      {{#if (has-block "label")}}
        <PixLabel
          @for={{this.id}}
          @requiredLabel={{@requiredLabel}}
          @subLabel={{@subLabel}}
          @size={{@size}}
          @screenReaderOnly={{@screenReaderOnly}}
          @inlineLabel={{@inlineLabel}}
        >
          {{yield to="label"}}
        </PixLabel>
      {{/if}}
      <div class="pix-input__field-container">
        <div class="pix-input__container">
          <input
            id={{this.id}}
            class="pix-input__input {{this.validationStatusClassName}}"
            value={{@value}}
            aria-required="{{if @requiredLabel true false}}"
            required={{if @requiredLabel true false}}
            aria-describedby={{this.ariaDescribedBy}}
            ...attributes
          />

          {{#if this.hasError}}
            <PixIcon @name="close" class="pix-input__error-icon" @ariaHidden={{true}} />
          {{/if}}
          {{#if this.hasSuccess}}
            <PixIcon @name="check" class="pix-input__success-icon" @ariaHidden={{true}} />
          {{/if}}
        </div>

        {{#if this.hasErrorMessage}}
          <p id={{this.ariaDescribedBy}} class="pix-input__error-message">{{@errorMessage}}</p>
        {{/if}}
      </div>
    </div>
  </template>
}
