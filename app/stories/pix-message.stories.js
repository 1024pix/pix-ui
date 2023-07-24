import { hbs } from 'ember-cli-htmlbars';

export default {
  component: 'PixMessage',
};

const Template = (args) => {
  return {
    template: hbs`<PixMessage @type={{this.type}} @withIcon={{this.withIcon}}>
  Ceci est un message
  {{this.type}}
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
    table: { defaultValue: { summary: 'info' } },
    control: { type: 'select' },
    options: ['info', 'success', 'warning', 'alert', 'error'],
  },
  withIcon: {
    name: 'withIcon',
    description: 'Icône du message',
    table: { defaultValue: { summary: false } },
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
  },
};
