import { hbs } from 'ember-cli-htmlbars';

export const returnTo = () => {
  return {
    template: hbs`
      <PixReturnTo @route='profile' @shade='blue' />
    `,
  };
};

export const returnToWithLink = (args) => {
  return {
    template: hbs`
      <PixReturnTo @route='profile' @shade={{shade}}>
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
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  model: {
    name: 'model',
    description: 'Model Ember',
    type: { required: false },
  },
  shade: {
    name: 'shade',
    description: 'Couleur du lien',
    type: { name: 'string', required: false },
    defaultValue: 'black',
    control: { type: 'select', options: ['white', 'black', 'blue'] },
  },
};
