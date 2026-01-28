import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | pix-background-header', function (hooks) {
  setupRenderingTest(hooks);

  const BACKGROUND_HEADER_SELECTOR = '.pix-background-header';
  const BACKGROUND_SELECTOR = `${BACKGROUND_HEADER_SELECTOR} .pix-background-header__background`;
  const BACKGROUND_CONTENT_SELECTOR = `${BACKGROUND_HEADER_SELECTOR} .pix-background-header__content`;

  test('it renders the default PixBackgroundHeader', async function (assert) {
    // when
    await render(hbs`<PixBackgroundHeader>
  Je suis un beau background bleu
</PixBackgroundHeader>`);
    const backgroundHeaderElement = this.element.querySelector(BACKGROUND_HEADER_SELECTOR);
    const backgroundElement = this.element.querySelector(BACKGROUND_SELECTOR);

    // then
    assert.contains('Je suis un beau background bleu');
    assert.strictEqual(backgroundHeaderElement.className, 'pix-background-header');
    assert.strictEqual(backgroundElement.className, 'pix-background-header__background');
  });

  module('when there is PixBlock inside PixBackgroundHeader component', function () {
    test('first PixBlock render', async function (assert) {
      // given
      // when
      await render(hbs`<PixBackgroundHeader>
  <PixBlock>Je suis un bloc commun</PixBlock>
  <PixBlock @variant='admin'>Je suis un bloc pour Pix Admin</PixBlock>
</PixBackgroundHeader>`);
      const firstBlockElement = this.element.querySelector(BACKGROUND_CONTENT_SELECTOR).children[0];
      const lastBlockElement = this.element.querySelector(BACKGROUND_CONTENT_SELECTOR).children[1];

      // then
      assert.strictEqual(firstBlockElement.className, 'pix-block pix-block--primary');
      assert.contains('Je suis un bloc commun');
      assert.strictEqual(lastBlockElement.className, 'pix-block pix-block--admin');
      assert.contains('Je suis un bloc pour Pix Admin');
    });
  });
});
