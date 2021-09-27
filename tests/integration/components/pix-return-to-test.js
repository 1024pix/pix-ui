import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-return-to', function(hooks) {
  setupRenderingTest(hooks);

  const RETURN_TO_SELECTOR = '.pix-return-to';

  test('it renders the default PixReturnTo', async function(assert) {
    // when
    await render(hbs`<PixReturnTo @route='home'>Home</PixReturnTo> `);
    
    // then
    const pixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
    assert.contains('Home');
    assert.ok(pixReturnToElement.classList.toString().includes('pix-return-to pix-return-to--black'));
  });

  test('it renders with the given shade', async function(assert) {
    // when
    await render(hbs`<PixReturnTo @route='home' @shade="white" />`);

    // then
    const pixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
    assert.ok(pixReturnToElement.classList.toString().includes('pix-return-to pix-return-to--white'));
  });

  test('it renders without text', async function(assert) {
    // when
    await render(hbs`<PixReturnTo @route='home' />`);

    // then
    const pixReturnToElement = this.element.querySelector(RETURN_TO_SELECTOR);
    assert.equal(pixReturnToElement.textContent.trim(), '');
  });
});
