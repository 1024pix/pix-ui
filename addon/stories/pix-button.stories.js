import { hbs } from 'ember-cli-htmlbars';

export const loadingButtons = (args) => {
  return {
    template: hbs`
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='white'
          @type={{type}}>
        Bouton avec loader blanc
      </PixButton>
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='grey'
          @type={{type}}>
        Bouton avec loader gris
      </PixButton>
    `,
    context: args,
  };
};

export const argsTypes = {
  type: {
    name: 'type',
    description: 'fonction à appeler en cas de clic',
    type: { required: false },
    control: { disable: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'button' },
    }
  },
  triggerAction: {
    name: 'triggerAction',
    description: 'fonction à appeler en cas de clic',
    type: { required: true },
    defaultValue: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      })
    },
    control: { disable: true },
  },
  loadingColor: {
    name: 'loadingColor',
    description: 'couleur de chargement: `white`, `grey`',
    type: { name: 'string', required: false },
    control: { disable: true },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'white' },
    }
  },
};
