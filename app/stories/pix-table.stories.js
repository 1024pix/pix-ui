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
    caption: {
      name: 'caption',
      description: "Description du tableau (lisible uniquement par les lecteurs d'écran)",
      type: { name: 'string', required: true },
    },
    columns: {
      name: '<:columns>',
      description:
        'Définition du rendu des différentes colonnes de la table en utilisant `<PixTableColumn>`',
      type: { name: 'block content', required: true },
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
      type: {
        name: '"primary" | "orga" | "certif"',
        required: false,
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTable @variant={{this.variant}} @data={{this.data}} @caption={{this.caption}}>
  <:columns as |context|>
    <PixTableColumn @context={{context}}>
      <:header>
        Nom
      </:header>
      <:cell as |row|>
        {{row.name}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}}>
      <:header>
        Description
      </:header>
      <:cell as |row|>
        <i>{{row.description}}</i>
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}} class='table__column--wide'>
      <:header>
        Age
      </:header>
      <:cell as |row|>
        il a
        {{row.age}}
        ans
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}}>
      <:header>
        Info
      </:header>
      <:cell as |row|>
        <PixIcon @name='info' @title={{concat row.name ' a ' row.age ' ans'}} />
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>
{{! template-lint-disable no-forbidden-elements}}
<style>
  .table__column--wide { width: 500px; }
</style>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  caption: 'Description du tableau',
  data: [
    {
      name: 'jean',
      description: 'fort au jungle speed',
      age: 15,
    },
    {
      name: 'brian',
      description: 'travail au peach pit',
      age: 25,
    },
  ],
};
