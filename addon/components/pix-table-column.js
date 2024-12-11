import Component from '@glimmer/component';
import { warn } from '@ember/debug';

export default class PixTableColumn extends Component {
  get displayHeader() {
    return this.args.context === 'header';
  }

  get sortable() {
    return Boolean(this.args.onSort);
  }

  get sortOrder() {
    if (this.args.sortOrder === undefined) {
      return undefined;
    }
    const correctSortOrders = ['asc', 'desc', null];
    warn(
      'PixTableColumn: you need to provide a valid sortOrder',
      correctSortOrders.includes(this.args.sortOrder),
      {
        id: 'pix-ui.table-column.sortOrder.not-valid',
      },
    );
    return this.args.sortOrder;
  }

  get iconName() {
    if (!this.sortOrder) {
      return 'sort';
    }
    if (this.sortOrder === 'asc') {
      return 'sortAsc';
    }
    return 'sortDesc';
  }

  get iconLabel() {
    warn(
      'PixTableColumn: parameters `@ariaLabelDefaultSort`, `@ariaLabelSortDesc` and `@ariaLabelSortAsc` are required for sort buttons',
      ![
        this.args.ariaLabelDefaultSort,
        this.args.ariaLabelSortDesc,
        this.args.ariaLabelSortAsc,
      ].includes(undefined),
      {
        id: 'pix-ui.pix-table-column.sortAriaLabels.required',
      },
    );
    if (!this.sortOrder) {
      return this.args.ariaLabelDefaultSort;
    }
    if (this.sortOrder === 'asc') {
      return this.args.ariaLabelSortDesc;
    }
    return this.args.ariaLabelSortAsc;
  }

  get ariaSort() {
    if (!this.sortable) {
      return undefined;
    }
    if (!this.sortOrder) {
      return 'none';
    }
    if (this.sortOrder === 'asc') {
      return 'ascending';
    }
    return 'descending';
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
