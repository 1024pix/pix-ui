import { warn } from '@ember/debug';
import Component from '@glimmer/component';

import PixIconButton from './pix-icon-button';

export default class PixTableColumn extends Component {
  get displayHeader() {
    return this.args.context === 'header';
  }

  get type() {
    return this.args.type ?? 'text';
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
    const isText = this.type === 'text';
    if (!this.sortOrder) {
      return isText ? 'sortAz' : 'sort';
    }
    if (this.sortOrder === 'asc') {
      return isText ? 'sortAzAsc' : 'sortAsc';
    }
    return isText ? 'sortAzDesc' : 'sortDesc';
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
    const correctTypes = ['number', 'text', 'checkbox', 'tag', 'tagDate', 'link'];
    warn('PixTableColumn: you need to provide a valid type', correctTypes.includes(this.type), {
      id: 'pix-ui.table-column.type.incorrect',
    });
    if (this.args.type === 'number') {
      return `pix-table-column--number`;
    }
    if (this.args.type === 'checkbox') {
      return `pix-table-column--checkbox`;
    }
    if (this.args.type === 'tag') {
      return `pix-table-column--tag`;
    }
    if (this.args.type === 'tagDate') {
      return `pix-table-column--tag-date`;
    }
    if (this.args.type === 'link') {
      return `pix-table-column--link`;
    }
    return '';
  }

  <template>
    {{#if this.displayHeader}}
      <th scope="col" ...attributes aria-sort={{this.ariaSort}}>
        <div class="pix-table-header-container">
          {{yield to="header"}}
          {{#if this.sortable}}
            <PixIconButton
              @ariaLabel={{this.iconLabel}}
              @iconName={{this.iconName}}
              @triggerAction={{@onSort}}
              @size="small"
            />
          {{/if}}
        </div>
      </th>
    {{else}}
      {{#if @isMainRow}}
        <th scope="row" class={{this.typeClass}} ...attributes>
          {{yield to="cell"}}
        </th>
      {{else}}
        <td class={{this.typeClass}} ...attributes>
          {{yield to="cell"}}
          {{#if (has-block "subCell")}}
            <p>{{yield to="subCell"}}</p>
          {{/if}}
        </td>
      {{/if}}
    {{/if}}
  </template>
}
