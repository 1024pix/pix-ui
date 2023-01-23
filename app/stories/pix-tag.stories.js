import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`<PixTag @color={{this.color}} @compact={{this.compact}}>
  Contenu du tag
</PixTag>`,
    context: args,
  };
};

export const tag = Template.bind({});
tag.args = {};

export const compactTag = Template.bind({});
compactTag.args = {
  compact: true,
};

export const argTypes = {
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
};
