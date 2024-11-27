import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Data display/Table',
  // select attribute data type from https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    data: {
      name: 'data',
      description: 'Liste des données du tableau',
      type: { name: 'array', required: true },
    },
    headers: {
      name: 'headers',
      description: 'Nom des colonnes',
      type: { name: 'array', required: true },
    },
    variant: {
      name: 'variant',
      description: "Afficher le bon variant pour l'application",
      options: ['orga', 'certif', 'primary'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
      type: { name: 'string', required: false },
    },
    caption: {
      name: 'caption',
      description: "Description du tableau (lisible uniquement par les lecteurs d'écran)",
      type: { name: 'string', required: true },
    },
    colgroup: {
      name: '<:colgroup>',
      description:
        'Permet de gérer la taille des colonnes, [Donald Doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)',
      type: { name: 'block content', required: false },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTable
  @variant={{this.variant}}
  @data={{this.data}}
  @headers={{this.headers}}
  @caption={{this.caption}}
/>`,
    context: args,
  };
};
const Template2 = (args) => {
  return {
    template: hbs`<PixTable
  @variant={{this.variant}}
  @data={{this.data}}
  @headers={{this.headers}}
  @caption={{this.caption}}
>
  <:colgroup>
    <col />
    <col class='table__column--wide' />
    <col />
  </:colgroup>
</PixTable>
{{! template-lint-disable no-forbidden-elements}}
<style>
  .table__column--wide { width: 500px; }
</style>`,
    context: args,
  };
};

export const Default = Template.bind({});
export const ColGroup = Template2.bind({});
Default.args = {
  data: [
    {
      name: 'jean',
      description: 'fort au jungle speed',
      age: 'il a 15ans',
    },
    {
      name: 'brian',
      description: 'travail au peach pit',
      age: 'il a 25ans',
    },
  ],
  headers: [
    {
      name: 'Nom',
      key: 'name',
    },
    {
      name: 'Description',
      key: 'description',
    },
    {
      name: 'Age',
      key: 'age',
    },
  ],
  caption: 'Description du tableau',
};
ColGroup.args = Default.args;
