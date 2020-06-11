import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-message', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the given content', async function(assert) {
    await render(hbs`<PixMessage>Message text</PixMessage>`);

    assert.equal(this.element.textContent.trim(), 'Message text');
  });

  test('it renders with the given type', async function(assert) {
    await render(hbs`<PixMessage @type="info" />`);

    const pixMessageElement = this.element.querySelector('.pix-message');
    assert.equal(pixMessageElement.classList.toString(), 'pix-message pix-message--info');
  });

  test('it renders with attributes override', async function(assert) {
    await render(hbs`<PixMessage aria-label="world" />`);

    const pixMessageElement = this.element.querySelector('.pix-message');
    assert.equal(pixMessageElement.getAttribute('aria-label'), 'world');
  });


});
