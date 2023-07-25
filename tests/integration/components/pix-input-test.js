import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render } from '@1024pix/ember-testing-library';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import fillInByLabel from '../../helpers/fill-in-by-label';

module('Integration | Component | input', function (hooks) {
  setupRenderingTest(hooks);

  const INPUT_SELECTOR = '.pix-input input';

  test('it renders the default PixInput', async function (assert) {
    // when
    await render(hbs`<PixInput @id='first-name' @label='Prénom' />`);
    await fillInByLabel('Prénom', 'Jeanne');

    // then
    assert.contains('Jeanne');
  });

  test('it should throw an error if there is no id', async function (assert) {
    // given & when
    const componentParams = { id: '   ' };
    const component = createGlimmerComponent('pix-input', componentParams);

    // then
    const expectedError = new Error('ERROR in PixInput component, @id param is not provided');
    assert.throws(function () {
      component.id;
    }, expectedError);
  });

  test('it should be possible to give a number as id', async function (assert) {
    // given & when
    await render(hbs`<PixInput @id={{123}} @label='Prénom' />`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(selectorElement.id, '123');
  });

  test('it should be possible to give a label to input', async function (assert) {
    // given & when
    await render(hbs`<PixInput @label='Prénom' @id='firstName' />`);

    // then
    assert.contains('Prénom');
  });

  test('it should be possible to give an extra information to input', async function (assert) {
    // given & when
    await render(
      hbs`<PixInput @id='firstName' @label='Prénom' @information='a small information' />`,
    );

    // then
    assert.contains('a small information');
  });

  test('it should be possible to give an error message to input', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixInput
        @id='firstName'
        @label='Prénom'
        @errorMessage='Seul les caractères alphanumériques sont autorisés'
        @validationStatus="error"
      />`,
    );

    // then
    assert.dom(screen.getByText('Seul les caractères alphanumériques sont autorisés')).exists();
  });

  test('it should be possible to track value from input', async function (assert) {
    // given & when
    await render(hbs`<PixInput @label='Prénom' @id='firstName' @value='Jeanne' />`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(selectorElement.value, 'Jeanne');
  });

  test('it should be possible to give more params to input', async function (assert) {
    // given & when
    await render(hbs`<PixInput @label='Prénom' @id='firstName' autocomplete='on' />`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(selectorElement.autocomplete, 'on');
  });

  test('it should be possible to make pix input required', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixInput @label='Prénom' @id='firstName' @requiredLabel='Champ obligatoire' />`,
    );

    // then
    const requiredInput = screen.getByLabelText('* Prénom');
    assert.dom(requiredInput).isRequired();
  });
});
