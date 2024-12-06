import { module, test } from 'qunit';
import { click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import userEvent from '@testing-library/user-event';

module('Integration | Component | PixToggleButton', function (hooks) {
  setupRenderingTest(hooks);

  this.label = 'Mon bouton toggle';
  this.viewALabel = 'Oui';
  this.viewBLabel = 'Non';

  test('it renders PixToggleButton', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixToggleButton>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewALabel}}</:viewA>
  <:viewB>{{this.viewBLabel}}</:viewB>
</PixToggleButton>`);

    assert.dom(screen.getByText(this.label)).exists();
    assert.dom(screen.getByText(this.viewALabel)).exists();
    assert.dom(screen.getByText(this.viewBLabel)).exists();
  });

  test('it pressed PixToggleButton', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixToggleButton @toggled={{true}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewALabel}}</:viewA>
  <:viewB>{{this.viewBLabel}}</:viewB>
</PixToggleButton>`);

    // then
    assert.dom(screen.getByRole('button', { pressed: true })).exists();
  });

  test('it does not press PixToggleButton', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixToggleButton @toggled={{false}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewALabel}}</:viewA>
  <:viewB>{{this.viewBLabel}}</:viewB>
</PixToggleButton>`);

    // then
    assert.dom(screen.getByRole('button', { pressed: false })).exists();
  });

  test('it calls onChange when PixToggleButton is not pressed with value true', async function (assert) {
    // given & when
    this.onChange = sinon.spy();

    const screen = await render(hbs`<PixToggleButton @toggled={{false}} @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewALabel}}</:viewA>
  <:viewB>{{this.viewBLabel}}</:viewB>

</PixToggleButton>`);

    await click(screen.getByRole('button'));

    // then
    sinon.assert.calledWith(this.onChange, true);
    assert.ok(this.onChange.called);
  });

  test('it calls onChange when PixToggleButton is pressed with value false', async function (assert) {
    // given & when
    this.onChange = sinon.spy();

    const screen = await render(hbs`<PixToggleButton @toggled={{true}} @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewALabel}}</:viewA>
  <:viewB>{{this.viewBLabel}}</:viewB>
</PixToggleButton>`);

    await click(screen.getByRole('button'));

    // then
    sinon.assert.calledWith(this.onChange, false);
    assert.ok(this.onChange.called);
  });

  test('it calls onChange when Enter is pressed', async function (assert) {
    // given & when
    this.onChange = sinon.spy();

    const screen = await render(hbs`<PixToggleButton @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewALabel}}</:viewA>
  <:viewB>{{this.viewBLabel}}</:viewB>

</PixToggleButton>`);

    await screen.getByRole('button').focus();
    await userEvent.keyboard('[Enter]');

    // then
    assert.ok(this.onChange.called);
  });

  test('it calls onChange when Space is pressed', async function (assert) {
    // given & when
    this.onChange = sinon.spy();

    const screen = await render(hbs`<PixToggleButton @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewALabel}}</:viewA>
  <:viewB>{{this.viewBLabel}}</:viewB>

</PixToggleButton>`);

    await screen.getByRole('button').focus();
    await userEvent.keyboard('[Space]');

    // then
    assert.ok(this.onChange.called);
  });
});
