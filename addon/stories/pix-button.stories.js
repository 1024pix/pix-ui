import { hbs } from 'ember-cli-htmlbars';

export const whiteButton = (args) => {
  return {
    template: hbs`
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color={{loadingColor}}
          @type={{type}}>
        Nom du bouton
      </PixButton>
    `,
    context: args,
  };
};

export const greyButton = (args) => {
  return {
    template: hbs`
      <PixButton
          @triggerAction={{action triggerAction}}
          @loading-color='grey'
          @type={{type}}>
        Nom du bouton
      </PixButton>
    `,
    context: args,
  };
};

export const argsTypes = {
  triggerAction: {
    name: 'triggerAction',
    description: 'fonction à appeler en cas de clic',
    type: { required: true },
    defaultValue: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('OK !')
          resolve();
        }, 2000);
      })
    },
  },
  loadingColor: {
    name: 'loadingColor',
    description: 'couleur de chargement',
    type: { name: 'string', required: false },
    defaultValue: 'white',
    control: { type: 'select', options: ['white', 'grey'] },
  },
  type: {
    name: 'type',
    description: 'type du bouton',
    type: { required: false },
    defaultValue: 'button',
    control: { type: 'select', options: ['button', 'submit'] },
  },
};
