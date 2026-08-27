import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';

import PixLabel from './pix-label';

const trackTextLength = modifier((element, [onChange, value]) => {
  void value;
  const sync = () => onChange(element.value.length);
  const syncLater = () => queueMicrotask(sync);

  syncLater();

  element.addEventListener('input', sync);
  element.form?.addEventListener('reset', syncLater);

  return () => {
    element.removeEventListener('input', sync);
    element.form?.removeEventListener('reset', syncLater);
  };
});

export default class PixTextarea extends Component {
  @tracked textLengthIndicator = this.args.value ? this.args.value.length : 0;

  get id() {
    if (this.args.id) return this.args.id;
    return 'textarea-' + guidFor(this);
  }

  get remainingCharacters() {
    if (!this.args.maxlength) return undefined;
    return Number(this.args.maxlength) - this.textLengthIndicator;
  }

  updateTextLength = (length) => {
    this.textLengthIndicator = length;
  };

  <template>
    <div class="pix-textarea {{if @inlineLabel ' pix-textarea--inline'}}">
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

      <div class="pix-textarea__container">
        <textarea
          id={{this.id}}
          value={{@value}}
          maxlength={{if @maxlength @maxlength}}
          aria-required="{{if @requiredLabel true false}}"
          required={{if @requiredLabel true false}}
          class="pix-textarea-container__input {{if @errorMessage 'pix-textarea--error'}}"
          {{trackTextLength this.updateTextLength @value}}
          ...attributes
        ></textarea>

        {{#if @maxlength}}
          {{! prettier-ignore }}
          <p class="pix-textarea-container__text-length-indicator">{{this.textLengthIndicator}} / {{@maxlength}}</p>
        {{/if}}

        {{#if @errorMessage}}
          <label
            for={{this.id}}
            class="pix-textarea-container__error-message"
          >{{@errorMessage}}</label>
        {{/if}}
      </div>

    </div>
  </template>
}
