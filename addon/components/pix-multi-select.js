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
  @tracked _currentSelected = [...this._selected];
  @tracked _strictSearch = this.args.strictSearch || false; 

  @tracked isExpanded = false;  
  @tracked searchData;

  get hasResults() {
    return this.results.length > 0;
  }

  get results() {
    const defaultSelected = this._getList();

    defaultSelected.forEach(option => {
      option.checked = this._currentSelected.includes(option.value);
    });

    if (this.args.isSearchable) {
      defaultSelected.sort(sortOptionsByCheckedFirst);
    } 

    defaultSelected.forEach(option => {
      option.checked = this._selected.includes(option.value);
    });


    return defaultSelected;
  }

  @action
  _getList() {
    const defaultList = [...this.args.options];

    return this.args.isSearchable && this.searchData ? defaultList.filter(list => {
      return this._strictSearch ? list.label.includes(this.searchData) : this.removeCapitalizeAndDiacritics(list.label).includes(this.searchData);
     }) : defaultList;
  }

  @action
  onSelect(event) {
    if(event.target.checked) {
      this._selected = [...this._selected, event.target.value];
        } else {
      this._selected = this._selected.filter((value) => {
        return value !== event.target.value;
      });
    }

    this.args.onSelect(this._selected);
  }

  @action
  toggleDropDown() {
    this.isExpanded = !this.isExpanded;

    if(!this.isExpanded) {
      this.updateCurrentSelectedList();
    }
  }

  @action
  showDropDown() {
    if (this.isExpanded) return;
    this.isExpanded = this.args.showOptionsOnInput || false;
  }

  @action
  hideDropDown(event) {
    if(!this.isExpanded) return;

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.isExpanded = false;

    this.updateCurrentSelectedList();  
  }

  @action
  updateSearch(event) {
    this.searchData = this._strictSearch ? event.target.value : this.removeCapitalizeAndDiacritics(event.target.value);

    if(!this.searchData) {
      this.updateCurrentSelectedList();
    }
    this.isExpanded = true;
  }

  @action
  updateCurrentSelectedList() {
    this._currentSelected = [...this._selected];
  }

  @action
  removeCapitalizeAndDiacritics(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}
