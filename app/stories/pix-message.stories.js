import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`<PixMessage @type={{type}} @withIcon={{withIcon}}>
  Ceci est un message
  {{type}}
  avec un texte tellement long qu'il est nécessaire
  <br />
  de l'afficher sur deux lignes.
</PixMessage>`,
    context: args,
  };
};

export const Default = Template.bind({});

export const error = Template.bind({});
error.args = {
  type: 'error',
  withIcon: true,
};

export const warning = Template.bind({});
warning.args = {
  type: 'warning',
  withIcon: true,
};

export const success = Template.bind({});
success.args = {
  type: 'success',
  withIcon: true,
};

export const withIcon = Template.bind({});
withIcon.args = {
  withIcon: true,
};

export const argTypes = {
  type: {
    name: 'type',
    description: 'Type du message',
    type: { name: 'string', required: false },
    defaultValue: 'info',
    control: { type: 'select', options: ['info', 'success', 'warning', 'alert', 'error'] },
  },
  withIcon: {
    name: 'withIcon',
    description: 'Icône du message',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: { type: 'boolean' },
  },
};
