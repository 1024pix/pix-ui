import './PixTag.ce.js';
import { expect, within } from 'storybook/test';

import { html } from 'lit';

export default {
  title: 'Example/Tag',
  component: 'pix-tag',
  tags: ['autodocs'],
  argTypes: {
    color: {
      name: 'color',
      description: 'Couleur du tag',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'select',
      },
      options: [
        'blue',
        'blue-light',
        'dark',
        'error',
        'green',
        'grey',
        'neutral',
        'primary',
        'purple',
        'secondary',
        'success',
        'tertiary',
        'white',
        'yellow',
      ],
    },
  },
}

export const Primary = {
  args: {
    color: 'primary',
  },
  render: ({ color }) => html`
    <pix-tag color="${color}">
      tag text
    </pix-tag>
  `,
}
