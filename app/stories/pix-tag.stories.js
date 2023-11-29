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
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'select',
      },
      options: ['neutral', 'secondary', 'tertiary', 'success', 'error', 'orga'],
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
