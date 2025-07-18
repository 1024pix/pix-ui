/** @jsxImportSource vue */
import { render } from '@test/test-utils';
import { screen } from '@testing-library/vue';
import { expect, test } from 'vitest';

import PixLabel from './PixLabel.vue';

test('it renders PixLabel with for and content', async () => {
  // given
  render(
    <>
      <PixLabel for="linkableElement">Bonjour Pix !</PixLabel>
      <input id="linkableElement" />
    </>
  );

  // when
  const result = await screen.findByLabelText('Bonjour Pix !');

  // then
  expect(result).toBeInTheDocument();
});

test('it renders PixLabel with additional information', async () => {
  // given //when
  render(
    <>
      <PixLabel for="linkableElement" requiredLabel="this field is required">Bonjour Pix !</PixLabel>
      <input id="linkableElement" />
    </>
  );

  // then
  expect(await screen.findByLabelText('Bonjour Pix !*')).toBeInTheDocument();
});

test('it is still accessible when hidden label', async () => {
  // given // when
  render(
    <>
      <PixLabel for="linkableElement" screenReaderOnly>Bonjour Pix !</PixLabel>
      <input id="linkableElement" />
    </>
  );

  // then
  expect(await screen.findByLabelText('Bonjour Pix !')).toBeInTheDocument();
});
