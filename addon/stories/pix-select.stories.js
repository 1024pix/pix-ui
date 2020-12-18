import { hbs } from 'ember-cli-htmlbars';

export const select = (args) => {
  return {
    template: hbs`
      <PixSelect
        @options={{options}}
        @onChange={{onChange}}
        @selectedOption={{selectedOption}}
        @emptyOptionLabel={{emptyOptionLabel}}
      />
    `,
    context: args,
  };
};

export const argTypes = {
  options: {
    name: 'options',
    description: 'Listes des options du select',
    type: { name: 'array', required: true },
    defaultValue: [
      { value: '1', label: 'Tomate' },
      { value: '2', label: 'Fromage' },
      { value: '3', label: 'Gruyère' },
      { value: '4', label: 'Olive' },
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
    description: 'Texte à afficher si aucune option n‘est sélectionnée ',
    type: { name: 'string', required: false },
  }
}
