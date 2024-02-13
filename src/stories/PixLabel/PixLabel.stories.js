import PixLabel from '@/components/PixLabel/PixLabel.vue';

export default {
  component: PixLabel,
};
export const Primary = {
  render: (args) => ({
    components: { PixLabel },
    setup() {
      return { args };
    },
    template: '<pixLabel v-bind="args" />',
  }),
  args: {
    label: 'PixLabel',
    requiredLabel: true,
    subLabel: 'toto'
  },
};
