import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Design System/Atoms/PixStars',
  argTypes: {
    count: {
      name: 'count',
      description: 'Nombre total d’étoiles actives',
      type: { name: 'number', required: false },
    },
    total: {
      name: 'total',
      description: 'Nombre total d’étoiles',
      type: { name: 'number', required: false },
    },
    alt: {
      name: 'alt',
      description: 'Message alternatif pour les étoiles',
      type: { name: 'string', required: true },
    },
    color: {
      name: 'color',
      description: 'Couleur des étoiles',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: undefined } },
      control: { type: 'radio' },
      options: [undefined, 'blue', 'grey'],
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixStars @count={{this.count}} @total={{this.total}} @alt={{this.alt}} @color={{this.color}} />`,
    context: args,
  };
};

export const stars = Template.bind({});
stars.args = {
  count: 2,
  total: 5,
  alt: 'message alternatif',
  color: undefined,
};
