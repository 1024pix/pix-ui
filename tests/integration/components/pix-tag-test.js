import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-tag', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the given content', async function(assert) {
    await render(hbs`<PixTag>tag text</PixTag>`);

    assert.equal(this.element.textContent.trim(), 'tag text');
  });

  test('it renders with the given color class', async function(assert) {
    await render(hbs`<PixTag @color="purple" />`);

    const pixTagElement = this.element.querySelector('.pix-tag');
    assert.equal(pixTagElement.classList.toString(), 'pix-tag pix-tag--purple');
  });

  test('it renders with attributes override', async function(assert) {
    await render(hbs`<PixTag @color="blue" aria-label="world" />`);

    const pixTagElement = this.element.querySelector('.pix-tag');
    assert.equal(pixTagElement.getAttribute('aria-label'), 'world');
  });
});
