import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';

import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-input-password', function (hooks) {
  setupRenderingTest(hooks);

  const INPUT_SELECTOR = '.pix-input-password input[type=password]';
  const BUTTON_SELECTOR = '.pix-input-password__button';

  test('it should be possible to have an input label', async function (assert) {
    // given & when
    await render(hbs`<PixInputPassword @label='Mot de passe' @id='password' />`);

    // then
    assert.contains('Mot de passe');
  });

  test('it should be possible to add extra information to input', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixInputPassword @label='Mot de passe' @id='password' @information='une brève information' />`,
    );

    // then
    assert.ok(screen.getByLabelText('Mot de passe une brève information'));
  });

  test('it should be possible to associate an error message to input', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixInputPassword
  @label='Mot de passe'
  @id='password'
  @errorMessage="Un message d'erreur."
  @validationStatus='error'
/>`,
    );

    // then
    assert.dom(screen.getByText("Un message d'erreur.")).exists();
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
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(selectorElement.autocomplete, 'off');
  });

  test('it renders PixInputPassword with password visibility button', async function (assert) {
    // given & when
    await render(hbs`<PixInputPassword @label='Mot de passe' @id='password' />`);

    // then
    const passwordVisibilityButton = this.element.querySelector(BUTTON_SELECTOR);
    assert.dom(passwordVisibilityButton).exists();
  });

  test('it should be possible to track value of input', async function (assert) {
    // given && when
    await render(hbs`<PixInputPassword @id='password' @label='Mot de passe' @value='pix123' />`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(selectorElement.value, 'pix123');
  });

  test('it should be possible to make pix input password required', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixInputPassword @id='password' @label='Mot de passe' @requiredLabel='Champ obligatoire' />`,
    );

    // then
    const requiredPasswordInput = screen.getByLabelText('* Mot de passe');
    assert.dom(requiredPasswordInput).isRequired();
  });

  module('when the password visibility button is clicked', function () {
    test('it should focus on input', async function (assert) {
      // given
      const screen = await render(
        hbs`<PixInputPassword @id='password' @label='Mot de passe' @requiredLabel='Champ obligatoire' />`,
      );

      // when
      await click(screen.getByRole('button', { name: 'Afficher le mot de passe' }));

      // then
      assert.dom(screen.getByLabelText('* Mot de passe')).isFocused();
    });
  });
});
