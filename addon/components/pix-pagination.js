import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { formatMessage } from '../translations';

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

  get beforeResultsPerPage() {
    return this.formatMessage('beforeResultsPerPage');
  }

  get previousPageLabel() {
    return this.formatMessage('previousPageLabel');
  }

  get nextPageLabel() {
    return this.formatMessage('nextPageLabel');
  }

  get pageNumber() {
    return this.formatMessage('pageNumber', {
      total: this.pageCount,
      current: this.currentPage,
    });
  }
  get pageInfo() {
    return this.formatMessage('pageInfo', {
      total: this.resultsCount,
      start: this.firstItemPosition,
      end: this.lastItemPosition,
    });
  }

  get pageOptions() {
    return this.args.pageOptions ? this.args.pageOptions : DEFAULT_PAGE_OPTIONS;
  }

  get selectPageSizeLabel() {
    return this.formatMessage('selectPageSizeLabel');
  }

  get pageResults() {
    return this.formatMessage('pageResults', { total: this.args.pagination.rowCount });
  }

  formatMessage(message, values) {
    return formatMessage(this.args.locale ?? 'fr', `pagination.${message}`, values);
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
    return this.args.pagination ? this.args.pagination.pageSize : this.args.pageOptions[0];
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
  changePageSize(value) {
    this.router.replaceWith({ queryParams: { pageSize: value, pageNumber: 1 } });
  }

  @action
  goToNextPage() {
    this.router.replaceWith({ queryParams: { pageNumber: this.nextPage } });
  }

  @action
  goToPreviousPage() {
    this.router.replaceWith({ queryParams: { pageNumber: this.previousPage } });
  }

  @action
  checkCurrentPageAgainstPageCount() {
    const pageCount = this.args.pagination.pageCount;
    if (pageCount === 0) return;
    if (this.currentPage > pageCount) {
      this.router.replaceWith({ queryParams: { pageNumber: pageCount } });
    }
  }
}
