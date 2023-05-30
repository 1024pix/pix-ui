import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Unit | Component | PixMultiSelect', function (hooks) {
  setupTest(hooks);

  test('it throws an error if there is no id and no label', function (assert) {
    // given & when
    const componentParams = { options: [] };
    const renderComponent = function () {
      createGlimmerComponent('pix-multi-select', componentParams);
    };

    // then
    const expectedError = new Error('ERROR in PixMultiSelect, a @label or an @id was not provided');
    assert.throws(renderComponent, expectedError);
  });
});
