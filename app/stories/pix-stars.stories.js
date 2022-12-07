import { hbs } from 'ember-cli-htmlbars';

export const stars = (args) => {
  return {
    template: hbs`<PixStars @count={{this.count}} @total={{this.total}} @alt={{this.alt}} @color={{this.color}} />`,
    context: args,
  };
};

export const argTypes = {
  count: {
    name: 'count',
    description: 'Nombre total d’étoiles actives',
    type: { name: 'number', required: false },
    defaultValue: 2,
  },
  total: {
    name: 'total',
    description: 'Nombre total d’étoiles',
    type: { name: 'number', required: false },
    defaultValue: 5,
  },
  alt: {
    name: 'alt',
    description: 'Message alternatif pour les étoiles',
    type: { name: 'string', required: true },
    defaultValue: 'Message',
  },
  color: {
    name: 'color',
    description: 'Couleur des étoiles',
    type: { name: 'string', required: false },
    defaultValue: 'yellow',
    control: { type: 'select', options: ['yellow', 'blue', 'grey'] },
  },
};
