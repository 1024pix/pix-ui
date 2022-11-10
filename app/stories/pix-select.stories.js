import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export const Template = (args) => {
  return {
    template: hbs`
      <PixSelect
        @className={{this.className}}
        @options={{this.options}}
        @isSearchable={{this.isSearchable}}
        @onChange={{this.onChange}}
        @label={{this.label}}
        @placeholder={{this.placeholder}}
        @subLabel={{this.subLabel}}
        @value={{this.value}}
        @screenReaderOnly={{this.screenReaderOnly}}
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

export const searchableSelect = Template.bind({});
searchableSelect.args = {
  ...Default.args,
  emptyOptionNotSelectable: false,
  isSearchable: true,
  isValidationActive: true,
  label: 'Mon label',
  placeholder: 'Mon innerText',
  subLabel: 'Mon sous label',
  onChange: action('onChange'),
};

export const argTypes = {
  options: {
    name: 'options',
    description:
      'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``. ``value`` doit être de type ``String`` pour être que le champ puisse être cherchable',
    type: { name: 'object', required: true },
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
  isValidationActive: {
    name: 'isValidationActive',
    description:
      "Rend la bordure du champ vert au focus si la valeur de recherche match une option (c'est à dire si l'utilisateur a selectionné une option valable",
    control: { type: 'boolean' },
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  emptyOptionNotSelectable: {
    name: 'emptyOptionNotSelectable',
    description: 'Rend le premier champ qui est vide non visible une fois sélectionné',
    control: { type: 'boolean' },
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  size: {
    name: 'size',
    description:
      '⚠️ **Propriété dépréciée** ⚠️ , désormais tous les éléments de formulaires feront 36px de hauteur.',
    options: ['big', 'small'],
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'small' },
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
