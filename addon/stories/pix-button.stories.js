import { hbs } from 'ember-cli-htmlbars';

export const button = (args) => {
  return {
    template: hbs`
      <PixButton
        @triggerAction={{action triggerAction}}
        @loading-color={{loadingColor}}
        @type={{type}}>
        Nom du bouton
      </PixButton>
    `,
    context: {
      ...args,
    },
  };
};

export const argTypes = {
  triggerAction: {
    name: 'action',
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
    name: 'couleur de chargement',
    description: '',
    type: { name: 'string', required: false },
    defaultValue: 'Message',
    control: { type: 'select', options: ['yellow', 'blue', 'grey'] },
  },
  type: {
    name: 'type',
    description: 'type du bouton',
    type: { required: false },
    defaultValue: 'button',
    control: { type: 'select', options: ['button', 'submit'] },
  },
};
