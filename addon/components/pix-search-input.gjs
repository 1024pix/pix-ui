import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { debounceTask } from 'ember-lifeline';

import PixIcon from './pix-icon';
import PixInputBase from './pix-input-base';
import PixLabel from './pix-label';

export default class PixSearchInput extends PixInputBase {
  initialValue = this.args.value;

  constructor() {
    super(...arguments);

    this.prefix = 'pix-search-input';

    this.debounceTimeBeforeSearch = parseInt(this.args.debounceTimeInMs);
    if (Number.isNaN(this.debounceTimeBeforeSearch)) {
      throw new Error('ERROR in PixSearchInput component, @debounceTimeInMs param is not provided');
    }
    if (!this.args.triggerFiltering) {
      throw new Error('ERROR in PixSearchInput component, @triggerFiltering param is not provided');
    }
  }

  debouncedTriggerFiltering(value) {
    this.args.triggerFiltering(this.id, value);
  }

  @action
  onSearch(event) {
    debounceTask(
      this,
      'debouncedTriggerFiltering',
      event.target.value,
      this.debounceTimeBeforeSearch,
    );
  }

  <template>
    <div class="pix-search-input {{if @inlineLabel ' pix-search-input--inline'}}">
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

      <div class="pix-search-input__input-container">
        <PixIcon @name="search" @ariaHidden={{true}} />
        <input
          id={{this.id}}
          class="pix-search-input__input"
          name={{@inputName}}
          placeholder={{@placeholder}}
          value={{this.initialValue}}
          {{on "input" this.onSearch}}
          ...attributes
        />
      </div>
    </div>
  </template>
}
