import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import userEvent from '@testing-library/user-event';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

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

  test('it calls onChange when change', async function (assert) {
    // given & when
    this.onChange = sinon.spy();

    const screen = await render(hbs`<PixToggleButton @toggled={{false}} @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewALabel}}</:viewA>
  <:viewB>{{this.viewBLabel}}</:viewB>

</PixToggleButton>`);
    await click(screen.getByRole('radio', { name: 'Oui' }));

    // then
    sinon.assert.calledWith(this.onChange, true);
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

    await click(screen.getByRole('radio', { name: 'Oui' }));
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

    await click(screen.getByRole('radio', { name: 'Oui' }));
    await userEvent.keyboard('[Space]');

    // then
    assert.ok(this.onChange.called);
  });
});
