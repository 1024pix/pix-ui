import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | textarea', function(hooks) {
  setupRenderingTest(hooks);

  const TEXTAREA_SELECTOR = '.pix-textarea textarea';

  test('it renders PixTextarea with correct id and content', async function(assert) {
    // given 
    const newContent = 'Bonjour Pix !';

    // when
    await render(hbs`<PixTextarea @id=7 @value="old value" />`);
    await fillIn(TEXTAREA_SELECTOR, newContent);

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    assert.contains('Bonjour Pix !');
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
    assert.contains('11 / 20');
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


  test('it should be possible to give a label', async function(assert) {
    // given & when
    await render(hbs`
      <PixTextarea
        @id="pix-select-with-label"
        @label="Décrivez votre problème"
      />
    `);

    // then
    assert.contains('Décrivez votre problème');
  });

  test('it should throw an error if no id is provided when there is a label', async function(assert) {
    // given & when
    const componentParams = { id: '   ', label: 'Décrivez votre problème' };
    const component = createGlimmerComponent('component:pix-textarea', componentParams);

    // then
    const expectedError = new Error('ERROR in PixTextarea component, @id param is necessary when giving @label');
    assert.throws(function() { component.label }, expectedError);
  });

  test('it should be possible to show an error message', async function(assert) {
    // given & when
    await render(hbs`
      <PixTextarea
        @id="pix-textarea-with-error"
        @errorMessage="Veuillez remplir ce champ."
      />
    `);

    // then
    assert.contains('Veuillez remplir ce champ.');
  })

});
