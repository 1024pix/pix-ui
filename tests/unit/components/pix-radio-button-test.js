import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Unit | Component | PixRadioButton', function (hooks) {
  setupTest(hooks);

  module('#isDisabled', function () {
    module('when @isDisabled is a boolean', function () {
      module('when @isDisabled is true', function () {
        test('it should return "true"', function (assert) {
          // given
          const isDisabled = true;
          const component = createGlimmerComponent('pix-radio-button', { isDisabled });

          // when
          const result = component.isDisabled;

          // then
          assert.strictEqual(result, 'true');
        });
      });

      module('when @isDisabled is false', function () {
        test('it should return null', function (assert) {
          // given
          const isDisabled = false;
          const component = createGlimmerComponent('pix-radio-button', { isDisabled });

          // when
          const result = component.isDisabled;

          // then
          assert.strictEqual(result, null);
        });
      });
    });

    module('when @isDisabled is a string', function () {
      module('when @isDisabled is "true"', function () {
        test('it should return "true"', function (assert) {
          // given
          const isDisabled = 'true';
          const component = createGlimmerComponent('pix-radio-button', { isDisabled });

          // when
          const result = component.isDisabled;

          // then
          assert.strictEqual(result, 'true');
        });
      });

      module('when @isDisabled is "false"', function () {
        test('it should return "true"', function (assert) {
          // given
          const isDisabled = 'false';
          const component = createGlimmerComponent('pix-radio-button', { isDisabled });

          // when
          const result = component.isDisabled;

          // then
          assert.strictEqual(result, 'true');
        });
      });
    });
  });

  module('#stateWarning', function () {
    module('when @isDisabled is false and @state is success', function () {
      test('it should return false', function (assert) {
        // given
        const isDisabled = false;
        const state = 'success';
        const component = createGlimmerComponent('pix-radio-button', { isDisabled, state });

        // when
        const result = component.stateWarning;

        // then
        assert.false(result);
      });
    });
  });
});
