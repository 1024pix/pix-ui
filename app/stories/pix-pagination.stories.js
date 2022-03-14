import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixPagination
        @pagination={{pagination}}
        @beforeResultsPerPage = {{beforeResultsPerPage}}
        @selectPageSizeLabel = {{selectPageSizeLabel}}
        @pageResults = {{pageResults}}
        @pageInfo = {{pageInfo}}
        @previousPageLabel = {{previousPageLabel}}
        @pageNumber = {{pageNumber}}
        @nextPageLabel = {{nextPageLabel}}
            />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  pagination: {
    page: 1,
    pageSize: 10,
    rowCount: 12,
    pageCount: 2,
  },
  beforeResultsPerPage: ' Voir',
  selectPageSizeLabel: "Nombre d'élément à afficher par page",
  pageResults: '{total, plural, =0 {0 élément} =1 {1 élément} other {{total, number} éléments}}',
  pageInfo:
    '{start, number}-{end, number} sur {total, plural, =0 {0 élément} =1 {1 élément} other {{total, number} éléments}}',
  previousPageLabel: 'Go to previous page',
  pageNumber: 'Page {current, number} / {total, number}',
  nextPageLabel: 'Aller à la page suivante',
};

// TODO: add component attributes information
// select attribute data type from https://storybook.js.org/docs/react/essentials/controls
export const argTypes = {
  pagination: {
    name: 'pagination',
    description: 'attribute description',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
  beforeResultsPerPage: {
    name: 'beforeResultsPerPage',
    description: 'Label devant l input select',
    type: { name: 'string', required: true },
    defaultValue: '',
  },
  selectPageSizeLabel: {
    name: 'selectPageSizeLabel',
    description: 'Label pour l aria-label pour pix-select',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
  pageResults: {
    name: 'pageResults',
    description: 'Label pour l aria-label de l icone right-arrow ',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
  pageInfo: {
    name: 'pageInfo',
    description: 'Label pour l aria-label de l icone right-arrow ',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
  previousPageLabel: {
    name: 'previousPageLabel',
    description: 'Label pour l aria-label de l icone left-arrow ',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
  pageNumber: {
    name: 'pageNumber',
    description: 'Label pour l aria-label de l icone right-arrow ',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
  nextPageLabel: {
    name: 'nextPageLabel',
    description: 'Label pour l aria-label de l icone right-arrow ',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
};
