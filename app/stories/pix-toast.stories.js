import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Notification/Toast',
  argTypes: {
    toast: {
      name: 'toast',
      description: 'Un objet notification qui contient un type, un message et un ariaLabel',
      type: { name: 'object', required: true },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixToastExample />`,
    context: args,
  };
};

export const Default = Template.bind({});
