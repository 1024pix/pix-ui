import { hbs } from 'ember-cli-htmlbars';

export const returnTo = (args) => {
  return {
    template: hbs`
      <PixReturnTo @route='profile' @shade='blue'>
        Retour vers mon profil
      </PixReturnTo>
    `,
    context: args,
  };
};

export const argTypes = {
  route: {
    name: 'route',
    description: 'Route de redirection',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  model: {
    name: 'model',
    description: 'Model Ember',
    type: { required: true },
  },
  shade: {
    name: 'shade',
    description: 'Couleur du lien',
    type: { name: 'string', required: true },
    defaultValue: 'black',
    control: { type: 'select', options: ['white', 'black', 'blue'] },
  },
};
