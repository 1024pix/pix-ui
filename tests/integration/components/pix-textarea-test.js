import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import fillInByLabel from '../../helpers/fill-in-by-label';

module('Integration | Component | textarea', function (hooks) {
  setupRenderingTest(hooks);

  const TEXTAREA_SELECTOR = '.pix-textarea textarea';
  const ABBR_SELECTOR = '.mandatory-mark';

  test('it renders PixTextarea with correct id and content', async function (assert) {
    // given
    const newContent = 'Bonjour Pix !';

    // when
    await render(hbs`<PixTextarea @id='7' @value='old value' @label='label' />`);
    await fillInByLabel('label', newContent);

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    assert.contains('Bonjour Pix !');
    assert.strictEqual(textarea.id, '7');
  });

  test('it should count textarea characters length', async function (assert) {
    // given
    const defaultValue = '';
    this.set('value', defaultValue);
    const maxlength = 20;
    this.set('maxlength', maxlength);

    // when
    await render(
      hbs`<PixTextarea @value={{this.value}} @maxlength={{this.maxlength}} @id='textarea-id' @label='label' />`,
    );
    await fillInByLabel('label', 'Hello Pix !');

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    await triggerEvent(textarea, 'keyup', { code: 'Enter' });

    assert.strictEqual(textarea.maxLength, maxlength);
    assert.contains('11 / 20');
  });

  test('it should be possible to add required attributes to PixTextarea', async function (assert) {
    // given
    const defaultValue = '';
    this.set('value', defaultValue);

    // when
    await render(hbs`<PixTextarea @value={{this.value}} required='true' />`);

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    assert.true(textarea.required);
  });

  test('it should add requiredLabel message in label', async function (assert) {
    // given
    const requiredLabel = 'Obligatoire';
    this.set('requiredLabel', requiredLabel);

    // when{{
    await render(
      hbs`<PixTextarea @value={{this.value}} @id='pix-textarea' @label='label' @requiredLabel={{this.requiredLabel}}/>`,
    );

    // then
    const abbr = this.element.querySelector(ABBR_SELECTOR);
    assert.deepEqual(abbr.title, requiredLabel);
  });

  test('it should add required html attributes when given a requiredLabel argument', async function (assert) {
    // given
    const defaultValue = '';
    this.set('value', defaultValue);

    // when
    await render(
      hbs`<PixTextarea @value={{this.value}} @requiredLabel='Obligatoire' @label='label' @id='id' />`,
    );

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    assert.true(textarea.required);
    assert.strictEqual(textarea.ariaRequired, 'true');
  });

  test('it should be possible to give a label', async function (assert) {
    // given & when
    await render(hbs`<PixTextarea @id='pix-select-with-label' @label='Décrivez votre problème' />`);

    // then
    assert.contains('Décrivez votre problème');
  });

  test('it should throw an error if no id is provided when there is a label', async function (assert) {
    // given & when
    const componentParams = { id: '   ', label: 'Décrivez votre problème' };
    const component = createGlimmerComponent('pix-textarea', componentParams);

    // then
    const expectedError = new Error(
      'ERROR in PixTextarea component, @id param is necessary when giving @label',
    );
    assert.throws(function () {
      component.label;
    }, expectedError);
  });

  test('it should throw an error if no label is provided when there is a requiredLabel', async function (assert) {
    // given & when
    const componentParams = { label: '   ', requiredLabel: 'Obligatoire' };
    const component = createGlimmerComponent('pix-textarea', componentParams);

    // then
    const expectedError = new Error(
      'ERROR in PixTextarea component, @label param is necessary when giving @requiredLabel',
    );
    assert.throws(function () {
      component.requiredLabel;
    }, expectedError);
  });

  test('it should be possible to show an error message', async function (assert) {
    // given & when
    await render(
      hbs`<PixTextarea @id='pix-textarea-with-error' @errorMessage='Veuillez remplir ce champ.' />`,
    );

    // then
    assert.contains('Veuillez remplir ce champ.');
  });
});
