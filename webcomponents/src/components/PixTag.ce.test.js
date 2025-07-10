import { screen } from '@testing-library/dom';
import { render, html } from 'lit';
import { test, expect } from 'vitest';

test('renders the component', async () => {
  // given
  const tag = html`<pix-tag>patate</pix-tag>`;

  // when
  await render(tag, document.body);

  // then
  expect(screen.getByText('patate')).toBeInTheDocument();
});
