import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SelectPage extends Controller {
  @tracked selectedOption = null;
  @tracked structure = this.structures[1];

  @action
  onChange(option) {
    this.selectedOption = option;
  }

  @action
  setStructure(option) {
    this.structure = option;
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
        label: 'Fraises',
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
