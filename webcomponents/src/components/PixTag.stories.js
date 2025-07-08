import PixTag from './PixTag.ce.vue';
import { expect, within } from 'storybook/test';

export default {
  title: 'Example/Tag',
  component: PixTag,
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      PixTag,
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<pix-tag />',
  }),
}

export const TextContent = {
  render: () => ({
    components: {
      PixTag,
    },
    template: '<PixTag>tag text</PixTag>',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('tag text')).toBeInTheDocument();
  }
}

export const Primary = {
  render: () => ({
    components: {
      PixTag,
    },
    template: '<PixTag color="primary" aria-label="frite">tag text</PixTag>',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByLabelText('frite')).toHaveClass('pix-tag--primary');
  }
}
