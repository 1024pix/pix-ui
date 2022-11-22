import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`
      <PixFilterableAndSearchableSelect />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {};
