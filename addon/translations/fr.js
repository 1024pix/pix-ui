export default {
  input: {
    state: {
      success: 'Sélection correcte',
      error: 'Sélection incorrecte',
    },
  },
  select: {
    search: 'Rechercher',
  },
  pagination: {
    beforeResultsPerPage: 'Voir',
    selectPageSizeLabel: "Nombre d'élément à afficher par page",
    pageResults: '{total, plural, =0 {0 élément} =1 {1 élément} other {{total, number} éléments}}',
    pageInfo:
      '{start, number}-{end, number} sur {total, plural, =0 {0 élément} =1 {1 élément} other {{total, number} éléments}}',
    previousPageLabel: 'Aller à la page précédente',
    pageNumber: 'Page {current, number} / {total, number}',
    nextPageLabel: 'Aller à la page suivante',
  },
  tag: {
    removeButton: 'Supprimer',
  },
  pixNavigation: {
    shrinkNavigationAriaLabel: 'Réduire la largeur du menu de navigation',
    expandNavigationAriaLabel: 'Revenir à la largeur initiale du menu de navigation',
  },
  stepper: {
    ariaLabel: 'Étape {current, number} sur {total, number}',
  },
};
