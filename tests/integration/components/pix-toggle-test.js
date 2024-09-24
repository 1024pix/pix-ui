import { module, test } from 'qunit';
import { click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import userEvent from '@testing-library/user-event';

module('Integration | Component | PixToggle', function (hooks) {
  setupRenderingTest(hooks);

  this.label = 'Mon bouton toggle';
  this.onLabel = 'Oui';
  this.offLabel = 'Non';

  test('it renders PixToggle', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixToggle>
  <:label>{{this.label}}</:label>
  <:on>{{this.onLabel}}</:on>
  <:off>{{this.offLabel}}</:off>
</PixToggle>`);

    assert.dom(screen.getByText(this.label)).exists();
    assert.dom(screen.getByText(this.onLabel)).exists();
    assert.dom(screen.getByText(this.offLabel)).exists();
  });

  test('it pressed PixToggle', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixToggle @toggled={{true}}>
  <:label>{{this.label}}</:label>
  <:on>{{this.onLabel}}</:on>
  <:off>{{this.offLabel}}</:off>
</PixToggle>`);

    // then
    assert.dom(screen.getByRole('button', { pressed: true })).exists();
  });

  test('it does not press PixToggle', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixToggle @toggled={{false}}>
  <:label>{{this.label}}</:label>
  <:on>{{this.onLabel}}</:on>
  <:off>{{this.offLabel}}</:off>
</PixToggle>`);

    // then
    assert.dom(screen.getByRole('button', { pressed: false })).exists();
  });

  test('it calls onChange when PixToggle is not pressed with value true', async function (assert) {
    // given & when
    this.onChange = sinon.spy();

    const screen = await render(hbs`<PixToggle @toggled={{false}} @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:on>{{this.onLabel}}</:on>
  <:off>{{this.offLabel}}</:off>

</PixToggle>`);

    await click(screen.getByRole('button'));

    // then
    sinon.assert.calledWith(this.onChange, true);
    assert.ok(this.onChange.called);
  });

  test('it calls onChange when PixToggle is pressed with value false', async function (assert) {
    // given & when
    this.onChange = sinon.spy();

    const screen = await render(hbs`<PixToggle @toggled={{true}} @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:on>{{this.onLabel}}</:on>
  <:off>{{this.offLabel}}</:off>
</PixToggle>`);

    await click(screen.getByRole('button'));

    // then
    sinon.assert.calledWith(this.onChange, false);
    assert.ok(this.onChange.called);
  });

  test('it calls onChange when Enter is pressed', async function (assert) {
    // given & when
    this.onChange = sinon.spy();

    const screen = await render(hbs`<PixToggle @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:on>{{this.onLabel}}</:on>
  <:off>{{this.offLabel}}</:off>

</PixToggle>`);

    await screen.getByRole('button').focus();
    await userEvent.keyboard('[Enter]');

    // then
    assert.ok(this.onChange.called);
  });

  test('it calls onChange when Space is pressed', async function (assert) {
    // given & when
    this.onChange = sinon.spy();

    const screen = await render(hbs`<PixToggle @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:on>{{this.onLabel}}</:on>
  <:off>{{this.offLabel}}</:off>

</PixToggle>`);

    await screen.getByRole('button').focus();
    await userEvent.keyboard('[Space]');

    // then
    assert.ok(this.onChange.called);
  });
});
