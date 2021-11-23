import { hbs } from 'ember-cli-htmlbars';

export const textarea = (args) => {
  return {
    template: hbs`
      <PixTextarea 
        @id={{id}}
        @value={{value}}
        @maxlength={{maxlength}}
        @label={{label}}
        @errorMessage={{errorMessage}}
      />
    `,
    context: args,
  };
};

export const argTypes = {
  id: {
    name: 'id',
    description: 'Identifiant du champ permettant de lui attacher un label',
    type: { name: 'string', required: true },
    defaultValue: '',
  },

  value: {
    name: 'value',
    description: 'Valeur du champ',
    type: { name: 'string', required: true },
    defaultValue: '',
  },

  maxlength: {
    name: 'maxlength',
    description: 'Nombre de caractères maximal à taper dans le champ',
    type: { name: 'number', required: false },
    defaultValue: 500,
  },

  label: {
    name: 'label',
    description: 'Donne un label au champ.',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    },
  },

  errorMessage: {
    name: 'errorMessage',
    description: 'Affiche une erreur en dessous du champ.',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null },
    },
  },
};
