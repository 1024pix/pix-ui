import { hbs } from 'ember-cli-htmlbars';

export const select = (args) => {
  return {
    template: hbs`
      <h3 style="margin: 10px;">
        <label for="default-pix-select">PixSelect par défaut: </label>
      </h3>
      <PixSelect
        id="default-pix-select"
        @options={{options}}
        @onChange={{onChange}}
        @selectedOption={{selectedOption}}
        @emptyOptionLabel={{emptyOptionLabel}}
      />
    `,
    context: args,
  };
};

export const searchableSelect = (args) => {
  return {
    template: hbs`
      <h3 style="margin: 10px;">
        <label for="searchable-pix-select" style="margin: 10px">PixSelect cherchable</label>
      </h3>
        <PixSelect
          id="searchable-pix-select"
          @options={{options}}
          @onChange={{onChange}}
          @selectedOption={{selectedOption}}
          @emptyOptionLabel={{emptyOptionLabel}}
          @isSearchable={{true}}
          @isValidationActive={{true}}
          placeholder='Fraises, Mangues...'
        />
    `,
    context: {
      ...args,
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
  };
};

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
    defaultValue: () => { },
  },
  selectedOption: {
    name: 'selectedOption',
    description: 'Option sélectionnée',
    type: { name: 'string', required: false },
  },
  emptyOptionLabel: {
    name: 'emptyOptionLabel',
    description: 'Texte à afficher si aucune option n‘est sélectionnée',
    type: { name: 'string', required: false },
  },
  isSearchable: {
    name: 'isSearchable',
    description: 'Rend le champ cherchable',
    type: { name: 'boolean', required: false },
  },
  isValidationActive: {
    name: 'isValidationActive',
    description:
      'Rend la bordure du champ vert au focus si la valeur de recherche match une option (c\'est à dire si l\'utilisateur a selectionné une option valable',
    type: { name: "boolean", required: false },
  },
};
