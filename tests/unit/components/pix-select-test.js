import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Unit | Component | pix-select', function (hooks) {
  setupTest(hooks);

  module('#label', function () {
    test('it should return the label if id is defined', function (assert) {
      // given
      const componentParams = { id: 'Textearea id', label: 'Select label' };
      const component = createGlimmerComponent('component:pix-select', componentParams);

      // when
      const result = component.label;

      // then
      assert.equal(result, 'Select label');
    });

    test('it should throw an error if id is undefined', function (assert) {
      // given
      const componentParams = { label: 'Select label' };
      const component = createGlimmerComponent('component:pix-select', componentParams);

      // when & then
      const expectedError = new Error(
        'ERROR in PixSelect component, @id param is necessary when giving @label'
      );
      assert.throws(function () {
        component.label;
      }, expectedError);
    });
  });
});
