import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Unit | Component | pix-return-to', function (hooks) {
  setupTest(hooks);

  test('its default color is black', function (assert) {
    // given
    const componentParams = { route: 'uneRoute', shade: 'test' };
    const expectedShade = 'neutral-dark';
    const component = createGlimmerComponent('pix-return-to', componentParams);

    // when & then
    assert.strictEqual(component.shade, expectedShade);
  });

  test('it can be white', function (assert) {
    // given
    const componentParams = { route: 'uneRoute', shade: 'neutral-light' };
    const expectedShade = 'neutral-light';
    const component = createGlimmerComponent('pix-return-to', componentParams);

    // when & then
    assert.strictEqual(component.shade, expectedShade);
  });
});
