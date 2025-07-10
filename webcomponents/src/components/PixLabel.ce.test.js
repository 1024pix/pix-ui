import { within, screen } from '@testing-library/dom';
import { render, html } from 'lit';
import { test, expect } from 'vitest';
import './PixLabel.ce.js';

test('it renders PixLabel with for and content', async () => {
  // given
  const label = html`<pix-label for="linkableElement">Bonjour Pix !</pix-label><input id='linkableElement' />`;

  // when
  await render(label, document.body);
  const rootElement = document.querySelector('pix-label').shadowRoot


  // then
  expect(within(rootElement).getByLabelText('Bonjour Pix !')).toBeInTheDocument();
});


