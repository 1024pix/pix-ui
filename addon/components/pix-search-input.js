import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { debounceTask } from 'ember-lifeline';

export default class PixSearchInput extends Component {
  initialValue = this.args.value;

  constructor() {
    super(...arguments);

    this.debounceTimeBeforeSearch = parseInt(this.args.debounceTimeInMs);
    if (Number.isNaN(this.debounceTimeBeforeSearch)) {
      throw new Error('ERROR in PixSearchInput component, @debounceTimeInMs param is not provided');
    }
    if (!this.args.triggerFiltering) {
      throw new Error('ERROR in PixSearchInput component, @triggerFiltering param is not provided');
    }
    if (!this.args.label && !this.args.ariaLabel) {
      throw new Error(
        'ERROR in PixSearchInput component, you must provide @label or @ariaLabel params',
      );
    }

    this.searchInputId = this.args.id || guidFor(this);
  }

  get label() {
    return this.args.label;
  }

  get ariaLabel() {
    return this.args.label ? null : this.args.ariaLabel;
  }

  debouncedTriggerFiltering(value) {
    this.args.triggerFiltering(this.searchInputId, value);
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
