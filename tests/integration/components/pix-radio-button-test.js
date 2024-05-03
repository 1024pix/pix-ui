import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
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
});
