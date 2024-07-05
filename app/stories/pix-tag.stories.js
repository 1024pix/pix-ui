import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Basics/Tag',
  render: (args) => ({
    template: hbs`<PixTag @color={{this.color}}>
  Contenu du tag
</PixTag>`,
    context: args,
  }),
  argTypes: {
    color: {
      name: 'color',
      description: 'Couleur du tag',
      type: { name: 'number', required: false },
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'select',
      },
      options: ['neutral', 'secondary', 'tertiary', 'success', 'error', 'orga'],
    },
  },
};

export const tag = {};
