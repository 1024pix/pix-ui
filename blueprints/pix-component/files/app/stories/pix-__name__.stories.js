import { hbs } from 'ember-cli-htmlbars';

export default {
  title: '<%= classifiedModuleName %>',
  // TODO: add component attributes information
  // select attribute data type from https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    attributeName: {
      name: 'attribute name',
      description: 'attribute description',
      type: { name: 'string', required: false },
    },
  }
}

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
