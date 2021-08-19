import { hbs } from 'ember-cli-htmlbars';

export const input = (args) => {
  return {
    template: hbs`
      <PixInput @id={{id}} @label={{label}} placeholder='Jeanne, Pierre ...' />
    `,
    context: args,
  };
};
input.args = {
  id: 'firstName',
  label: 'Prénom',
}

export const argTypes = {
  id: {
    name: 'id',
    description: 'Identifiant du champ permettant de lui attacher un label',
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  label: {
    name: 'label',
    description: 'Le label de l\'input',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
};
