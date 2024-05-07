import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByName } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-radio-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixRadioButton', async function (assert) {
    // when
    const screen = await render(hbs`<PixRadioButton><:label>Abricot</:label></PixRadioButton>`);

    // then
    assert.strictEqual(screen.getByLabelText('Abricot').type, 'radio');
  });

  test('it should be possible to aria-disabled the radiobutton', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixRadioButton @isDisabled='{{true}}'><:label>Abricot</:label></PixRadioButton>`,
    );

    // then
    assert.strictEqual(screen.getByLabelText('Abricot').getAttribute('aria-disabled'), 'true');
  });

  test('it renders the PixRadioButton component with disabled attribute', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixRadioButton disabled><:label>Abricot</:label></PixRadioButton>`,
    );

    // then
    assert.true(screen.getByLabelText('Abricot').disabled);
  });

  test('it should be possible to add more params to PixRadioButton', async function (assert) {
    // given
    const screen = await render(
      hbs`<PixRadioButton disabled checked><:label>Abricot</:label></PixRadioButton>`,
    );

    // when & then
    assert.true(screen.getByLabelText('Abricot').checked);
  });

  test('it should not be possible to control state when disabled', async function (assert) {
    // given
    const screen = await render(
      hbs`<PixRadioButton disabled><:label>Abricot</:label></PixRadioButton>`,
    );
    const radio = screen.getByLabelText('Abricot');
    assert.false(radio.checked);

    // when
    try {
      await clickByName('Abricot');

      // should have thrown an error
      assert.true(false);
    } catch (error) {
      // then
      assert.false(radio.checked);
    }
  });

  test('it should not be possible to control state when aria-disabled', async function (assert) {
    // given
    const screen = await render(
      hbs`<PixRadioButton @isDisabled={{true}}><:label>Abricot</:label></PixRadioButton>`,
    );
    const radio = screen.getByLabelText('Abricot');
    assert.false(radio.checked);

    // when
    await clickByName('Abricot');

    // then
    assert.false(radio.checked);
  });
});
