import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Unit | Component | pix-select', function (hooks) {
  setupTest(hooks);

  test('it throws an error if there is no id and no label', function (assert) {
    // given & when
    const componentParams = { options: [] };
    const renderComponent = function () {
      createGlimmerComponent('component:pix-select', componentParams);
    };

    // then
    const expectedError = new Error('ERROR in PixSelect, a @label or an @id was not provided');
    assert.throws(renderComponent, expectedError);
  });

  test('its should return the default className', function (assert) {
    // given
    const componentParams = { label: 'Un label', options: [] };
    const component = createGlimmerComponent('component:pix-select', componentParams);

    // when & then
    assert.equal(component.className, 'pix-select-button');
  });

  test('it should add a custom class name', function (assert) {
    // given
    const componentParams = { label: 'Un label', options: [], className: 'custom-class' };
    const component = createGlimmerComponent('component:pix-select', componentParams);

    // when & then
    assert.equal(component.className, 'pix-select-button custom-class');
  });

  test('it should add an error class name', function (assert) {
    // given
    const componentParams = { label: 'Un label', options: [], errorMessage: 'there is an error' };
    const component = createGlimmerComponent('component:pix-select', componentParams);

    // when & then
    assert.equal(component.className, 'pix-select-button pix-select-button--error');
  });

  test('it should add an error class name and a custom class', function (assert) {
    // given
    const componentParams = {
      label: 'Un label',
      options: [],
      errorMessage: 'there is an error',
      className: 'custom-class',
    };
    const component = createGlimmerComponent('component:pix-select', componentParams);

    // when & then
    assert.equal(component.className, 'pix-select-button custom-class pix-select-button--error');
  });
});
