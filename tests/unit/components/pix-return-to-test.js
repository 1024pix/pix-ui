import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Unit | Component | pix-return-to', function (hooks) {
  setupTest(hooks);

  test('its default color is black', function (assert) {
    // given
    const componentParams = { route: 'uneRoute', shade: 'test' };
    const expectedShade = 'black';
    const component = createGlimmerComponent('component:pix-return-to', componentParams);

    // when & then
    assert.equal(component.shade, expectedShade);
  });

  test('it can be white', function (assert) {
    // given
    const componentParams = { route: 'uneRoute', shade: 'white' };
    const expectedShade = 'white';
    const component = createGlimmerComponent('component:pix-return-to', componentParams);

    // when & then
    assert.equal(component.shade, expectedShade);
  });

  test('it throws if route param is undefined or empty', function (assert) {
    // given
    const componentParams = { route: '  ' };
    const expectedError = new Error('ERROR in PixReturnTo component, @route param is not provided');
    const component = createGlimmerComponent('component:pix-return-to', componentParams);

    // when & then
    assert.throws(function () {
      component.route;
    }, expectedError);
  });
});
