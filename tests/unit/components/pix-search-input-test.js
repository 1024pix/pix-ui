import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import sinon from 'sinon';

module('Unit | Component | pix-search-input', function (hooks) {
  setupTest(hooks);

  module('when there are errors in params', function () {
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
