import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixPagination
        @pagination={{pagination}}
        @locale = {{locale}}
            />
    `,
    context: args,
  };
};

export const French = Template.bind({});
French.args = {
  pagination: {
    page: 1,
    pageSize: 10,
    rowCount: 12,
    pageCount: 2,
  },
  locale: 'fr',
};

export const English = Template.bind({});
English.args = {
  pagination: {
    page: 2,
    pageSize: 10,
    rowCount: 12,
    pageCount: 2,
  },
  locale: 'en',
};

export const OnePage = Template.bind({});
OnePage.args = {
  pagination: {
    page: 1,
    pageSize: 10,
    rowCount: 2,
    pageCount: 1,
  },
  locale: 'fr',
};

// select attribute data type from https://storybook.js.org/docs/react/essentials/controls
export const argTypes = {
  pagination: {
    name: 'pagination',
    description: 'object including pagination informations',
    type: { name: 'object', required: false },
  },
  locale: {
    name: 'locale',
    description: 'Selected locale',
    type: { name: 'string', required: false },
  },
};
