import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { createIntl } from '@formatjs/intl';

const DEFAULT_PAGE_SIZE = 10;

export default class PixPagination extends Component {
  @service router;

  static messages = {
    fr: createIntl({
      locale: 'fr',
      messages: {
        beforeResultsPerPage: 'Voir',
        selectPageSizeLabel: "Nombre d'élément à afficher par page",
        pageResults:
          '{total, plural, =0 {0 élément} =1 {1 élément} other {{total, number} éléments}}',
        pageInfo:
          '{start, number}-{end, number} sur {total, plural, =0 {0 élément} =1 {1 élément} other {{total, number} éléments}}',
        previousPageLabel: 'Aller à la page précédente',
        pageNumber: 'Page {current, number} / {total, number}',
        nextPageLabel: 'Aller à la page suivante',
      },
    }),
    en: createIntl({
      locale: 'en',
      messages: {
        beforeResultsPerPage: 'See',
        selectPageSizeLabel: 'Select the number of items by page',
        pageResults: '{total, plural, =0 {0 items} =1 {1 item} other {{total, number} items}}',
        pageInfo:
          '{start, number}-{end, number} of {total, plural, =0 {0 items} =1 {1 item} other {{total, number} items}}',
        previousPageLabel: 'Go to previous page',
        pageNumber: 'Page {current, number} / {total, number}',
        nextPageLabel: 'Go to next page',
      },
    }),
  };

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

  get selectPageSizeLabel() {
    return this.formatMessage('selectPageSizeLabel');
  }

  get pageResults() {
    return this.formatMessage('pageResults', { total: this.args.pagination.rowCount });
  }

  formatMessage(message, values) {
    return PixPagination.messages[this.args.locale ?? 'fr'].formatMessage({ id: message }, values);
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
    return this.args.pagination ? this.args.pagination.pageSize : DEFAULT_PAGE_SIZE;
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

  get pageOptions() {
    return [
      { label: '10', value: 10 },
      { label: '20', value: 20 },
      { label: '50', value: 50 },
      { label: '100', value: 100 },
    ];
  }

  @action
  changePageSize(event) {
    this.router.replaceWith({ queryParams: { pageSize: event.target.value, pageNumber: 1 } });
  }

  @action
  goToNextPage() {
    this.router.replaceWith({ queryParams: { pageNumber: this.nextPage } });
  }

  @action
  goToPreviousPage() {
    this.router.replaceWith({ queryParams: { pageNumber: this.previousPage } });
  }
}
