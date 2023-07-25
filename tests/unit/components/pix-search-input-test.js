import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import sinon from 'sinon';

module('Unit | Component | pix-search-select', function (hooks) {
  setupTest(hooks);

  module('when there are errors in params', function () {
    test('it should throw an error if there is neither a label nor an ariaLabel param', async function (assert) {
      // given
      const componentParams = {
        label: null,
        ariaLabel: null,
        debounceTimeInMs: 1000,
        triggerFiltering: sinon.stub(),
      };

      // when & then
      const expectedError = new Error(
        'ERROR in PixSearchInput component, you must provide @label or @ariaLabel params',
      );
      assert.throws(function () {
        createGlimmerComponent('pix-search-input', componentParams);
      }, expectedError);
      assert.throws(function () {
        createGlimmerComponent('pix-search-input', componentParams);
      }, expectedError);
    });

    test('it should throw an error if there is no triggerFiltering given', async function (assert) {
      // given
      const componentParams = {
        label: 'Super label',
        debounceTimeInMs: 1000,
        triggerFiltering: null,
      };

      // when & then
      assert.throws(function () {
        createGlimmerComponent('pix-search-input', componentParams);
      }, new Error('ERROR in PixSearchInput component, @triggerFiltering param is not provided'));
    });

    test('it should throw an error if there is no debounce time given', async function (assert) {
      // given
      const componentParams = {
        label: 'Super label',
        debounceTimeInMs: null,
        triggerFiltering: sinon.stub(),
      };

      // when & then
      assert.throws(function () {
        createGlimmerComponent('pix-search-input', componentParams);
      }, new Error('ERROR in PixSearchInput component, @debounceTimeInMs param is not provided'));
    });
  });
});
