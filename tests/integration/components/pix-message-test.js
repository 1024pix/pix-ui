import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-message', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the given content', async function(assert) {
    // given
    await render(hbs`<PixMessage>Message text</PixMessage>`);

    // when & then
    assert.equal(this.element.textContent.trim(), 'Message text');
  });

  test('it renders with the given type', async function(assert) {
    // given
    await render(hbs`<PixMessage @type="info" />`);

    // when & then
    const pixMessageElement = this.element.querySelector('.pix-message');
    assert.equal(pixMessageElement.classList.toString(), 'pix-message pix-message--info');
  });

  test('it renders with attributes override', async function(assert) {
    // given
    await render(hbs`<PixMessage aria-label="world" />`);

    // when & then
    const pixMessageElement = this.element.querySelector('.pix-message');
    assert.equal(pixMessageElement.getAttribute('aria-label'), 'world');
  });

  test('it renders with an icon', async function(assert) {
    // given
    await render(hbs`<PixMessage @withIcon="true" />`);

    // when & then
    const icon = this.element.querySelector('.pix-message svg');
    assert.dom('.pix-message svg').exists();
    assert.equal(icon.getAttribute('data-icon'), 'info-circle');
  });

  test('it renders with a warning icon for warning type', async function(assert) {
    // given
    await render(hbs`<PixMessage @type="warning" @withIcon="true" />`);

    // when & then
    const icon = this.element.querySelector('.pix-message svg');
    assert.dom('.pix-message svg').exists();
    assert.equal(icon.getAttribute('data-icon'), 'exclamation-circle');
  });

  test('it renders with a success icon for success type', async function(assert) {
    // given
    await render(hbs`<PixMessage @type="success" @withIcon="true" />`);

    // when & then
    const icon = this.element.querySelector('.pix-message svg');
    assert.dom('.pix-message svg').exists();
    assert.equal(icon.getAttribute('data-icon'), 'check-circle');
  });

  test('it renders with a alert icon for error type', async function(assert) {
    // given
    await render(hbs`<PixMessage @type="error" @withIcon="true" />`);

    // when & then
    const icon = this.element.querySelector('.pix-message svg');
    assert.dom('.pix-message svg').exists();
    assert.equal(icon.getAttribute('data-icon'), 'exclamation-triangle');
  });

  test('it renders with a alert icon for alert type', async function(assert) {
    // given
    await render(hbs`<PixMessage @type="alert" @withIcon="true" />`);

    // when & then
    const icon = this.element.querySelector('.pix-message svg');
    assert.dom('.pix-message svg').exists();
    assert.equal(icon.getAttribute('data-icon'), 'exclamation-triangle');
  });
});
