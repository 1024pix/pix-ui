import { warn } from '@ember/debug';
import { htmlSafe } from '@ember/template';

import PixInputBase from './pix-input-base';
import PixLabel from './pix-label';

export default class PixCode extends PixInputBase {
  constructor() {
    super(...arguments);

    this.prefix = 'pix-code';
  }

  get length() {
    warn('PixCode: @length is required.', !['', null, undefined].includes(this.args.length), {
      id: 'pix-ui.code.length.required',
    });

    return this.args.length || 1;
  }

  get style() {
    return htmlSafe('--nb-characters:' + this.length);
  }

  <template>
    <div>
      {{#if (has-block "label")}}
        <PixLabel
          @for={{this.id}}
          @requiredLabel={{@requiredLabel}}
          @subLabel={{@subLabel}}
          @size={{@size}}
          @screenReaderOnly={{@screenReaderOnly}}
        >
          {{yield to="label"}}
        </PixLabel>
      {{/if}}
      <div>
        <input
          id={{this.id}}
          class="pix-code"
          style={{this.style}}
          value={{@value}}
          aria-required="{{if @requiredLabel true false}}"
          required={{if @requiredLabel true false}}
          maxlength={{this.length}}
          minlength={{this.length}}
          aria-describedby={{this.ariaDescribedBy}}
          ...attributes
        />

        {{#if this.hasErrorMessage}}
          <p id={{this.ariaDescribedBy}} class="pix-code__error-message">{{@errorMessage}}</p>
        {{/if}}
      </div>
    </div>
  </template>
}
