import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-block', function(hooks) {
  setupRenderingTest(hooks);

  const BLOCK_SELECTOR = '.pix-block';

  test('it renders the default PixBlock', async function(assert) {
    // when
    await render(hbs`
      <PixBlock>
        Je suis un beau bloc avec une ombre légere
      </PixBlock>
    `);
    const blockElement = this.element.querySelector(BLOCK_SELECTOR);

    // then
    assert.equal(blockElement.textContent.trim(), 'Je suis un beau bloc avec une ombre légere');
    assert.equal(blockElement.className, 'pix-block pix-block--shadow-light');
  });

  test('it can have heavy shadow', async function(assert) {
    // given
    this.set('shadowWeight', 'heavy');

    // when
    await render(hbs`
      <PixBlock @shadow={{this.shadowWeight}}>
        Je suis trop d4rk
      </PixBlock>
    `);
    const blockElement = this.element.querySelector(BLOCK_SELECTOR);

    // then
    assert.equal(blockElement.textContent.trim(), 'Je suis trop d4rk');
    assert.equal(blockElement.className, 'pix-block pix-block--shadow-heavy');
  });

  test('it give light bloc even if there is wrong parameters', async function(assert) {
    // given
    this.set('shadowWeight', 'normal');

    // when
    await render(hbs`
      <PixBlock @shadow={{this.shadowWeight}}>
        Joli bloc quand même
      </PixBlock>
    `);
    const blockElement = this.element.querySelector(BLOCK_SELECTOR);

    // then
    assert.equal(blockElement.textContent.trim(), 'Joli bloc quand même');
    assert.equal(blockElement.className, 'pix-block pix-block--shadow-light');
  });
});
