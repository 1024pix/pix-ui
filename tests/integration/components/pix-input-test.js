import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | input', function(hooks) {
  setupRenderingTest(hooks);

  const INPUT_SELECTOR = '.pix-input input';
  const LABEL_SELECTOR = '.pix-input__label';
  const INFORMATION_SELECTOR = '.pix-input__information';
  const ERROR_SELECTOR = '.pix-input__error-message';

  test('it renders the default PixInput', async function(assert) {
    // when
    await render(hbs`<PixInput @id="firstName" />`);
    await fillIn(INPUT_SELECTOR, 'Jeanne');

    // then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(selectorElement.value, 'Jeanne');
  });

  test('it should throw an error if there is no id', async function(assert) {
    // given
    const componentParams = { id: '   ' };
    const component = createGlimmerComponent('component:pix-input', componentParams);

    // when & then
    const expectedError = new Error('ERROR in PixInput component, @id param is not provided');
    assert.throws(function() { component.id }, expectedError);
  });

  test('it should be possible to give a label to input', async function(assert) {
    // given
    await render(hbs`<PixInput @label="Prénom" @id="firstName" />`);

    // when & then
    const selectorElement = this.element.querySelector(LABEL_SELECTOR);
    assert.equal(selectorElement.innerHTML, 'Prénom');
  });

  test('it should be possible to give an extra information to input', async function(assert) {
    // given
    await render(hbs`<PixInput @id="firstName" @label="Prénom" @information="a small information" />`);

    // when & then
    const selectorElement = this.element.querySelector(INFORMATION_SELECTOR);
    assert.equal(selectorElement.innerHTML, 'a small information');
  });

  test('it should be possible to give an error message to input', async function(assert) {
    // given
    await render(hbs`<PixInput @id="firstName" @errorMessage="Seul les caractères alphanumériques sont autorisés" />`);

    // when & then
    const selectorElement = this.element.querySelector(ERROR_SELECTOR);
    assert.equal(selectorElement.innerHTML, 'Seul les caractères alphanumériques sont autorisés');
  });

  test('it should be possible to give an icon to input', async function(assert) {
    // given
    await render(hbs`<PixInput @id="firstName" @icon="times" />`);

    // when & then
    assert.dom('.pix-input__icon').exists();
  });

  test('it should be possible to put an icon to the left of input', async function(assert) {
    // given
    await render(hbs`<PixInput @id="firstName" @icon="times" @isIconLeft={{true}} />`);

    // when & then
    assert.dom('.pix-input__icon.pix-input__icon--left').exists();
  });

  test('it should be possible to give more params to input', async function(assert) {
    // given
    await render(hbs`<PixInput @label="Prénom" @id="firstName" value='Jeanne' />`);

    // when & then
    const selectorElement = this.element.querySelector(INPUT_SELECTOR);
    assert.equal(selectorElement.value, 'Jeanne');
  });
});