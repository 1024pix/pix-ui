import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stars', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixStars', async function(assert) {
    // when
    await render(hbs`<PixStars />`);
    const stars = this.element.querySelectorAll('img');

    // then
    assert.equal(stars.length, 0);
  });

  test('it renders a total of 5 empty stars', async function(assert) {
    // when
    await render(hbs`<PixStars @total={{5}}/>`);
    const stars = this.element.querySelectorAll('[data-test-status="unacquired"]');

    // then
    assert.equal(stars.length, 5);
  });

  test('it renders 3 stars acquired on a total of 5', async function(assert) {
    // when
    await render(hbs`<PixStars @count={{3}} @total={{5}}/>`);
    const acquiredStars = this.element.querySelectorAll('[data-test-status="acquired"]');
    const unacquiredStars = this.element.querySelectorAll('[data-test-status="unacquired"]');

    // then
    assert.equal(acquiredStars.length, 3);
    assert.equal(unacquiredStars.length, 2);
  });

  test('it renders alternative message', async function(assert) {
    // when
    await render(hbs`<PixStars @total={{3}} @alt="message"/>`);
    const srOnly = this.element.querySelector('.sr-only');

    // then
    assert.equal(srOnly.textContent.trim(), 'message');
  });

  test('it renders the acquired start but hide unacquired', async function(assert) {
    // when
    await render(hbs`<PixStars @count={{3}} />`);
    const acquiredStars = this.element.querySelectorAll('[data-test-status="acquired"]');
    const unacquiredStars = this.element.querySelectorAll('[data-test-status="unacquired"]');

    // then
    assert.equal(acquiredStars.length, 3);
    assert.equal(unacquiredStars.length, 0);
  });

  test('it renders the color', async function(assert) {
    // when
    await render(hbs`<PixStars @count={{3}} @total={{5}} @color="blue" />`);
    const component = this.element.querySelector('.pix-stars--blue');

    // then
    assert.ok(component);
  });
});
