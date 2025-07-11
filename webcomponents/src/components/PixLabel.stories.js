import './PixLabel.ce.js';
import { expect, within } from 'storybook/test';

import { html } from 'lit';

export default {
  title: 'Example/Label',
  component: 'pix-label',
  tags: ['autodocs'],
  argTypes: { },
}

export const For = {
  args: {
    forAttr: 'linkableElement',
  },
  render: ({ forAttr }) => html`
    <pix-label for="${forAttr}">
      Bonjour Pix !
      <input id='linkableElement' />
    </pix-label>
  `,
}
