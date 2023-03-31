import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stars', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixStars', async function (assert) {
    // when
    await render(hbs`<PixStars />`);
    const stars = this.element.querySelectorAll('.pix-stars__item');

    // then
    assert.strictEqual(stars.length, 0);
  });

  test('it renders a total of 5 empty stars', async function (assert) {
    // when
    await render(hbs`<PixStars @total={{5}} />`);
    const stars = this.element.querySelectorAll('.pix-stars__item');
    const acquiredStars = this.element.querySelectorAll('[data-acquired]');

    // then
    assert.strictEqual(stars.length, 5);
    assert.strictEqual(acquiredStars.length, 0);
  });

  test('it renders 3 stars acquired on a total of 5', async function (assert) {
    // when
    await render(hbs`<PixStars @count={{3}} @total={{5}} />`);
    const stars = this.element.querySelectorAll('.pix-stars__item');
    const acquiredStars = this.element.querySelectorAll('[data-acquired]');

    // then
    assert.strictEqual(stars.length, 5);
    assert.strictEqual(acquiredStars.length, 3);
  });

  test('it renders message', async function (assert) {
    // when
    const screen = await render(hbs`<PixStars @total={{3}} @alt='message' />`);
    // then
    assert.dom(screen.getByText('message')).exists();
  });

  test('it renders the acquired start but hide unacquired', async function (assert) {
    // when
    await render(hbs`<PixStars @count={{3}} />`);
    const stars = this.element.querySelectorAll('.pix-stars__item');
    const acquiredStars = this.element.querySelectorAll('[data-acquired]');

    // then
    assert.strictEqual(stars.length, 3);
    assert.strictEqual(acquiredStars.length, 3);
  });

  test('it renders the color', async function (assert) {
    // when
    await render(hbs`<PixStars @count={{3}} @total={{5}} @color='blue' />`);
    const component = this.element.querySelector('.pix-stars__item--color-blue');

    // then
    assert.ok(component);
  });
});
