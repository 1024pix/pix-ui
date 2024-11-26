import Component from '@glimmer/component';
import { warn } from '@ember/debug';

export default class PixTable extends Component {
  get computedData() {
    return this.args.data.map((data) => {
      return this.args.headers.map((header) => {
        return data[header.key];
      });
    });
  }

  get variant() {
    const value = this.args.variant ?? 'primary';
    warn(
      `PixTable: @variant "${value}" should be certif, orga or primary`,
      ['primary', 'orga', 'certif'].includes(value),
      {
        id: 'pix-ui.pix-table.variant.not-valid',
      },
    );

    return value;
  }
  get headerClass() {
    return `pix-table-header--${this.variant}`;
  }
}
