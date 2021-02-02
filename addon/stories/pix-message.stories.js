import { hbs } from 'ember-cli-htmlbars';

export const message = (args) => {
  return {
    template: hbs`
      <PixMessage @type={{type}} @withIcon={{withIcon}}>
        Ceci est un message {{type}}
      </PixMessage>
      <PixMessage @type={{type}} @withIcon={{true}}>
        Ceci est un message avec une icone et un texte tellement long<br />
        qu'il est nécessaire de l'afficher sur deux lignes.
      </PixMessage>
    `,
    context: args
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
