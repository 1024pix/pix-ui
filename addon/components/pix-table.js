import Component from '@glimmer/component';
import { warn } from '@ember/debug';

export default class PixTable extends Component {
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

  get caption() {
    warn(`PixTable: @caption is required`, Boolean(this.args.caption), {
      id: 'pix-ui.pix-table.caption.required',
    });
    return this.args.caption;
  }

  get headerClass() {
    return `pix-table-header--${this.variant}`;
  }
}
