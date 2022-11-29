import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
        <PixToggle />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {};
