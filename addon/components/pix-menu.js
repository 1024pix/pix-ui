import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PixSelect extends Component {
  @tracked filterValue;

  get items() {
    if (typeof this.filterValue !== 'string') return this.args.items;
    return this.args.items.filter(({ label }) =>
      label.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  @action
  onFilterChange(e) {
    if (typeof e === 'string') {
      this.filterValue = e;
    } else {
      this.filterValue = e.target.value;
    }
  }
}
