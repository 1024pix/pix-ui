import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-link-back', function(hooks) {
  setupRenderingTest(hooks);

  const LINK_BACK_SELECTOR = '.pix-link-back';

  test('it renders the default PixLinkBack', async function(assert) {
    // when
    await render(hbs`<PixLinkBack @route='home' @text='Home' />`);
    
    // then
    const pixLinkBackElement = this.element.querySelector(LINK_BACK_SELECTOR);
    assert.equal(pixLinkBackElement.textContent.trim(), 'Home');
    assert.ok(pixLinkBackElement.classList.toString().includes('pix-link-back pix-link-back--black'));
  });

  test('it renders with the given shade', async function(assert) {
    // when
    await render(hbs`<PixLinkBack @route='home' @shade="white" />`);

    // then
    const pixLinkBackElement = this.element.querySelector(LINK_BACK_SELECTOR);
    assert.ok(pixLinkBackElement.classList.toString().includes('pix-link-back pix-link-back--white'));
  });

  test('it renders without text', async function(assert) {
    // when
    await render(hbs`<PixLinkBack @route='home' />`);

    // then
    const pixLinkBackElement = this.element.querySelector(LINK_BACK_SELECTOR);
    assert.equal(pixLinkBackElement.textContent.trim(), '');
  });
});
