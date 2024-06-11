import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SelectPage extends Controller {
  @tracked selectedOption = null;

  @action
  onChange(option) {
    this.selectedOption = option;
  }

  get options() {
    return [
      { value: '1', label: 'Figues' },
      { value: '3', label: 'Fraises' },
      { value: '2', label: 'Bananes' },
      { value: '4', label: 'Mangues' },
      { value: '5', label: 'Kaki' },
      {
        value: '6',
        label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
      },
    ];
  }
}
