import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import EmberDebug from '@ember/debug';
import sinon from 'sinon';

module('Integration | Component | pix-return-to', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    sinon.stub(EmberDebug, 'warn');
  });

  hooks.afterEach(function () {
    sinon.restore();
  });

  const RETURN_TO_SELECTOR = '.pix-return-to';

  test('it renders the default PixReturnTo', async function (assert) {
    // when
    await render(hbs`<PixReturnTo @route='home'>Home</PixReturnTo>`);

    // then
    assert.contains('Home');
  });

  test('it renders without text', async function (assert) {
    // when
    await render(hbs`<PixReturnTo @route='home' />`);

    // then
    const pixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
    assert.strictEqual(pixReturnToElement.textContent.trim(), '');
  });

  test('it warns if route param is undefined', async function (assert) {
    // when
    await render(hbs`<PixReturnTo />`);

    // then
    assert.ok(
      EmberDebug.warn
        .getCalls()
        .find((call) => {
          return call.args[0] === 'PixReturnTo: @route param is not provided';
        })
        .calledWith('PixReturnTo: @route param is not provided', false, {
          id: 'pix-ui.returnTo.route.required',
        }),
    );
  });
});
