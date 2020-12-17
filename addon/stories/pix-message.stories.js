import { hbs } from 'ember-cli-htmlbars';

export const stars = (args) => {
  return {
    template: hbs`
      <PixMessage
        @type={{type}}
      >Ceci est un message</PixMessage>
    `,
    context: args,
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
}
