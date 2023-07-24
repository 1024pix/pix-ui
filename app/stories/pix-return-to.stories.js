import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Basics/Return To',
  render: (args) => ({
    template: hbs`<PixReturnTo @route='profile' @shade={{this.shade}}>{{this.content}}</PixReturnTo>`,
    context: args,
  }),
  argTypes: {
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
  },
};

export const returnTo = {
  args: {
    shade: 'blue',
  },
};

export const returnToWithText = {
  args: {
    content: 'Retour vers mon profil',
  },
};
