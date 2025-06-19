import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SelectPage extends Controller {
  @tracked selectedOption = null;
  @tracked structure = this.structures[1];
  @tracked multiValues = [];
  @tracked multiOptions = [
    { value: 'a', label: 'Salade'},
    { value: 'b', label: 'Tomate'},
    { value: 'c', label: 'Oignons'},
  ]

  @action
  onChange(option) {
    this.selectedOption = option;
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
  addNewMultiOption() {
    if (this.multiOptions.length > 3) return;
    const newOption = { value: 'd', label: 'Harissa (NEW)' };
    this.multiOptions = [...this.multiOptions, newOption]
  }

  get options() {
    return [
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
