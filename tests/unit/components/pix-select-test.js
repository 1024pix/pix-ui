import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Unit | Component | pix-select', function (hooks) {
  setupTest(hooks);

  module('#label', function () {

    test.only('it should throw an error if id is undefined', function (assert) {
      // given
      const componentParams = { label: 'Select label', options: [] };
      const component = createGlimmerComponent('component:pix-select', componentParams);

      // when & then
      const expectedError = new Error(
        'ERROR in PixSelect component, @id param is necessary when giving @label'
      );
      console.log(component, 'component');
      assert.throws(function () {
        component.label;
      }, expectedError);
    });
  });
});
