import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-tag', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given content', async function (assert) {
    await render(hbs`<PixTag>tag text</PixTag>`);

    assert.contains('tag text');
  });

  test('it renders with the given color class', async function (assert) {
    await render(hbs`<PixTag @color='primary' />`);

    const pixTagElement = this.element.querySelector('.pix-tag');
    assert.ok(pixTagElement.classList.contains('pix-tag--primary'));
  });

  test('it renders with attributes override', async function (assert) {
    const screen = await render(hbs`<PixTag @color='secondary' aria-label='world' />`);

    assert.dom(screen.getByLabelText('world')).exists();
  });
});
