import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';

import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | pix-input-password', function (hooks) {
  setupRenderingTest(hooks);

  const INPUT_SELECTOR = '.pix-input-password input[type=password]';
  const INFORMATION_SELECTOR = '.pix-input__information';
  const BUTTON_SELECTOR = '.pix-input-password__button';

  test('it should throw an error if there is no id', async function (assert) {
    // given & when
    const componentParams = { id: '   ' };
    const component = createGlimmerComponent('component:pix-input-password', componentParams);

    // then
    const expectedError = new Error('ERROR in PixInput component, @id param is not provided');
    assert.throws(function () {
      component.id;
    }, expectedError);
  });

  test('it should be possible to have an input label', async function (assert) {
    // given & when
    await render(hbs`<PixInputPassword @label='Mot de passe' @id='password' />`);

    // then
    assert.contains('Mot de passe');
  });

  test('it should be possible to add extra information to input', async function (assert) {
    // given & when
    await render(
      hbs`<PixInputPassword @label='Mot de passe' @id='password' @information='une brève information' />`
    );

    // then
    const selectorElement = this.element.querySelector(INFORMATION_SELECTOR);
    assert.equal(selectorElement.innerHTML, 'une brève information');
  });

  test('it should be possible to associate an error message to input', async function (assert) {
    // given & when
    await render(
      hbs`<PixInputPassword @label='Mot de passe' @id='password' @errorMessage="Un message d'erreur." />`
    );

    // then
    assert.contains("Un message d'erreur.");
  });

  test('it should display an input prefix if necessary', async function (assert) {
    // given & when
    await render(hbs`<PixInputPassword @label='Mot de passe' @id='password' @prefix='A prefix' />`);

    // then
    assert.contains('A prefix');
  });

  test('it should be possible to add more params to input', async function (assert) {
    // given & when
    await render(hbs`<PixInputPassword @label='Mot de passe' @id='password' autocomplete='off' />`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(selectorElement.autocomplete, 'off');
  });

  test('it renders PixInputPassword with password visibility button', async function (assert) {
    // given & when
    await render(hbs`<PixInputPassword @label='Mot de passe' @id='password' />`);

    // then
    const passwordVisibilityButton = this.element.querySelector(BUTTON_SELECTOR);
    assert.dom(passwordVisibilityButton).exists();
  });

  test('it should throw an error if PixInputPassword has neither a label nor an ariaLabel param', async function (assert) {
    // given & when
    const componentParams = { label: null, ariaLabel: null };
    const component = createGlimmerComponent('component:pix-input-password', componentParams);

    // then
    const expectedError = new Error(
      'ERROR in PixInputPassword component, you must provide @label or @ariaLabel params'
    );
    assert.throws(function () {
      component.label;
    }, expectedError);
    assert.throws(function () {
      component.ariaLabel;
    }, expectedError);
  });

  test('it should be possible to track value of input', async function (assert) {
    // given && when
    await render(hbs`<PixInputPassword @id='password' @label='Mot de passe' @value='pix123' />`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(selectorElement.value, 'pix123');
  });

  test('it should be possible to make pix input password required', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixInputPassword @id='password' @label='Mot de passe' @requiredLabel='Champ obligatoire' />`
    );

    // then
    const requiredPasswordInput = screen.getByLabelText('* Mot de passe');
    assert.dom(requiredPasswordInput).isRequired();
  });
});
