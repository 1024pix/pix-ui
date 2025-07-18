import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | pix-block', function (hooks) {
  setupRenderingTest(hooks);

  const BLOCK_SELECTOR = '.pix-block';

  test('it renders the PixBlock', async function (assert) {
    // when
    await render(hbs`<PixBlock @variant='certif' @condensed={{false}}>
  Je suis un beau bloc
</PixBlock>`);
    const blockElement = this.element.querySelector(BLOCK_SELECTOR);

    // then
    assert.contains('Je suis un beau bloc');
    assert.strictEqual(blockElement.className, 'pix-block pix-block--certif');
  });

  module('when @variant parameter is not given', function (hooks) {
    let warnStub;

    hooks.beforeEach(function () {
      warnStub = sinon.stub(console, 'warn');
    });

    hooks.afterEach(function () {
      warnStub.restore();
    });

    test('it renders the primary PixBlock', async function (assert) {
      // when
      await render(hbs`<PixBlock>
  Je suis un beau bloc
</PixBlock>`);
      const blockElement = this.element.querySelector(BLOCK_SELECTOR);

      // then
      assert.contains('Je suis un beau bloc');
      assert.strictEqual(blockElement.className, 'pix-block pix-block--primary');
    });

    test('it should warn', async function (assert) {
      // when
      await render(hbs`<PixBlock @variant='PIX APP'>Coucou</PixBlock>`);

      // thenc
      assert.ok(
        warnStub.calledWithExactly(
          'WARNING: PixBlock: @variant "PIX APP" should be primary, orga, certif, admin',
        ),
      );
    });
  });

  module('when @condensed parameter is true', function (hooks) {
    let warnStub;

    hooks.beforeEach(function () {
      warnStub = sinon.stub(console, 'warn');
    });

    hooks.afterEach(function () {
      warnStub.restore();
    });

    test('it renders the condensed PixBlock', async function (assert) {
      // when
      await render(hbs`<PixBlock @condensed={{true}}>
  Je suis un beau bloc
</PixBlock>`);
      const blockElement = this.element.querySelector(BLOCK_SELECTOR);

      // then
      assert.contains('Je suis un beau bloc');
      assert.strictEqual(
        blockElement.className,
        'pix-block pix-block--primary pix-block--condensed',
      );
    });
  });
});
