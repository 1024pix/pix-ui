import { within } from '@testing-library/dom';
import { render, html } from 'lit';
import { test, expect } from 'vitest';
import './PixLabel.ce.js';
import { screen } from "shadow-dom-testing-library";


test('it renders PixLabel with for and content', async () => {
  // given
  const label = html`<pix-label for="linkableElement">Bonjour Pix !</pix-label><input id='linkableElement' />`;

  // when
  await render(label, document.body);
  // const rootElement = document.querySelector('pix-label').shadowRoot;
  // console.dir(rootElement._vnode.el);
  screen.debug();
  console.dir('AAAAAAAA');
  const result = await screen.findByShadowLabelText('Bonjour Pix !');
  console.dir(result);

  // then
  expect(result).toBeInTheDocument();
});


