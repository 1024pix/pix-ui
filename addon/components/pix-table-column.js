import Component from '@glimmer/component';
import { warn } from '@ember/debug';

export default class PixTableColumn extends Component {
  get displayHeader() {
    return this.args.context === 'header';
  }

  get typeClass() {
    const correctTypes = ['number', 'text'];
    const type = this.args.type ?? 'text';
    warn('PixTableColumn: you need to provide a valid type', correctTypes.includes(type), {
      id: 'pix-ui.table-column.type.incorrect',
    });
    if (this.args.type === 'number') {
      return `pix-table-column--number`;
    }
    return '';
  }
}
