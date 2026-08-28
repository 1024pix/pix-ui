import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SelectPage extends Controller {
  @tracked selectedOption = null;
  @tracked structure = this.structures[1];
  @tracked multiValues = [];
  @tracked countriesError = true;
  @tracked selectedCountry = null;
  @tracked options = [
    {
      value: '1',
      label: 'Figues',
      category: 'rouge',
      icon: 'accountOff',
      iconTitle: 'titre icone account',
    },
    {
      value: '3',
      label:
        'Fraises, des bonnes fraises, bien rouge. Tout un gros paquet de fraises, mais beaucoup beaucoup',
      category: 'rouge',
      icon: 'userCircle',
      iconTitle: 'titre icone user',
    },
    { value: '2', label: 'Bananes', category: 'jaune' },
    { value: '4', label: 'Mangues', category: 'jaune' },
    { value: '5', label: 'Kaki', category: 'vert' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
      category: 'vert',
    },
  ];
  @tracked multiOptions = [
    { value: 'a', label: 'Salade' },
    { value: 'b', label: 'Tomate' },
    { value: 'c', label: 'Oignons' },
  ];
  @tracked searchValue;
  @tracked multiSearchValue;

  @tracked textsKebab = {
    searchLabel: 'Rechercher mon condiment'
  };

  @action
  onChange(option) {
    this.selectedOption = option;
  }

  @action
  onChangeCountry(option) {
    this.selectedCountry = option;
    this.countriesError = false;
  }

  @action
  onMultiChange(values) {
    this.multiValues = values;
  }

  @action
  setStructure(option) {
    this.structure = option;
  }

  @action
  addNewOption() {
    if (this.options.length > 6) return;
    const newOption = { value: '7', label: 'Citron', category: 'yellow' };
    this.options = [...this.options, newOption];
  }

  @action
  addNewMultiOption() {
    if (this.multiOptions.length > 3) return;
    const newOption = { value: 'd', label: 'Harissa (NEW)' };
    this.multiOptions = [...this.multiOptions, newOption];
  }

  @action
  onSearch(search) {
    this.searchValue = search;
  }

  @action
  onMultiSearch(search) {
    this.multiSearchValue = search;
  }

  @action
  triggerFiltering(_, value) {
    console.log('SEARCH', value);
  }

  countriesOptions = [
    { value: '1', label: 'England' },
    { value: '2', label: 'Cambodgia' },
    { value: '3', label: 'South Africa' },
  ];

  get options() {
    return;
  }

  get filteredOptions() {
    if (this.searchValue) {
      try {
        const searchRegex = new RegExp(`${this.searchValue}`, 'i');
        return this.options.filter((option) => option.label.match(searchRegex));
      } catch {}
    }
    return this.options;
  }

  get filteredMultiOptions() {
    if (this.multiSearchValue) {
      try {
        const searchRegex = new RegExp(`${this.multiSearchValue}`, 'i');
        return this.multiOptions.filter((option) => option.label.match(searchRegex));
      } catch {}
    }
    return this.multiOptions;
  }

  get pagination() {
    return {
      page: 1,
      pageSize: 5,
      rowCount: 12,
      pageCount: 3,
    };
  }
}
