import { render, within } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | PixTabs', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders PixTabs', async function (assert) {
    // given
    const screen = await render(
      hbs`<PixTabs @ariaLabel='Navigation secondaire'><LinkTo @route=''>Lien</LinkTo></PixTabs>`,
    );

    // when
    // then
    const navigation = screen.getByRole('navigation', { name: 'Navigation secondaire' });
    assert.dom(within(navigation).getByText('Lien')).exists();
  });

  module('@variant', function (hooks) {
    let warnStub;

    hooks.beforeEach(function () {
      warnStub = sinon.stub(console, 'warn');
    });

    hooks.afterEach(function () {
      warnStub.restore();
    });

    test('it should warn when @variant is incorrect', async function (assert) {
      // when
      await render(
        hbs`<PixTabs @variant='PIX UI' @ariaLabel='Navigation secondaire'><LinkTo
    @route=''
  >Lien</LinkTo></PixTabs>`,
      );

      // then
      assert.ok(
        warnStub.calledWithExactly(
          'WARNING: PixTabs: @variant "PIX UI" should be certif, orga or primary',
        ),
      );
    });
  });

  module('@ariaLabel', function (hooks) {
    let warnStub;

    hooks.beforeEach(function () {
      warnStub = sinon.stub(console, 'warn');
    });

    hooks.afterEach(function () {
      warnStub.restore();
    });

    test('it should warn when @ariaLabel is not valid', async function (assert) {
      // when
      await render(
        hbs`<PixTabs @variant='orga' @ariaLabel=''><LinkTo @route=''>Lien</LinkTo></PixTabs>`,
      );

      // then
      assert.ok(warnStub.calledWithExactly('WARNING: PixTabs: @ariaLabel is required.'));
    });
  });
});
