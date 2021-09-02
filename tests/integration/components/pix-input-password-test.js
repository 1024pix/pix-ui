import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from "../../helpers/create-glimmer-component";

module('Integration | Component | pix-input-password', function(hooks) {
  setupRenderingTest(hooks);

  const INPUT_SELECTOR = '.pix-input input[type=password]';
  const LABEL_SELECTOR = '.pix-input__label';
  const INFORMATION_SELECTOR = '.pix-input__information';
  const ERROR_SELECTOR = '.pix-input__error-message';
  const BUTTON_SELECTOR = '.pix-input-password--button';

  test('it should throw an error if there is no id', async function(assert) {
    // given
    const componentParams = { id: '   ' };
    const component = createGlimmerComponent('component:pix-input-password', componentParams);

    // when & then
    const expectedError = new Error('ERROR in PixInput component, @id param is not provided');
    assert.throws(function() { component.id }, expectedError);
  });

  test('it should be possible to have an input label', async function(assert) {
    // given
    await render(hbs`<PixInputPassword @label="Mot de passe" @id="password" />`);

    // when & then
    const selectorElement = this.element.querySelector(LABEL_SELECTOR);
    assert.equal(selectorElement.innerHTML, 'Mot de passe');
  });

  test('it should be possible to add extra information to input', async function(assert) {
    // given
    await render(hbs`<PixInputPassword @label="Mot de passe" @id="password" @information="une brève information" />`);

    // when & then
    const selectorElement = this.element.querySelector(INFORMATION_SELECTOR);
    assert.equal(selectorElement.innerHTML, 'une brève information');
  });

  test('it should be possible to associate an error message to input', async function(assert) {
    // given
    await render(hbs`<PixInputPassword @label="Mot de passe" @id="password" @errorMessage="Un message d'erreur." />`);

    // when & then
    const selectorElement = this.element.querySelector(ERROR_SELECTOR);
    assert.equal(selectorElement.innerHTML, 'Un message d\'erreur.');
  });

  test('it should be possible to add more params to input', async function(assert) {
    // given
    await render(hbs`<PixInputPassword @label="Mot de passe" @id="password" autocomplete="off" />`);

    // when & then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(selectorElement.autocomplete, 'off');
  });

  test('it renders PixInputPassword with password visibility button', async function(assert) {
    // given
    await render(hbs`<PixInputPassword @label="Mot de passe" @id="password" />`);

    // when & then
    const passwordVisibilityButton = this.element.querySelector(BUTTON_SELECTOR);
    assert.dom(passwordVisibilityButton).exists();
  });

  test('it should throw an error if PixInputPassword has neither a label nor an ariaLabel param', async function(assert) {
    // given
    const componentParams = { label: null, ariaLabel: null };
    const component = createGlimmerComponent('component:pix-input-password', componentParams);

    // when & then
    const expectedError = new Error('ERROR in PixInputPassword component, you must provide @label or @ariaLabel params');
    assert.throws(function() { component.label }, expectedError);
    assert.throws(function() { component.ariaLabel }, expectedError);
  });
});
