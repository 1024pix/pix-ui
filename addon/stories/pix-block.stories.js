import { hbs } from 'ember-cli-htmlbars';

export const stars = (args) => {
  return {
    template: hbs`
      <PixBlock @shadow={{shadow}}>
        // TODO: Add block content
      </PixBlock>
    `,
    context: args,
  };
};


export const argTypes = {
  shadow: {
    name: 'shadow',
    description: 'Nombre total d’étoiles actives',
    type: { name: 'string', required: false },
    defaultValue: 'light',
    control: { type: 'select', options: ['light', 'heavy'] },
  },
};
