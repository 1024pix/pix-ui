import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
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
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(pixMessageElement.classList.toString(), 'pix-message pix-message--info');
  });

  test('it renders with attributes override', async function (assert) {
    // given & when
    await render(hbs`<PixMessage aria-label='world' />`);

    // then
    const pixMessageElement = this.element.querySelector('.pix-message');
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(pixMessageElement.getAttribute('aria-label'), 'world');
  });

  test('it renders with an icon', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixMessage @withIcon='true' />`);

    // then
    const icon = screen.getByRole('img', { hidden: true });

    assert.true(icon.innerHTML.includes('info'));
  });

  test('it renders with a warning icon for warning type', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixMessage @type='warning' @withIcon='true' />`);

    // then
    const icon = screen.getByRole('img', { hidden: true });

    assert.true(icon.innerHTML.includes('#warning'));
  });

  test('it renders with a success icon for success type', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixMessage @type='success' @withIcon='true' />`);

    // then
    const icon = screen.getByRole('img', { hidden: true });

    assert.true(icon.innerHTML.includes('#check_circle'));
  });

  test('it renders with a alert icon for error type', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixMessage @type='error' @withIcon='true' />`);

    // then
    const icon = screen.getByRole('img', { hidden: true });

    assert.true(icon.innerHTML.includes('#error'));
  });
});
