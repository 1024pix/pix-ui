import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixMultiSelect extends Component {
  @tracked _selected = this.args.selected || [];
  @tracked _strictSearch = this.args.strictSearch || false; 

  @tracked isExpanded = false;  
  @tracked searchData;

  get hasResults() {
    return this.results.length > 0;
  }

  get results() {
    const defaultSelected = this.args.options;
    defaultSelected.forEach(option => {
      option.checked = this._selected.includes(option.value);
    });

    if(this.searchData) {
     return defaultSelected.filter(list => {
      return this._strictSearch ? list.label.includes(this.searchData) : this.removeCapitalizeAndDiacritics(list.label).includes(this.searchData);
     });
    }

    return defaultSelected;
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
  showDropDown() {
    this.isExpanded = this.args.showOptionsOnInput || false;
  }
  
  @action
  toggleDropDown() {
    this.isExpanded = !this.isExpanded;
  }

  @action
  hideDropDown() {
    if(this.isExpanded) {
      this.isExpanded = false;
    }  
  }

  @action
  updateSearch(event) {
    this.searchData = this._strictSearch ? event.target.value : this.removeCapitalizeAndDiacritics(event.target.value);
    this.isExpanded = true;
  }

  @action
  removeCapitalizeAndDiacritics(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}
