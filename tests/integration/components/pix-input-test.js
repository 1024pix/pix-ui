import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import fillInByLabel from '../../helpers/fill-in-by-label';

module('Integration | Component | PixInput', function (hooks) {
  setupRenderingTest(hooks);

  const INPUT_SELECTOR = '.pix-input input';

  test('it renders the default PixInput', async function (assert) {
    // when
    await render(hbs`<PixInput @id='first-name'><:label>Prénom</:label></PixInput>`);
    await fillInByLabel('Prénom', 'Jeanne');

    // then
    assert.contains('Jeanne');
  });

  test('it should be possible to give a number as id', async function (assert) {
    // given & when
    await render(hbs`<PixInput @id={{123}}><:label>Prénom</:label></PixInput>`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.strictEqual(selectorElement.id, '123');
  });

  test('it should be possible to give a label to input', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixInput @id='firstName'><:label>Prénom</:label></PixInput>`);

    // then
    assert.ok(screen.getByLabelText('Prénom'));
  });

  test('it should be possible to give an extra information to input', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixInput @id='firstName' @subLabel='a small information'><:label>Prénom</:label></PixInput>`,
    );

    // then
    assert.ok(screen.getByLabelText('Prénom a small information'));
  });

  test('it should be possible to give an error message to input', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixInput
  @id='firstName'
  @errorMessage='Seul les caractères alphanumériques sont autorisés'
  @validationStatus='error'
><:label>Prénom</:label></PixInput>`,
    );

    // then
    assert.dom(screen.getByText('Seul les caractères alphanumériques sont autorisés')).exists();
  });

  test('it should be possible to track value from input', async function (assert) {
    // given & when
    await render(hbs`<PixInput @id='firstName' @value='Jeanne'><:label>Prénom</:label></PixInput>`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.strictEqual(selectorElement.value, 'Jeanne');
  });

  test('it should be possible to give more params to input', async function (assert) {
    // given & when
    await render(
      hbs`<PixInput @id='firstName' autocomplete='on'><:label>Prénom</:label></PixInput>`,
    );

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.strictEqual(selectorElement.autocomplete, 'on');
  });

  test('it should be possible to make pix input required', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixInput @id='firstName' @requiredLabel='Champ obligatoire'><:label>Prénom</:label></PixInput>`,
    );

    // then
    const requiredInput = screen.getByLabelText('Prénom *');
    assert.dom(requiredInput).isRequired();
  });

  module('root class computation', function () {
    const DIV_ROOT_SELECTOR = '.pix-input';

    test('it should compute correct class for root when @isFullWidth param is true', async function (assert) {
      // given & when
      await render(
        hbs`<PixInput @id='firstName' @isFullWidth={{true}}><:label>Prénom</:label></PixInput>`,
      );

      // then
      const selectorElement = this.element.querySelector(DIV_ROOT_SELECTOR);
      assert.strictEqual(selectorElement.classList.value, 'pix-input pix-input--full-width');
    });

    test('it should compute correct class for root when @inlineLabel param is true', async function (assert) {
      // given & when
      await render(
        hbs`<PixInput @id='firstName' @inlineLabel={{true}}><:label>Prénom</:label></PixInput>`,
      );

      // then
      const selectorElement = this.element.querySelector(DIV_ROOT_SELECTOR);
      assert.strictEqual(selectorElement.classList.value, 'pix-input pix-input--inline');
    });

    test('it should compute correct class for root when @inlineLabel and @isFullWidth params are true', async function (assert) {
      // given & when
      await render(
        hbs`<PixInput @id='firstName' @inlineLabel={{true}} @isFullWidth={{true}}>
  <:label>Prénom</:label>
</PixInput>`,
      );

      // then
      const selectorElement = this.element.querySelector(DIV_ROOT_SELECTOR);
      assert.strictEqual(
        selectorElement.classList.value,
        'pix-input pix-input--inline pix-input--full-width',
      );
    });
  });
});
