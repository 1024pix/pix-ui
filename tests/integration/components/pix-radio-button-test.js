import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-radio-button', function(hooks) {
  setupRenderingTest(hooks);

  const LABEL_SELECTOR = '.pix-radio-button';
  const INPUT_SELECTOR = '.pix-radio-button input';

  test('it renders the default PixRadioButton', async function(assert) {
    // when
    await render(hbs`<PixRadioButton @label="Abricot" />`);

    // then
    const componentLabelElement = this.element.querySelector(LABEL_SELECTOR);
    const componentInputElement = this.element.querySelector(INPUT_SELECTOR);

    assert.equal(componentLabelElement.textContent.trim(), 'Abricot');
    assert.equal(componentInputElement.type, 'radio');
  });

  test('it renders the PixRadioButton component with isDisabled attribute', async function(assert) {
    // given & when
    await render(hbs`<PixRadioButton @label="Abricot" @id="abricot" @isDisabled=true />`);

    // then
    const componentInputElement = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(componentInputElement.disabled, true);
  });

  test('it should be possible to add more params to PixRadioButton', async function(assert) {
    // given
    await render(hbs`<PixRadioButton @label="Abricot" @id="abricot" @isDisabled=true checked/>`);

    // when & then
    const componentInput = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(componentInput.checked, true);
  });
});
