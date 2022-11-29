import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-tag', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given content', async function (assert) {
    await render(hbs`<PixTag>tag text</PixTag>`);

    assert.contains('tag text');
  });

  test('it renders with the given color class', async function (assert) {
    await render(hbs`<PixTag @color='purple' />`);

    const pixTagElement = this.element.querySelector('.pix-tag');
    assert.ok(pixTagElement.classList.contains('pix-tag--purple'));
  });

  test('it renders a compact tag', async function (assert) {
    await render(hbs`<PixTag @compact={{true}} />`);

    const pixTagElement = this.element.querySelector('.pix-tag');
    assert.ok(pixTagElement.classList.contains('pix-tag--compact'));
  });

  test('it renders with attributes override', async function (assert) {
    await render(hbs`<PixTag @color='blue' aria-label='world' />`);

    const pixTagElement = this.element.querySelector('.pix-tag');
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(pixTagElement.getAttribute('aria-label'), 'world');
  });
});
