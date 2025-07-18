import PixTag from './PixTag.vue';

import { screen } from '@testing-library/vue';
import { render } from '@test/test-utils.jsx';
import { expect, test } from 'vitest';

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
