import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';


module('Unit | Component | pix-button', function(hooks) {
  setupTest(hooks);

  test('it throws if route param is undefined or empty', function(assert) {
    // given
    const componentParams = { isLink: true, route: '  ' };
    const expectedError = new Error('ERROR in PixButton component, @route param is not provided');
    const component = createGlimmerComponent('component:pix-button', componentParams);

    // when & then
    assert.throws(
      function() { component.route },
      expectedError
    );
  });
});
