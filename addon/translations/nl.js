export default {
  input: {
    state: {
      success: 'Correcte selectie',
      error: 'Onjuiste selectie',
    },
  },
  select: {
    search: 'Zoeken',
  },
  common: {
    value: {
      percentage: '{value, number, ::percent}',
    },
  },
  pagination: {
    beforeResultsPerPage: 'Zie',
    selectPageSizeLabel: 'Selecteer het aantal items per pagina',
    pageResults: '{total, plural, =0 {0 items} =1 {1 item} other {{total, number} items}}',
    pageInfo:
      '{start, number}-{end, number} van {total, plural, =0 {0 items} =1 {1 item} other {{total, number} items}}',
    previousPageLabel: 'Ga naar vorige pagina',
    pageNumber: 'Pagina {current, number} / {total, number}',
    nextPageLabel: 'Ga naar volgende pagina',
  },
  tag: {
    removeButton: 'Verwijderen',
  },
  pixNavigation: {
    shrinkNavigationAriaLabel: 'De breedte van het navigatiemenu verkleinen',
    expandNavigationAriaLabel: 'Terug naar de oorspronkelijke breedte van het navigatiemenu',
  },
};
