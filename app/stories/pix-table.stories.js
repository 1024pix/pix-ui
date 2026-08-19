import { action } from '@storybook/addon-actions';
import { hbs } from 'ember-cli-htmlbars';

import { VARIANTS } from '../../addon/helpers/variants.js';

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
      description: 'Description du tableau',
      type: { name: 'string', required: true },
    },
    displayCaption: {
      name: 'displayCaption',
      description: "Permet d'afficher ou non la caption du tableau",
      type: { name: 'boolean', required: false },
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
  @displayCaption={{this.displayCaption}}
  @condensed={{this.condensed}}
  @onRowClick={{this.onRowClick}}
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
    <PixTableColumn @context={{context}} @type='tag'>
      <:header>
        Tag
      </:header>
      <:cell>
        <PixTag>{{row.tag}}</PixTag>
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
      tag: 'tag1',
    },
    {
      name: 'brian',
      description: 'travail au peach pit',
      age: 25,
      tag: 'tag2',
    },
  ],
  onNameSort: () => {
    alert('Fonctionnalité seulement disponible en local sur dummy');
  },
};

export const Condensed = Template.bind({});
Condensed.args = {
  ...Default.args,
  condensed: true,
};

export const ClickableRow = Template.bind({});
ClickableRow.args = {
  ...Default.args,
  onRowClick: action('onRowClick'),
};
