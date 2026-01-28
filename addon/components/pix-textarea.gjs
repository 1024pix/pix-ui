import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import PixLabel from './pix-label';

export default class PixTextarea extends Component {
  // eslint-disable-next-line ember/no-tracked-properties-from-args
  @tracked value = this.args.value;

  get id() {
    if (this.args.id) return this.args.id;
    return 'textarea-' + guidFor(this);
  }

  get textLengthIndicator() {
    return this.value ? this.value.length : 0;
  }

  @action
  updateValue(event) {
    this.value = event.target.value;
  }

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
          maxlength={{if @maxlength @maxlength}}
          aria-required="{{if @requiredLabel true false}}"
          required={{if @requiredLabel true false}}
          class="pix-textarea-container__input {{if @errorMessage 'pix-textarea--error'}}"
          {{on "keyup" this.updateValue}}
          ...attributes
        >{{@value}}</textarea>

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
