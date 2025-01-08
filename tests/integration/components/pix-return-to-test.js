import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | pix-return-to', function (hooks) {
  let warnStub;

  hooks.beforeEach(function () {
    warnStub = sinon.stub(console, 'warn');
  });

  hooks.afterEach(function () {
    warnStub.restore();
  });

  setupRenderingTest(hooks);
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
    assert.ok(warnStub.calledWith('WARNING: PixReturnTo: @route param is not provided'));
  });
});
