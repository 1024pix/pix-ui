import { hbs } from 'ember-cli-htmlbars';

import { VARIANTS } from '../../addon/helpers/variants.js';

export default {
  title: 'Data display/Table',
  tags: ['new'],
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
        'Définition du rendu des différentes colonnes de la table en utilisant `<PixTableColumn>`. Expose les paramètres `row` et `context` (correspondant aux données de la ligne actuelle)',
      type: { name: 'block content', required: true },
    },
    onRowClick: {
      name: 'onRowClick',
      description:
        "Permet d'ajouter un onClick sur le <tr> de chaque ligne, la fonction en paramètre récupérera l'objet au complet.",
      type: { name: 'function', required: false },
    },
    variant: {
      name: 'variant',
      description: "Afficher le bon variant pour l'application",
      options: VARIANTS,
      control: {
        type: 'select',
      },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
      type: {
        name: VARIANTS.join(' | '),
        required: false,
      },
    },
    condensed: {
      name: 'condensed',
      description: 'Afficher le tableau en mode condensé',
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTable
  @variant={{this.variant}}
  @data={{this.data}}
  @caption={{this.caption}}
  @condensed={{this.condensed}}
>
  <:columns as |row context|>
    <PixTableColumn @context={{context}} @type='text'>
      <:header>
        Nom
      </:header>
      <:cell>
        {{row.name}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}} class='table__column--wide'>
      <:header>
        Description
      </:header>
      <:cell>
        <i>{{row.description}}</i>
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}} @type='number'>
      <:header>
        Age
      </:header>
      <:cell>
        {{row.age}}
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>
{{! template-lint-disable no-forbidden-elements}}
<style>
  .table__column--wide { width: 300px; }
</style>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  caption: 'Description du tableau',
  condensed: false,
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
  onNameSort: () => {
    alert('Fonctionnalité seulement disponible en local sur dummy');
  },
};
