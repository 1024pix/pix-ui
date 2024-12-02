import Component from '@glimmer/component';
import { warn } from '@ember/debug';

export default class PixTableBasicColumn extends Component {
  get typeClass() {
    const correctTypes = ['number', 'text'];
    const type = this.args.type ?? 'text';
    warn('PixTableBasicColumn: you need to provide a valid type', correctTypes.includes(type), {
      id: 'pix-ui.table-basic-column.type.incorrect',
    });
    if (this.args.type === 'number') {
      return `pix-table-basic-column--number`;
    }
    return '';
  }
}
