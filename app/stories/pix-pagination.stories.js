import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`<PixPagination
  @pagination={{this.pagination}}
  @locale={{this.locale}}
  @pageOptions={{this.pageOptions}}
  @isCondensed={{this.isCondensed}}
/>`,
    context: args,
  };
};

export const French = Template.bind({});
French.args = {
  pagination: {
    page: 1,
    pageSize: 5,
    rowCount: 12,
    pageCount: 3,
  },
  locale: 'fr',
};

export const English = Template.bind({});
English.args = {
  pagination: {
    page: 2,
    pageSize: 10,
    rowCount: 12,
    pageCount: 2,
  },
  pageOptions: [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
  ],
  locale: 'en',
};

export const OnePage = Template.bind({});
OnePage.args = {
  pagination: {
    page: 1,
    pageSize: 10,
    rowCount: 2,
    pageCount: 1,
  },
  locale: 'fr',
};

export const Condensed = Template.bind({});
Condensed.args = {
  pagination: {
    page: 1,
    pageSize: 10,
    rowCount: 2,
    pageCount: 1,
  },
  locale: 'fr',
  isCondensed: true,
};

// select attribute data type from https://storybook.js.org/docs/react/essentials/controls
export const argTypes = {
  pagination: {
    name: 'pagination',
    description:
      "Un objet de pagination tel que l'on en trouve au retour de `knex-utils.fetchPage`",
    type: { name: 'object', required: true },
  },
  pageOptions: {
    name: 'pageOptions',
    description: "Un tableau d'objet `options` pour configurer le select",
    type: { name: 'array', required: false },
    control: {
      type: 'array',
      value: [
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
      ],
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
  locale: {
    name: 'locale',
    description: "La langue de l'utilisateur",
    type: { name: 'string', required: false },
    control: { type: 'select', options: ['fr', 'en'] },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'fr' },
    },
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
};
