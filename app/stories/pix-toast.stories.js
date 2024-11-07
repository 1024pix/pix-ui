import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Notification/Toast',
  argTypes: {
    toast: {
      name: 'toast',
      description: 'Un objet notification qui contient un type et un message',
      type: { name: 'object', required: true },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<ToastExample />`,
    context: args,
  };
};

export const Default = Template.bind({});
