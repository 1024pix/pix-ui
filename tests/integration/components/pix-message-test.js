import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-message', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given content', async function (assert) {
    // given & when
    await render(hbs`<PixMessage>Message text</PixMessage>`);

    // then
    assert.contains('Message text');
  });

  test('it renders with the given type', async function (assert) {
    // given & when
    await render(hbs`<PixMessage @type='info' />`);

    // then
    const pixMessageElement = this.element.querySelector('.pix-message');
    assert.equal(pixMessageElement.classList.toString(), 'pix-message pix-message--info');
  });

  test('it renders with attributes override', async function (assert) {
    // given & when
    await render(hbs`<PixMessage aria-label='world' />`);

    // then
    const pixMessageElement = this.element.querySelector('.pix-message');
    assert.equal(pixMessageElement.getAttribute('aria-label'), 'world');
  });

  test('it renders with an icon', async function (assert) {
    // given & when
    await render(hbs`<PixMessage @withIcon='true' />`);

    // then
    const icon = this.element.querySelector('.pix-message svg');
    assert.dom('.pix-message svg').exists();
    assert.equal(icon.getAttribute('data-icon'), 'circle-info');
  });

  test('it renders with a warning icon for warning type', async function (assert) {
    // given & when
    await render(hbs`<PixMessage @type='warning' @withIcon='true' />`);

    // then
    const icon = this.element.querySelector('.pix-message svg');
    assert.dom('.pix-message svg').exists();
    assert.equal(icon.getAttribute('data-icon'), 'circle-exclamation');
  });

  test('it renders with a success icon for success type', async function (assert) {
    // given & when
    await render(hbs`<PixMessage @type='success' @withIcon='true' />`);

    // then
    const icon = this.element.querySelector('.pix-message svg');
    assert.dom('.pix-message svg').exists();
    assert.equal(icon.getAttribute('data-icon'), 'circle-check');
  });

  test('it renders with a alert icon for error type', async function (assert) {
    // given & when
    await render(hbs`<PixMessage @type='error' @withIcon='true' />`);

    // then
    const icon = this.element.querySelector('.pix-message svg');
    assert.dom('.pix-message svg').exists();
    assert.equal(icon.getAttribute('data-icon'), 'triangle-exclamation');
  });
});
