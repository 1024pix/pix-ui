import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Feedback/Notification Alert',
  render: (args) => ({
    template: hbs`<PixNotificationAlert @type={{this.type}} @withIcon={{this.withIcon}}>
  Ceci est un message
  {{this.type}}
  avec un texte tellement long qu'il est nécessaire
  <br />
  de l'afficher sur deux lignes.
</PixNotificationAlert>`,
    context: args,
  }),
  argTypes: {
    type: {
      name: 'type',
      description: 'Type du message',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'info' } },
      control: { type: 'select' },
      options: [
        'info',
        'success',
        'warning',
        'error',
        'communication',
        'communication-certif',
        'communication-orga',
      ],
    },
    withIcon: {
      name: 'withIcon',
      description: 'Icône du message',
      table: { defaultValue: { summary: false } },
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
    },
  },
};

export const Default = {};

export const error = {
  args: {
    type: 'error',
    withIcon: true,
  },
};

export const warning = {
  args: {
    type: 'warning',
    withIcon: true,
  },
};

export const success = {
  args: {
    type: 'success',
    withIcon: true,
  },
};

export const communicationPixApp = {
  args: {
    type: 'communication',
    withIcon: true,
  },
};

export const communicationPixCertif = {
  args: {
    type: 'communication-certif',
    withIcon: true,
  },
};

export const communicationPixOrga = {
  args: {
    type: 'communication-orga',
    withIcon: true,
  },
};

export const withIcon = {
  args: {
    withIcon: true,
  },
};
