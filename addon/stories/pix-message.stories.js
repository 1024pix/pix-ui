import { hbs } from 'ember-cli-htmlbars';

export const messageInfo = (args) => {
  return {
    template: hbs`
      <PixMessage @type={{type}} @withIcon="true">
        Ceci est un message {{type}}
      </PixMessage>
    `,
    context: args
  };
};

export const messageAlert = () => {
  return {
    template: hbs`
      <PixMessage @type='alert'>
        Ceci est un message d'alert
      </PixMessage>
    `,
  };
};

export const messageSuccess = () => {
  return {
    template: hbs`
      <PixMessage @type='success'>
        Ceci est un message de succès
      </PixMessage>
    `,
  };
};

export const messageWarning = () => {
  return {
    template: hbs`
      <PixMessage @type='warning'>
        Ceci est un message de warning
      </PixMessage>
    `,
  };
};

export const argTypes = {
  type: {
    name: 'type',
    description: 'Type du message',
    type: { name: 'string', required: false },
    defaultValue: 'info',
    control: { type: 'select', options: ['info', 'success', 'warning', 'alert'] },
  },
  withIcon: {
    name: 'withIcon',
    description: 'Icone du message',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: { type: 'boolean' },
  },
}
