import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render, clickByName } from '@1024pix/ember-testing-library';

module('Integration | Component | checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it should be possible to check the checkbox', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixCheckbox><:label>Recevoir la newsletter</:label></PixCheckbox>`,
    );
    await clickByName('Recevoir la newsletter');

    // then
    assert.true(screen.getByLabelText('Recevoir la newsletter').checked);
  });

  test('it should be possible to aria-disabled the checkbox', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixCheckbox @isDisabled='{{true}}'><:label>Mini label</:label></PixCheckbox>`,
    );

    // then
    assert.strictEqual(screen.getByLabelText('Mini label').getAttribute('aria-disabled'), 'true');
  });

  test('it should be possible to disable the checkbox', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixCheckbox disabled><:label>Mini label</:label></PixCheckbox>`,
    );

    // then
    assert.true(screen.getByLabelText('Mini label').disabled);
  });

  test('it should be possible to insert html in label', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixCheckbox><:label>Accepter les cgu,
    <a href='https://cgu.example.net'>voir ici</a></:label></PixCheckbox>`,
    );

    // then
    assert.dom(screen.getByLabelText('Accepter les cgu, voir ici')).exists();
  });

  test('it should be possible to control state', async function (assert) {
    // given
    this.set('checked', false);
    const screen = await render(
      hbs`<PixCheckbox @checked={{this.checked}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
    );
    const checkbox = screen.getByLabelText('Recevoir la newsletter');
    assert.false(checkbox.checked);

    // when
    this.set('checked', true);

    // then
    assert.true(checkbox.checked);
  });

  test('it should not be possible to control state when disabled', async function (assert) {
    // given
    const screen = await render(
      hbs`<PixCheckbox checked disabled><:label>Recevoir la newsletter</:label></PixCheckbox>`,
    );
    const checkbox = screen.getByLabelText('Recevoir la newsletter');
    assert.true(checkbox.checked);

    // when
    try {
      await clickByName('Recevoir la newsletter');

      // should have thrown an error
      assert.true(false);
    } catch (error) {
      // then
      assert.true(checkbox.checked);
    }
  });

  test('it should not be possible to control state when aria-disabled', async function (assert) {
    // given
    const screen = await render(
      hbs`<PixCheckbox checked @isDisabled={{true}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
    );
    const checkbox = screen.getByLabelText('Recevoir la newsletter');
    assert.true(checkbox.checked);

    // when
    await clickByName('Recevoir la newsletter');

    // then
    assert.true(checkbox.checked);
  });
});
