import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Basics/Tag',
  render: (args) => ({
    template: hbs`<PixTag @color={{this.color}} @compact={{this.compact}}>
  Contenu du tag
</PixTag>`,
    context: args,
  }),
  argTypes: {
    color: {
      name: 'color',
      description: 'Couleur du tag',
      type: { name: 'number', required: false },
      table: { defaultValue: { summary: 'blue' } },
      control: {
        type: 'select',
      },
      options: [
        'blue',
        'blue-light',
        'green',
        'green-light',
        'grey',
        'grey-light',
        'purple',
        'purple-light',
        'orange',
        'orange-light',
        'yellow',
        'yellow-light',
      ],
    },
    compact: {
      name: 'compact',
      description: 'Tag compact ou non',
      type: { name: 'boolean', required: false },
      table: { defaultValue: { summary: false } },
    },
  },
};

export const tag = {};

export const compactTag = {
  args: {
    compact: true,
  },
};
