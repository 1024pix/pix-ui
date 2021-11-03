import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

const Template = args => ({
    template: hbs`
      <PixSelect
        @id={{id}}
        @options={{options}}
        @onChange={{onChange}}
        @selectedOption={{selectedOption}}
        @emptyOptionLabel={{emptyOptionLabel}}
        @emptyOptionNotSelectable={{emptyOptionNotSelectable}}
        @isSearchable={{isSearchable}}
        @isValidationActive={{isValidationActive}}
        @label={{label}}
      />
    `,
    context: args,
});

export const Default = Template.bind({});
Default.args = {
  options: [
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
    { value: '12', label: 'Asiminier trilobé oblong vert (à ne pas confondre avec la papaye)' },
  ],
  onChange: action('onChange'),
}

export const withLabel = Template.bind({});
withLabel.args = {
  ...Default.args,
  id: 'pix-select-with-label',
  label: 'Ton fruit préféré: ',
}

export const searchableSelect = Template.bind({});
searchableSelect.args = {
  ...Default.args,
  emptyOptionNotSelectable: false,
  isSearchable: true,
  isValidationActive: true,
  placeholder: 'Fraises, Mangues...',
}

export const argTypes = {
  options: {
    name: 'options',
    description: 'Les options sont représentées par un tableau d‘objet contenant les propriétés ``value`` et ``label``. ``value`` doit être de type ``String`` pour être que le champ puisse être cherchable',
    type: { name: 'object', required: true },
  },
  onChange: {
    name: 'onChange',
    description: 'Fonction à appeler si une option est sélectionnée',
    type: { required: true },
    control: { disable: true },
  },
  selectedOption: {
    name: 'selectedOption',
    description: 'Option sélectionnée',
    options: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    control: { type: 'select' },
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    }
  },
  emptyOptionLabel: {
    name: 'emptyOptionLabel',
    description: 'Texte à afficher si aucune option n‘est sélectionnée',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    }
  },
  isSearchable: {
    name: 'isSearchable',
    description: 'Rend le champ cherchable',
    control: { type: 'boolean' },
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    }
  },
  isValidationActive: {
    name: 'isValidationActive',
    description:
      'Rend la bordure du champ vert au focus si la valeur de recherche match une option (c\'est à dire si l\'utilisateur a selectionné une option valable',
    control: { type: 'boolean' },
    type: { name: "boolean", required: false },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    }
  },
  emptyOptionNotSelectable: {
    name: 'emptyOptionNotSelectable',
    description: 'Rend le premier champ qui est vide non visible une fois sélectionné',
    control: { type: 'boolean' },
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    }
  },
  size: {
    name: 'size',
    description: '⚠️ **Propriété dépréciée** ⚠️ , désormais tous les éléments de formulaires feront 36px de hauteur.',
    options: ['big', 'small'],
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'small' },
    }
  },
  label: {
    name: 'label',
    description: 'Donne un label au champ, le paramètre @id devient obligatoire avec ce paramètre.',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    }
  }
};
