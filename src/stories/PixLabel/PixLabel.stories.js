import '../../index.js'

export default {
  component: 'pix-label',
};
export const Primary = {
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
