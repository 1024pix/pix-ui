import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-radio-button', function (hooks) {
  setupRenderingTest(hooks);

  const INPUT_SELECTOR = '.pix-radio-button input';

  test('it renders the default PixRadioButton', async function (assert) {
    // when
    await render(hbs`<PixRadioButton @label="Abricot" />`);

    // then
    const componentInputElement = this.element.querySelector(INPUT_SELECTOR);
    assert.contains('Abricot');
    assert.equal(componentInputElement.type, 'radio');
  });

  test('it renders the PixRadioButton component with isDisabled attribute', async function (assert) {
    // given & when
    await render(hbs`<PixRadioButton @label="Abricot" @id="abricot" @isDisabled=true />`);

    // then
    const componentInputElement = this.element.querySelector(INPUT_SELECTOR);
    assert.true(componentInputElement.disabled);
  });

  test('it should be possible to add more params to PixRadioButton', async function (assert) {
    // given
    await render(hbs`<PixRadioButton @label="Abricot" @id="abricot" @isDisabled=true checked/>`);

    // when & then
    const componentInput = this.element.querySelector(INPUT_SELECTOR);
    assert.true(componentInput.checked);
  });
});
