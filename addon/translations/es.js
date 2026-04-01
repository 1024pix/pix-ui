export default {
  input: {
    state: {
      success: 'Selección correcta',
      error: 'Selección incorrecta',
    },
  },
  select: {
    search: 'Buscar',
  },
  pagination: {
    beforeResultsPerPage: 'Ver',
    selectPageSizeLabel: 'Número de elementos que se mostrarán por página',
    pageResults:
      '{total, plural, =0 {0 elemento} =1 {1 elemento} otros {{total, número} elementos}}',
    pageInfo:
      '{start, número}-{end, número} de {total, plural, =0 {0 elemento} =1 {1 elemento} otros {{total, número} elementos}}',
    previousPageLabel: 'Ir a la página anterior',
    pageNumber: 'Página {current, number} / {total, number}',
    nextPageLabel: 'Ir a la página siguiente',
  },
  stepper: {
    ariaLabel: 'Paso {current, number} de {total, number}',
  },
  pixNavigation: {
    shrinkNavigationAriaLabel: 'Reducir el ancho del menú de navegación',
    expandNavigationAriaLabel: 'Volver al ancho inicial del menú de navegación',
  },
};
