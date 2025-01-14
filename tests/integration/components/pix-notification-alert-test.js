import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | pixNotificationAlert', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given content', async function (assert) {
    // given & when
    await render(hbs`<PixNotificationAlert>Message text</PixNotificationAlert>`);

    // then
    assert.contains('Message text');
  });

  test('it renders with the given type', async function (assert) {
    // given & when
    await render(hbs`<PixNotificationAlert @type='info' />`);

    // then
    const pixNotificationAlertElement = this.element.querySelector('.pix-notification-alert');
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(
      pixNotificationAlertElement.classList.toString(),
      'pix-notification-alert pix-notification-alert--info',
    );
  });

  test('it renders with attributes override', async function (assert) {
    // given & when
    await render(hbs`<PixNotificationAlert aria-label='world' />`);

    // then
    const pixNotificationAlertElement = this.element.querySelector('.pix-notification-alert');
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(pixNotificationAlertElement.getAttribute('aria-label'), 'world');
  });

  test('it renders with an icon', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixNotificationAlert @withIcon='true' />`);

    // then
    const icon = screen.getByRole('img', { hidden: true });

    assert.true(icon.innerHTML.includes('info'));
  });

  test('it renders with a warning icon for warning type', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixNotificationAlert @type='warning' @withIcon='true' />`);

    // then
    const icon = screen.getByRole('img', { hidden: true });

    assert.true(icon.innerHTML.includes('#warning'));
  });

  test('it renders with a success icon for success type', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixNotificationAlert @type='success' @withIcon='true' />`);

    // then
    const icon = screen.getByRole('img', { hidden: true });

    assert.true(icon.innerHTML.includes('#checkCircle'));
  });

  test('it renders with a alert icon for error type', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixNotificationAlert @type='error' @withIcon='true' />`);

    // then
    const icon = screen.getByRole('img', { hidden: true });

    assert.true(icon.innerHTML.includes('#error'));
  });

  ['communication', 'communication-certif', 'communication-orga'].forEach((type) => {
    test(`it renders with a "campaign" icon for ${type} type`, async function (assert) {
      // given
      this.set('type', type);

      // when
      const screen = await render(
        hbs`<PixNotificationAlert @type={{this.type}} @withIcon='true' />`,
      );

      // then
      const icon = screen.getByRole('img', { hidden: true });
      const container = screen.getByRole('paragraph');

      assert.true(icon.innerHTML.includes('#campaign'));
      assert.true(container.classList.contains(`pix-notification-alert--${type}`));
    });
  });
});
