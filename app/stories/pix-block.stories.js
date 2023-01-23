import { hbs } from 'ember-cli-htmlbars';

export const block = (args) => ({
  template: hbs`<PixBlock @shadow={{this.shadow}}>
  Lorem ipsum
</PixBlock>`,
  context: args,
});

export const argTypes = {
  shadow: {
    name: 'shadow',
    description: 'Ombre sur le bloc',
    type: { name: 'string', required: false },
    defaultValue: 'light',
    control: { type: 'select' },
    options: ['light', 'heavy'],
  },
};
