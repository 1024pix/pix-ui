import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export const select = (args) => {
  return {
    template: hbs`
      <PixSelect
        id="default-pix-select"
        @options={{options}}
        @onChange={{onChange}}
        @selectedOption={{selectedOption}}
        @emptyOptionLabel={{emptyOptionLabel}}
        @emptyOptionNotSelectable={{emptyOptionNotSelectable}}
        @isSearchable={{isSearchable}}
        @isValidationActive={{isValidationActive}}
        @size={{size}}
      />
    `,
    context: args,
  };
};

export const searchableSelect = (args) => {
  return {
    template: hbs`
      <PixSelect
        id="searchable-pix-select"
        @options={{options}}
        @onChange={{onChange}}
        @selectedOption={{selectedOption}}
        @emptyOptionLabel={{emptyOptionLabel}}
        @emptyOptionNotSelectable={{emptyOptionNotSelectable}}
        @isSearchable={{isSearchable}}
        @isValidationActive={{isValidationActive}}
        placeholder={{this.placeholder}}
        @size={{size}}
      />
    `,
    context: args,
  };
};
searchableSelect.args = {
  emptyOptionNotSelectable: false,
  isSearchable: true,
  isValidationActive: true,
  placeholder: 'Fraises, Mangues...',
  options: [
    { value: 'Figues', label: 'Figues' },
    { value: 'Bananes', label: 'Bananes' },
    { value: 'Noix', label: 'Noix' },
    { value: 'Papayes', label: 'Papayes' },
    { value: 'Fèves de chocolat', label: 'Fèves de chocolat' },
    { value: 'Dattes', label: 'Dattes' },
    { value: 'Mangues', label: 'Mangues' },
    { value: 'Jujube', label: 'Jujube' },
    { value: 'Avocat', label: 'Avocat' },
    { value: 'Fraises', label: 'Fraises' },
    { value: 'Kaki', label: 'Kaki' },
  ]
}

export const argTypes = {
  options: {
    name: 'options',
    description: 'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``. ``value`` doit être de type ``String`` pour être que le champ puisse être cherchable',
    type: { name: 'object', required: true },
    defaultValue: [
      { value: '1', label: 'Figues' },
      { value: '2', label: 'Bananes' },
      { value: '3', label: 'Noix' },
      { value: '4', label: 'Papayes' },
      { value: '5', label: 'Fèves de chocolat' },
      { value: '6', label: 'Dattes' },
      { value: '7', label: 'Mangues' },
      { value: '8', label: 'Jujube' },
      { value: '9', label: 'Avocat' },
      { value: '10', label: 'Fraises' },
      { value: '11', label: 'Kaki' },
    ],
  },
  onChange: {
    name: 'onChange',
    description: 'Fonction à appeler si une option est sélectionnée',
    type: { required: true },
    defaultValue: action('onChange'),
    control: { disable: true },
  },
  selectedOption: {
    name: 'selectedOption',
    description: 'Option sélectionnée',
    control: { type: 'string' },
    type: { name: 'string', required: false },
  },
  emptyOptionLabel: {
    name: 'emptyOptionLabel',
    description: 'Texte à afficher si aucune option n‘est sélectionnée',
    control: { type: 'string' },
    type: { name: 'string', required: false },
  },
  isSearchable: {
    name: 'isSearchable',
    description: 'Rend le champ cherchable',
    control: { type: 'boolean' },
    type: { name: 'boolean', required: false },
  },
  isValidationActive: {
    name: 'isValidationActive',
    description:
      'Rend la bordure du champ vert au focus si la valeur de recherche match une option (c\'est à dire si l\'utilisateur a selectionné une option valable',
    control: { type: 'boolean' },
    type: { name: "boolean", required: false },
  },
  emptyOptionNotSelectable: {
    name: 'emptyOptionNotSelectable',
    description: 'Rend le premier champ qui est vide non visible une fois sélectionné',
    control: { type: 'boolean' },
    type: { name: 'boolean', required: false },
  },
  size: {
    name: 'size',
    description: 'taille: `big`,`small`',
    options: ['big', 'small'],
    type: { name: 'string', required: false },
    control: { type: 'select' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'big' },
    }
  },
};
