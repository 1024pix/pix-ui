import { within, screen } from '@testing-library/dom';
import { render, html } from 'lit';
import { test, expect } from 'vitest';
import './PixTag.ce.js';

test('renders the component', async () => {
  // given
  const tag = html`<pix-tag aria-label="patate">patate</pix-tag>`;

  // when
  await render(tag, document.body);
  const rootElement = document.querySelector('pix-tag').shadowRoot

  // then
  expect(within(rootElement).getByLabelText('patate')).toBeInTheDocument();
});
