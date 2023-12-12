import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form/Filterable and searchable select',
  argTypes: {
    label: {
      name: 'label',
      description: 'Label du composant global.',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    subLabel: {
      name: 'subLabel',
      description: 'Sous Label du composant global qui donne une description.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    options: {
      name: 'options',
      description:
        'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value``, ``label`` et ``category``. Ce dernier étant optionnel.',
      type: { name: 'array', required: true },
    },
    value: {
      name: 'value',
      description: 'Option sélectionnée',
      options: ['1', '2', '3', '4', '5', '6'],
      control: { type: 'select' },
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      name: 'onChange',
      description: 'Fonction à appeler quand une option est sélectionnée.',
      type: { required: true },
      control: { disable: true },
    },
    isSearchable: {
      name: 'isSearchable',
      description: 'Rend le champ du select cherchable',
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    screenReaderOnly: {
      name: 'screenReaderOnly',
      description: "Permet de rendre le label lisible uniquement par les lecteurs d'écran",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      name: 'placeholder',
      description: "Placeholder du select. Il sert aussi de label pour l'option par défaut",
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    hideDefaultOption: {
      name: 'hideDefaultOption',
      description: "Cache l'option par défaut du select",
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    searchLabel: {
      name: 'searchLabel',
      description:
        'Label de la recherche dans le menu déroulant du select. **⚠️ Obligatoire uniquement si le `isSearchable` est à true. ⚠️**',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    searchPlaceholder: {
      name: 'searchPlaceholder',
      description:
        'Placeholder de la recherche dans le menu déroulant du select.  **⚠️ Obligatoire uniquement si le `isSearchable` est à true. ⚠️**',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    emptySearchMessage: {
      name: 'emptySearchMessage',
      description:
        "Message affiché si la recherche dans le select ne retourne pas d'options.  **⚠️ Obligatoire uniquement si le `isSearchable` est à true. ⚠️**",
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    requiredText: {
      name: 'requiredText',
      description: "Affiche l'astérisque au label et ajoute sa signification",
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    errorMessage: {
      name: 'errorMessage',
      description: 'Message affiché si une erreur survient',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    categoriesPlaceholder: {
      name: 'categoriesPlaceholder',
      description:
        'Pour le filtre de categories, cela rempli le contenu interne du composant, `categoriesPlaceholder` pour `isSearchable` `true`, sinon rawContent du `button`',
      type: { name: 'string', required: true },
    },
    categoriesLabel: {
      name: 'categoriesLabel',
      description:
        "Pour le composant de filtre sur les catégories, cela donne un label au champ qui sera celui vocalisé par le lecteur d'écran",
      type: { name: 'string', required: true },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @placeholder={{this.placeholder}}
  @hideDefaultOption={{this.hideDefaultOption}}
  @options={{this.options}}
  @onChange={{this.onChange}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
  @isSearchable={{this.isSearchable}}
  @value={{this.value}}
  @requiredText={{this.requiredText}}
  @errorMessage={{this.errorMessage}}
/>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  label: 'Are you hungry?',
  subLabel: 'To help you choose your food, you can filter on different categories',
  placeholder: 'Mon select placeholder',
  options: [
    { value: '1', label: 'Salade', category: 'Kebab' },
    { value: '2', label: 'Tomate', category: 'Kebab' },
    { value: '3', label: 'Oignons', category: 'Kebab' },
    { value: '4', label: 'Steak', category: 'Hamburger' },
    { value: '5', label: 'Cheddar', category: 'Hamburger' },
  ],
  onChange: action('onChange'),
  categoriesLabel: 'Mon multi select label',
  categoriesPlaceholder: 'Mon multi select placeholder',
};

export const Searchable = Template.bind({});
Searchable.args = {
  ...Default.args,
  isSearchable: true,
};

export const WithLabelsOnlyForScreenReaders = Template.bind({});
WithLabelsOnlyForScreenReaders.args = {
  ...Default.args,
  screenReaderOnly: true,
  isSearchable: true,
};
