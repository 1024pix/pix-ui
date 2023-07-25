import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Layout/Block',
  argTypes: {
    shadow: {
      name: 'shadow',
      description: 'Ombre sur le bloc',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'light' } },
      control: { type: 'select' },
      options: ['light', 'heavy'],
    },
  },
};

export const block = (args) => ({
  template: hbs`<PixBlock @shadow={{this.shadow}}>
  Lorem ipsum
</PixBlock>`,
  context: args,
});
