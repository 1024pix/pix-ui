import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

function sortOptionsByCheckedFirst(a, b) {
  if (a.checked && b.checked) return 0;
  if (a.checked) return -1;
  if (b.checked) return 1;
  return 0;
}
export default class PixMultiSelect extends Component {
  _selected = this.args.selected || [];
  @tracked _strictSearch = this.args.strictSearch || false; 

  @tracked isExpanded = false;  
  @tracked isSorted = true;  
  @tracked searchData;

  get hasResults() {
    return this.results.length > 0;
  }

  get results() {
    const defaultSelected = [...this.args.options];
    defaultSelected.forEach(option => {
      option.checked = this._selected.includes(option.value);
    });

    if (this.args.isSearchable && (this.isSorted || !this.searchData)) {
      defaultSelected.sort(sortOptionsByCheckedFirst);
    } 

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
      this._selected = [...this._selected, event.target.value]
    } else {
      this._selected = this._selected.filter((value) => {
        return value !== event.target.value
      });
    }

    this.args.onSelect(this._selected);
  }

  @action
  toggleDropDown() {
    this.isExpanded = !this.isExpanded;
  }

  @action
  showDropDown() {
    if (this.isExpanded) return;
    this.isExpanded = this.args.showOptionsOnInput || false;
    this.isSorted = true; 
  }

  @action
  hideDropDown() {
    if(!this.isExpanded) return;
    this.isExpanded = false;
    this.isSorted = false;  
  }

  @action
  updateSearch(event) {
    this.isSorted = false; 
    this.searchData = this._strictSearch ? event.target.value : this.removeCapitalizeAndDiacritics(event.target.value);
    this.isExpanded = true;
  }

  @action
  removeCapitalizeAndDiacritics(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}
