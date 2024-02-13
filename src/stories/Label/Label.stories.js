import Label from './Label.vue';

export default {
  component: Label,
};
export const Primary = {
  render: (args) => ({
    components: { Label },
    setup() {
      return { args };
    },
    template: '<Label v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Label',
  },
};
