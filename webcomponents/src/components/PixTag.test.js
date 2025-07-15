import './PixTag.ce.js';

import { within } from '@testing-library/dom';
import { html, render } from 'lit';
import { expect, test } from 'vitest';

test('renders the component', async () => {
  // given
  const tag = html`<pix-tag aria-label="patate">patate</pix-tag>`;

  // when
  await render(tag, document.body);
  const rootElement = document.querySelector('pix-tag');

  // then
  expect(within(rootElement).getByLabelText('patate')).toBeInTheDocument();
});

test('it renders with the given color class', async () => {
  // given
  const tag = html`<pix-tag color="purple">patate</pix-tag>`;

  // when
  await render(tag, document.body);
  const rootElement = document.querySelector('pix-tag');

  // then
  expect(rootElement.lastChild).toHaveClass('pix-tag--purple');
});
