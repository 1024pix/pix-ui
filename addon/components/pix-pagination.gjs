import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { eq } from 'ember-truth-helpers';

import PixIconButton from './pix-icon-button';
import PixSelect from './pix-select';

const DEFAULT_PAGE_OPTIONS = [
  { label: '10', value: 10 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];

export default class PixPagination extends Component {
  @service router;

  get isCondensed() {
    return this.args.isCondensed ? 'pix-pagination-condensed' : 'pix-pagination';
  }

  get pageOptions() {
    return this.args.pageOptions ? this.args.pageOptions : DEFAULT_PAGE_OPTIONS;
  }

  get currentPage() {
    return this.args.pagination ? this.args.pagination.page : 1;
  }

  get pageCount() {
    if (!this.args.pagination) return 0;
    if (this.args.pagination.pageCount === 0) return 1;
    return this.args.pagination.pageCount;
  }

  get pageSize() {
    return this.args.pagination ? this.args.pagination.pageSize : this.pageOptions[0].value;
  }

  get isNextPageDisabled() {
    return this.currentPage === this.pageCount || this.pageCount === 0;
  }

  get nextPage() {
    return Math.min(this.currentPage + 1, this.pageCount);
  }

  get isPreviousPageDisabled() {
    return this.currentPage === 1 || this.pageCount === 0;
  }

  get previousPage() {
    return Math.max(this.currentPage - 1, 1);
  }

  get resultsCount() {
    return this.args.pagination ? this.args.pagination.rowCount : 0;
  }

  get firstItemPosition() {
    if (!this.args.pagination) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get lastItemPosition() {
    if (!this.args.pagination) return 0;
    const { rowCount } = this.args.pagination;
    return Math.min(rowCount, this.firstItemPosition + this.pageSize - 1);
  }

  @action
  onChange() {
    if (typeof this.args.onChange !== 'function') return;

    this.args.onChange();
  }

  @action
  changePageSize(value) {
    this.router.replaceWith({ queryParams: { pageSize: value, pageNumber: 1 } });
    this.onChange();
  }

  @action
  goToNextPage() {
    this.router.replaceWith({ queryParams: { pageNumber: this.nextPage } });
    this.onChange();
  }

  @action
  goToPreviousPage() {
    this.router.replaceWith({ queryParams: { pageNumber: this.previousPage } });
    this.onChange();
  }

  <template>
    <footer class={{this.isCondensed}}>
      <section class="pix-pagination__size">
        <span
          class="pagination-size__label"
          aria-hidden="true"
        >{{@beforeResultsPerPageLabel}}</span>
        <PixSelect
          @placeholder={{this.pageSize}}
          @screenReaderOnly={{true}}
          class="pagination-size__choice"
          @value={{this.pageSize}}
          @hideDefaultOption={{true}}
          @onChange={{this.changePageSize}}
          @options={{this.pageOptions}}
        >
          <:label>{{@selectPageSizeLabel}}</:label>
        </PixSelect>
      </section>
      <section class="pix-pagination__navigation">
        <span>
          {{#if (eq this.pageCount 1)}}
            {{@singlePageElementCountLabel}}
          {{else}}
            {{@multiplePageElementCountLabel}}
          {{/if}}
        </span>
        <div class="pix-pagination-navigation__action">
          <PixIconButton
            class="pix-pagination-navigation__action-button"
            @iconName="arrowLeft"
            @ariaLabel={{@previousPageLabel}}
            @triggerAction={{this.goToPreviousPage}}
            @withBackground={{false}}
            @size="big"
            @color="dark-grey"
            disabled={{this.isPreviousPageDisabled}}
            aria-disabled="{{this.isPreviousPageDisabled}}"
          />
          <span>
            {{@pageNumberLabel}}
          </span>
          <PixIconButton
            class="pix-pagination-navigation__action-button"
            @iconName="arrowRight"
            @ariaLabel={{@nextPageLabel}}
            @triggerAction={{this.goToNextPage}}
            @withBackground={{false}}
            @size="big"
            @color="dark-grey"
            disabled={{this.isNextPageDisabled}}
            aria-disabled="{{this.isNextPageDisabled}}"
          />
        </div>
      </section>
    </footer>
  </template>
}
