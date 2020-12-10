import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixMultiSelect extends Component {
  @tracked isExpanded = false;
  @tracked _selected = this.args.selected || [];

  get hasResults() {
    return this.results.length > 0;
  }

  get results() {
    const defaultSelected = this.args.options;
    defaultSelected.forEach(option => {
      option.checked = this._selected.includes(option.value);
    });

    return defaultSelected;
  }

  get emptyMessage() {
    return this.args.emptyMessage || `Pas de résultat`;
  }

  @action
  onSelect(event) {
    if(event.target.checked) {
      this._selected.push(event.target.value)
    } else {
      this._selected = this._selected.filter((value) => {
        return value !== event.target.value
      });
    }

    this.args.onSelect(this._selected);
  }

  @action
  dropDown() {
    this.isExpanded = !this.isExpanded;
  }

  @action
  hideDropDown() {
    this.isExpanded = false;
  }
}
