import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-block', function (hooks) {
  setupRenderingTest(hooks);

  const BLOCK_SELECTOR = '.pix-block';

  test('it renders the default PixBlock', async function (assert) {
    // when
    await render(hbs`<PixBlock>
  Je suis un beau bloc avec une ombre légere
</PixBlock>`);
    const blockElement = this.element.querySelector(BLOCK_SELECTOR);

    // then
    assert.contains('Je suis un beau bloc avec une ombre légere');
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(blockElement.className, 'pix-block pix-block--shadow-light');
  });

  test('it can have heavy shadow', async function (assert) {
    // given
    this.set('shadowWeight', 'heavy');

    // when
    await render(hbs`<PixBlock @shadow={{this.shadowWeight}}>
  Je suis trop d4rk
</PixBlock>`);
    const blockElement = this.element.querySelector(BLOCK_SELECTOR);

    // then
    assert.contains('Je suis trop d4rk');
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(blockElement.className, 'pix-block pix-block--shadow-heavy');
  });

  test('it give light bloc even if there is wrong parameters', async function (assert) {
    // given
    this.set('shadowWeight', 'normal');

    // when
    await render(hbs`<PixBlock @shadow={{this.shadowWeight}}>
  Joli bloc quand même
</PixBlock>`);
    const blockElement = this.element.querySelector(BLOCK_SELECTOR);

    // then
    assert.contains('Joli bloc quand même');
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(blockElement.className, 'pix-block pix-block--shadow-light');
  });
});
