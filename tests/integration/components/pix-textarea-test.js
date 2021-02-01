import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | textarea', function(hooks) {
  setupRenderingTest(hooks);

  const TEXTAREA_SELECTOR = '.pix-textarea textarea';
  const CHAR_COUNT_SELECTOR = '.pix-textarea p';

  test('it renders PixTextarea with correct id and content', async function(assert) {
    // given 
    const newContent = 'Bonjour Pix !';

    // when
    await render(hbs`<PixTextarea @id=7 @value="old value" />`);
    await fillIn(TEXTAREA_SELECTOR, newContent);

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    assert.equal(textarea.value.trim(), newContent);
    assert.equal(textarea.id, 7);
  });


  test('it should count textarea characters length', async function(assert) {
    // given
    const defaultValue = '';
    this.set('value', defaultValue);
    const maxlength = 20;
    this.set('maxlength', maxlength);

    // when
    await render(hbs`<PixTextarea @value={{value}} @maxlength={{maxlength}} />`);
    await fillIn(TEXTAREA_SELECTOR, 'Hello Pix !');

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    assert.equal(textarea.maxLength, maxlength);
    assert.dom(CHAR_COUNT_SELECTOR).hasText('11 / 20');
  });

  test('it should be possible to add required attributes to PixTextarea', async function(assert) {
    // given
    const defaultValue = '';
    this.set('value', defaultValue);

    // when
    await render(hbs`<PixTextarea @value={{value}} required="true" />`);

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    assert.equal(textarea.required, true);
  });

});
