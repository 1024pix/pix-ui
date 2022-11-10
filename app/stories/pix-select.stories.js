import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export const Template = (args) => {
  return {
    template: hbs`
      </style>
        <PixSelect
          @className={{this.className}}
          @options={{this.options}}
          @isSearchable={{this.isSearchable}}
          @onChange={{this.onChange}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @subLabel={{this.subLabel}}
          @searchLabel={{this.searchLabel}}
          @value={{this.value}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @screenReaderOnly={{this.screenReaderOnly}}
          @emptySearchMessage={{this.emptySearchMessage}}
          @requiredLabel={{this.requiredLabel}}
        />
    `,
    context: args,
  };
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: 'custom',
  options: [
    { value: '1', label: 'Figues' },
    { value: '3', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '4', label: 'Mangues' },
    { value: '5', label: 'Kaki' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  label: 'Mon label',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  isSearchable: false,
  onChange: action('onChange'),
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: '1', label: 'Figues' },
    { value: '3', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '4', label: 'Mangues' },
    { value: '5', label: 'Kaki' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  label: 'Mon label',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  isSearchable: false,
  onChange: action('onChange'),
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  options: [
    { value: '1', label: 'Figues' },
    { value: '3', label: 'Fraises' },
    { value: '2', label: 'Bananes' },
    { value: '4', label: 'Mangues' },
    { value: '5', label: 'Kaki' },
    {
      value: '6',
      label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)',
    },
  ],
  label: 'Mon label',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  searchLabel: 'Mon label',
  searchPlaceholder: 'Mon innerText',
  isSearchable: true,
  emptySearchMessage: 'Aucune option',
  onChange: action('onChange'),
};

export const argTypes = {
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
    description: 'Rend le champ cherchable',
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
  label: {
    name: 'label',
    description: 'Label du menu déroulant',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
    },
  },
  subLabel: {
    name: 'subLabel',
    description: 'Sous Label explicatif du menu déroulant',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  placeholder: {
    name: 'placeholder',
    description: 'Placeholder du menu déroulant',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
    },
  },
  className: {
    name: 'className',
    description: 'Cette classe css permet de surcharger le css par défaut du composant.',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
  searchLabel: {
    name: 'searchLabel',
    description: 'Label de la recherche dans le menu déroulant',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
    },
  },
  searchPlaceholder: {
    name: 'searchPlaceholder',
    description: 'Placeholder de la recherche dans le menu déroulant',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
    },
  },
  emptySearchMessage: {
    name: 'emptySearchMessage',
    description: "Message affiché si la recherche ne retourne pas d'options",
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' },
    },
  },
  requiredLabel: {
    name: 'requiredLabel',
    description: "Affiche l'asterix au label et ajoute sa signification",
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
};
