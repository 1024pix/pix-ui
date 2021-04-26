import { hbs } from 'ember-cli-htmlbars';

export const collapsible = (args) => {
  return {
    template: hbs`
      <PixCollapsible>
        TODO
      </PixCollapsible>
    `,
    context: args,
  };
};

// TODO: add component attributes information
// select attribute data type from https://storybook.js.org/docs/react/essentials/controls
export const argTypes = {
  attributeName: {
    name: 'attribute name',
    description: 'attribute description',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
};
