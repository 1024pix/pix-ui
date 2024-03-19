import PixInputBase from './pix-input-base';

import { action } from '@ember/object';
import { debounceTask } from 'ember-lifeline';

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
}
