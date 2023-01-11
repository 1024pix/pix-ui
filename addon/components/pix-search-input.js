import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import debounce from 'lodash.debounce';

export default class PixSearchInput extends Component {
  constructor() {
    super(...arguments);

    this.debounceTimeBeforeSearch = parseInt(this.args.debounceTimeInMs);
    if (isNaN(this.debounceTimeBeforeSearch)) {
      throw new Error('ERROR in PixSearchInput component, @debounceTimeInMs param is not provided');
    }
    if (!this.args.triggerFiltering) {
      throw new Error('ERROR in PixSearchInput component, @triggerFiltering param is not provided');
    }
    if (!this.args.label && !this.args.ariaLabel) {
      throw new Error(
        'ERROR in PixSearchInput component, you must provide @label or @ariaLabel params'
      );
    }

    this.searchInputId = this.args.id || guidFor(this);
    this.debouncedTriggerFiltering = debounce(
      this.args.triggerFiltering,
      this.debounceTimeBeforeSearch
    );
  }

  get label() {
    return this.args.label;
  }

  get ariaLabel() {
    return this.args.label ? null : this.args.ariaLabel;
  }

  @action
  async onSearch(event) {
    await this.debouncedTriggerFiltering(this.searchInputId, event.target.value);
  }
}
