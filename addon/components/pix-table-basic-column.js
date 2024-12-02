import Component from '@glimmer/component';

export default class PixTableBasicColumn extends Component {
  text = 'pix-table-basic-column';

  get typeClass() {
    if (this.args.type === 'number') {
      return `pix-table-basic-column--number`;
    }
    return '';
  }
}
