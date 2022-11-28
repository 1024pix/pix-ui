import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

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
    assert.equal(backgroundHeaderElement.className, 'pix-background-header');
    assert.equal(backgroundElement.className, 'pix-background-header__background');
  });

  module('when there is PixBloc inside PixBackgroundHeader component', function () {
    test('first PixBlock render', async function (assert) {
      // given
      this.set('shadowWeight', 'heavy');

      // when
      await render(hbs`<PixBackgroundHeader>
  <PixBlock @shadow={{this.shadowWeight}}>Je suis un beau bloc foncé</PixBlock>
  <PixBlock>Je suis un deuxième bloc</PixBlock>
</PixBackgroundHeader>`);
      const firstBlockElement = this.element.querySelector(BACKGROUND_CONTENT_SELECTOR).children[0];
      const lastBlockElement = this.element.querySelector(BACKGROUND_CONTENT_SELECTOR).children[1];

      // then
      assert.equal(firstBlockElement.className, 'pix-block pix-block--shadow-heavy');
      assert.contains('Je suis un beau bloc foncé');
      assert.equal(lastBlockElement.className, 'pix-block pix-block--shadow-light');
      assert.contains('Je suis un deuxième bloc');
    });
  });
});
