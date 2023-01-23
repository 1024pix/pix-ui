import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <Pix<%= classifiedModuleName %>
        <!-- TODO -->
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  // TODO
};

// TODO: add component attributes information
// select attribute data type from https://storybook.js.org/docs/react/essentials/controls
export const argTypes = {
  attributeName: {
    name: 'attribute name',
    description: 'attribute description',
    type: { name: 'string', required: false },
  },
};
