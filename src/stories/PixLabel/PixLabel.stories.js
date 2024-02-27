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
    subLabel: 'toto',
    screenReaderOnly: false,
    labelSize: 'default',
    inlineLabel: false,
  },
  argTypes: {
    labelSize: {
      control: {
        type: 'select',
      },
      options: ['small', 'large', 'default'],
    },
  },
};
