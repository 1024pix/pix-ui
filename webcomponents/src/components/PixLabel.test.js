import './PixLabel.ce.js';

import { screen } from '@testing-library/dom';
import { html, render } from 'lit';
import { expect, test } from 'vitest';

test('it renders PixLabel with for and content', async () => {
  // given
  const label = html`<pix-label for="linkableElement">Bonjour Pix !</pix-label
    ><input id="linkableElement" />`;

  // when
  await render(label, document.body);
  const result = await screen.findByLabelText('Bonjour Pix !');

  // then
  expect(result).toBeInTheDocument();
});

test('it renders PixLabel with additional information', async () => {
  // given
  const label = html`<pix-label for="linkableElement" required-label="this field is required"
      >Bonjour Pix !</pix-label
    ><input id="linkableElement" />`;

  // when
  await render(label, document.body);

  // then
  expect(await screen.findByLabelText('Bonjour Pix !*')).toBeInTheDocument();
});

test('it is still accessible when hidden label', async () => {
  // given
  const label = html`<pix-label for="linkableElement" screen-reader-only="true"
      >Bonjour Pix !</pix-label
    ><input id="linkableElement" />`;

  // when
  await render(label, document.body);

  // then
  expect(await screen.findByLabelText('Bonjour Pix !')).toBeInTheDocument();
});
