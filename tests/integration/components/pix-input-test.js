import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import fillInByLabel from '../../helpers/fill-in-by-label';

module('Integration | Component | input', function(hooks) {
  setupRenderingTest(hooks);

  const INPUT_SELECTOR = '.pix-input input';

  test('it renders the default PixInput', async function(assert) {
    // when
    await render(hbs`<PixInput @id="first-name" @label="Prénom" />`);
    await fillInByLabel('Prénom', 'Jeanne');

    // then
    assert.contains('Jeanne');
  });

  test('it should throw an error if there is no id', async function(assert) {
    // given & when
    const componentParams = { id: '   ' };
    const component = createGlimmerComponent('component:pix-input', componentParams);

    // then
    const expectedError = new Error('ERROR in PixInput component, @id param is not provided');
    assert.throws(function() { component.id }, expectedError);
  });

  test('it should be possible to give a number as id', async function(assert) {
    // given & when
    await render(hbs`<PixInput @id={{123}} />`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(selectorElement.id, '123');
  });

  test('it should be possible to give a label to input', async function(assert) {
    // given & when
    await render(hbs`<PixInput @label="Prénom" @id="firstName" />`);

    // then
    assert.contains('Prénom');
  });

  test('it should be possible to give an extra information to input', async function(assert) {
    // given & when
    await render(hbs`<PixInput @id="firstName" @label="Prénom" @information="a small information" />`);

    // then
    assert.contains('a small information');
  });

  test('it should be possible to give an error message to input', async function(assert) {
    // given & when
    await render(hbs`<PixInput @id="firstName" @errorMessage="Seul les caractères alphanumériques sont autorisés" />`);

    // then
    assert.contains('Seul les caractères alphanumériques sont autorisés');
  });

  test('it should be possible to give an icon to input', async function(assert) {
    // given & when
    await render(hbs`<PixInput @id="firstName" @icon="times" />`);

    // then
    assert.dom('.pix-input__icon').exists();
  });

  test('it should be possible to put an icon to the left of input', async function(assert) {
    // given & when
    await render(hbs`<PixInput @id="firstName" @icon="times" @isIconLeft={{true}} />`);

    // then
    assert.dom('.pix-input__icon.pix-input__icon--left').exists();
  });

  test('it should be possible to track value from input', async function(assert) {
    // given & when
    await render(hbs`<PixInput @label="Prénom" @id="firstName" @value='Jeanne' />`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(selectorElement.value, 'Jeanne');
  });

  test('it should be possible to give more params to input', async function(assert) {
    // given & when
    await render(hbs`<PixInput @label="Prénom" @id="firstName" autocomplete="on" />`);

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(selectorElement.autocomplete, 'on');
  });
});
