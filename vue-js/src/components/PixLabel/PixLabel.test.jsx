/** @jsxImportSource vue */
import { render } from '@test/test-utils';
import { cleanup, screen } from '@testing-library/vue';
import { afterEach, describe, expect, test } from 'vitest';

import PixLabel from './PixLabel.vue';

describe('Integration | Component | pix-label', () => {
  afterEach(() => cleanup());

  test('it renders PixLabel with for and content', async () => {
    // given
    render(
      <>
        <PixLabel for="linkableElement">Bonjour Pix !</PixLabel>
        <input id="linkableElement" />
      </>
    );

    // when
    const result = screen.getByLabelText('Bonjour Pix !');

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
    expect(screen.getByLabelText('Bonjour Pix !*')).toBeInTheDocument();
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
    expect(screen.getByLabelText('Bonjour Pix !')).toBeInTheDocument();
  });
})
