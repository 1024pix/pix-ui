import './PixTag.ce.js';
import { expect, within } from 'storybook/test';

import { html } from 'lit';

export default {
  title: 'Example/Tag',
  component: 'pix-tag',
  tags: ['autodocs'],
}

export const TextContent = {
  render: () => html`
    <pix-tag>
      tag text
    </pix-tag>
  `,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('tag text')).toBeInTheDocument();
  }
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
  play: async ({ canvasElement }) => {
    const elementShadowRoot = canvasElement.querySelector('pix-tag').shadowRoot;
    await expect(elementShadowRoot.lastChild).toHaveClass('pix-tag--primary');
  }
}
