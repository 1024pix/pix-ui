import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Navigation/Pagination',
  render: (args) => ({
    template: hbs`<PixPagination
  @pagination={{this.pagination}}
  @texts={{this.texts}}
  @pageOptions={{this.pageOptions}}
  @isCondensed={{this.isCondensed}}
/>`,
    context: args,
  }),
  argTypes: {
    pagination: {
      name: 'pagination',
      description:
        "Un objet de pagination tel que l'on en trouve au retour de `knex-utils.fetchPage`",
      type: { name: 'object', required: true },
    },
    pageOptions: {
      name: 'pageOptions',
      description: "Un tableau d'objet `options` pour configurer le select label / value",
      type: { name: 'array', required: false },
      control: {
        type: 'array',
      },
      table: {
        type: { summary: 'array' },
        defaultValue: {
          summary: JSON.stringify([
            {
              label: '10',
              value: 10,
            },
            {
              label: '25',
              value: 25,
            },
            {
              label: '50',
              value: 50,
            },
            {
              label: '100',
              value: 100,
            },
          ]),
        },
      },
    },
    onChange: {
      name: 'onChange',
      description: 'fonction éxecutée lors du changement de page ou pagination',
      type: { name: 'function', required: false },
    },
    isCondensed: {
      name: 'isCondensed',
      description:
        "En desktop, retire le contrôle du nombre d'élèments par page pour simplifier l'usage",
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    texts: {
      name: 'texts',
      description: 'object contenant les traductions du composants',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: JSON.stringify({
            title: 'Voir :',
            pageSize: "Séléctionner le nombre d'élement à afficher par page",
            pageElementCount: '5 elements',
            pageNumber: 'Page 1/3',
            previousPage: 'Aller à la page précedente',
            nextPage: 'Aller à la page suivante',
          }),
        },
      },
    },
  },
};

export const MultiplePage = {
  args: {
    pagination: {
      page: 1,
      pageSize: 5,
      rowCount: 12,
      pageCount: 3,
    },
    texts: {
      title: 'Voir :',
      pageSize: "Séléctionner le nombre d'élement à afficher par page",
      pageElementCount: '5 elements',
      pageNumber: 'Page 1/3',
      previousPage: 'Aller à la page précedente',
      nextPage: 'Aller à la page suivante',
    },
  },
};

export const OnePage = {
  args: {
    pagination: {
      page: 1,
      pageSize: 10,
      rowCount: 2,
      pageCount: 1,
    },
    texts: {
      title: 'Voir :',
      pageSize: "Séléctionner le nombre d'élement à afficher par page",
      pageElementCount: '5 elements',
      pageNumber: 'Page 1/3',
      previousPage: 'Aller à la page précedente',
      nextPage: 'Aller à la page suivante',
    },
  },
};

export const Condensed = {
  args: {
    pagination: {
      page: 1,
      pageSize: 10,
      rowCount: 2,
      pageCount: 1,
    },
    texts: {
      title: 'Voir :',
      pageSize: "Séléctionner le nombre d'élement à afficher par page",
      pageElementCount: '5 elements',
      pageNumber: 'Page 1/3',
      previousPage: 'Aller à la page précedente',
      nextPage: 'Aller à la page suivante',
    },
    isCondensed: true,
  },
};
