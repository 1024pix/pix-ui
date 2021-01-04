import { hbs } from 'ember-cli-htmlbars';

export const defaultBlock = () => {
  return {
    template: hbs`
      <PixBlock>
        Lorem ipsum
      </PixBlock>
    `,
  };
};

export const customizableblock = (args) => {
  return {
    template: hbs`
      <PixBlock @shadow={{shadow}}>
        Lorem ipsum
      </PixBlock>
    `,
    context: args,
  };
};


export const argTypes = {
  shadow: {
    name: 'shadow',
    description: 'Ombre sur le bloc',
    type: { name: 'string', required: false },
    defaultValue: 'light',
    control: { type: 'select', options: ['light', 'heavy'] },
  },
};
