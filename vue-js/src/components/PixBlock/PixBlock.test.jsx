import PixBlock from './PixBlock.vue';

import { cleanup, screen } from '@testing-library/vue';
import { render } from '@test/test-utils.jsx';
import { afterEach, describe, expect, test, vi } from 'vitest';

describe('Integration | Component | pix-block', function () {
  afterEach(() => {
    cleanup();
  });

  test('it renders the PixBlock with the correct variant', async () => {
    // given
    render(<PixBlock variant='certif' condensed={false}>
      Je suis un beau bloc
    </PixBlock>);

    // then
    const text = screen.getByText('Je suis un beau bloc');

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('pix-block pix-block--certif');
  });

  test('it should warn when variant is incorrect', async () => {
      // given
      const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(<PixBlock variant='PIX PATATE'>
        Coucou
      </PixBlock>);

      // then
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });

  test('it renders the condensed and the primary PixBlock', async () => {
    render(<PixBlock condensed={true}>
      Je suis un beau bloc
    </PixBlock>);

    // then
    const text = screen.getByText('Je suis un beau bloc');

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('pix-block pix-block--primary pix-block--condensed');
  });
});
