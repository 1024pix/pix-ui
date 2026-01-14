import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import userEvent from '@testing-library/user-event';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | PixSegmentedControl', function (hooks) {
  setupRenderingTest(hooks);

  this.label = 'Mon bouton toggle';
  this.viewAText = 'Oui';
  this.viewBText = 'Non';
  this.onChange = sinon.spy();

  test('it renders PixSegmentedControl', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixSegmentedControl>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewAText}}</:viewA>
  <:viewB>{{this.viewBText}}</:viewB>
</PixSegmentedControl>`,
    );

    assert.dom(screen.getByRole('radiogroup', { name: this.label })).exists();
    assert.dom(screen.getByRole('radio', { name: this.viewAText })).exists();
    assert.dom(screen.getByRole('radio', { name: this.viewBText })).exists();
  });

  test('it calls onChange when change', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixSegmentedControl @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewAText}}</:viewA>
  <:viewB>{{this.viewBText}}</:viewB>
</PixSegmentedControl>`);

    assert.true(screen.getByLabelText(this.viewAText).checked);

    await click(screen.getByRole('radio', { name: this.viewBText }));

    // then
    assert.false(screen.getByLabelText(this.viewAText).checked);
    assert.true(screen.getByLabelText(this.viewBText).checked);
    sinon.assert.calledWith(this.onChange, true);
  });

  test('it calls onChange when Enter is pressed', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixSegmentedControl @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewAText}}</:viewA>
  <:viewB>{{this.viewBText}}</:viewB>
</PixSegmentedControl>`);

    await click(screen.getByRole('radio', { name: this.viewBText }));
    await userEvent.keyboard('[Enter]');

    // then
    assert.false(screen.getByLabelText(this.viewAText).checked);
    assert.true(screen.getByLabelText(this.viewBText).checked);
    sinon.assert.calledWith(this.onChange, true);
  });

  test('it calls onChange when Space is pressed', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixSegmentedControl @onChange={{this.onChange}}>
  <:label>{{this.label}}</:label>
  <:viewA>{{this.viewAText}}</:viewA>
  <:viewB>{{this.viewBText}}</:viewB>
</PixSegmentedControl>`);

    await click(screen.getByRole('radio', { name: this.viewBText }));
    await userEvent.keyboard('[Space]');

    // then
    assert.false(screen.getByLabelText(this.viewAText).checked);
    assert.true(screen.getByLabelText(this.viewBText).checked);
    sinon.assert.calledWith(this.onChange, true);
  });
});
