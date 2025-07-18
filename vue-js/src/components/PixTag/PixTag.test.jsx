import PixTag from './PixTag.vue';

import { cleanup, screen } from '@testing-library/vue';
import { render } from '@test/test-utils.jsx';
import { afterEach, describe, expect, test } from 'vitest';

describe('Integration | Component | pix-tag', () => {
  afterEach(() => cleanup())

  test('renders the component', async () => {
    // given
    render(<PixTag aria-label="patate">patate</PixTag>);

    // then
    expect(screen.getByLabelText('patate')).toBeInTheDocument();
  });

  test('it renders with the given color class', async () => {
    // given
    render(<PixTag color= "purple">patate</PixTag>);

    // then
    expect(screen.getByText('patate')).toHaveClass('pix-tag--purple');
  });
});
