import './PixToggleButton.js';

import { html, nothing, render } from 'lit';
import { screen } from 'shadow-dom-testing-library';
import { userEvent } from 'storybook/test';
import { expect, test, vi } from 'vitest';

const label = 'Mon bouton toggle';
const viewALabel = 'Oui';
const viewBLabel = 'Non';

test('renders PixToggleButton', async () => {
  // given // when
  render(
    html`<pix-toggle-button>
      <span slot="label">${label}</span>
      <span slot="viewA">${viewALabel}</span>
      <span slot="viewB">${viewBLabel}</span>
    </pix-toggle-button>`,
    document.body,
  );

  // then
  expect(screen.getByText('Mon bouton toggle')).toBeInTheDocument();
  expect(screen.getByText('Oui')).toBeInTheDocument();
  expect(screen.getByText('Non')).toBeInTheDocument();
});

test('PixToggleButton is pressed', async () => {
  // given
  render(
    html`<pix-toggle-button toggled=${true}>
      <span slot="label">${label}</span>
      <span slot="viewA">${viewALabel}</span>
      <span slot="viewB">${viewBLabel}</span>
    </pix-toggle-button>`,
    document.body,
  );

  // then
  expect(screen.getByShadowRole('button', { pressed: true })).toBeInTheDocument();
});

test('PixToggleButton is not pressed', async () => {
  // given
  render(
    html`<pix-toggle-button toggled=${nothing}>
      <span slot="label">${label}</span>
      <span slot="viewA">${viewALabel}</span>
      <span slot="viewB">${viewBLabel}</span>
    </pix-toggle-button>`,
    document.body,
  );

  // then
  expect(screen.getByShadowRole('button', { pressed: false })).toBeInTheDocument();
});

test('it calls onChange with value true when PixToggleButton is not pressed', async () => {
  // given
  const onChangeSpy = vi.fn();
  const onChange = (e) => {
    onChangeSpy(e.detail[0]);
  };
  render(
    html`<pix-toggle-button toggled=${nothing} @change=${onChange}>
      <span slot="label">${label}</span>
      <span slot="viewA">${viewALabel}</span>
      <span slot="viewB">${viewBLabel}</span>
    </pix-toggle-button>`,
    document.body,
  );

  // when
  await userEvent.click(screen.getByShadowRole('button'));

  // then
  expect(onChangeSpy).toHaveBeenCalledWith(true);
});

test('it calls onChange with value false when PixToggleButton is pressed ', async () => {
  // given
  const onChangeSpy = vi.fn();
  const onChange = (e) => {
    onChangeSpy(e.detail[0]);
  };
  render(
    html`<pix-toggle-button toggled=${true} @change=${onChange}>
      <span slot="label">${label}</span>
      <span slot="viewA">${viewALabel}</span>
      <span slot="viewB">${viewBLabel}</span>
    </pix-toggle-button>`,
    document.body,
  );

  // when
  await userEvent.click(screen.getByShadowRole('button'));

  // then
  expect(onChangeSpy).toHaveBeenCalledWith(false);
});
