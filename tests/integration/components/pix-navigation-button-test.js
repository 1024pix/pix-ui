import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, within } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-navigation-button', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.owner.setupRouter();
  });
  test('it renders an HTML link', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixNavigationButton href='https://pix.fr'>content</PixNavigationButton>`,
    );

    // then
    const link = screen.getByRole('link', { name: 'content' });
    assert.strictEqual(link.getAttribute('href'), 'https://pix.fr');
  });

  test('it renders an icon for an HTML link ', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixNavigationButton
  href='https://pix.fr'
  title='pix.fr'
  @target='_blank'
>content</PixNavigationButton>`,
    );

    // then
    const link = screen.getByRole('link', { name: 'content' });
    assert.ok(within(link).getByRole('img', { hidden: true }));
  });

  test('it renders an EmberJS link', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixNavigationButton @route='hello'>content</PixNavigationButton>`,
    );

    // then
    const link = screen.getByRole('link', { name: 'content' });
    assert.strictEqual(link.getAttribute('href'), '/hello-world');
  });

  test('it renders an EmberJS link  with model', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixNavigationButton @route='bye' @model='bye'>content</PixNavigationButton>`,
    );

    // then
    const link = screen.getByRole('link', { name: 'content' });
    assert.strictEqual(link.getAttribute('href'), '/bye/bye');
  });

  test('it renders an EmberJS link  with model and query params', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixNavigationButton
  @route='bye'
  @model='bye'
  @query={{hash page=3 per_page=20}}
>content</PixNavigationButton>`,
    );

    // then
    const link = screen.getByRole('link', { name: 'content' });
    assert.strictEqual(link.getAttribute('href'), '/bye/bye?page=3&per_page=20');
  });

  test('it renders an icon', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixNavigationButton @route='hello' @icon='coversionPath'>content</PixNavigationButton>`,
    );

    // then
    const link = screen.getByRole('link', { name: 'content' });
    assert.ok(within(link).getByRole('img', { hidden: true }));
  });
});
