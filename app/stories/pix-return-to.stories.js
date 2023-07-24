import { hbs } from 'ember-cli-htmlbars';

export default {
  component: 'PixReturnTo',
};

export const returnTo = (args) => {
  return {
    template: hbs`<PixReturnTo @route='profile' @shade={{this.shade}} />`,
    context: args,
  };
};
returnTo.args = {
  shade: 'blue',
};

export const returnToWithText = (args) => {
  return {
    template: hbs`<PixReturnTo @route='profile' @shade={{this.shade}}>
  Retour vers mon profil
</PixReturnTo>`,
    context: args,
  };
};

export const argTypes = {
  route: {
    name: 'route',
    description: 'Route de redirection',
    type: { name: 'string', required: true },
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
    table: { defaultValue: { summary: 'black' } },
    control: { type: 'select' },
    options: ['white', 'black', 'blue'],
  },
};
