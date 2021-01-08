import { hbs } from 'ember-cli-htmlbars';

export const textarea = (args) => {
  return {
    template: hbs`
      <PixTextarea 
        @id={{id}}
        @value={{value}}
        @maxlength={{maxlength}}
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
};
