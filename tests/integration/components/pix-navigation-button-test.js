import { render, within } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

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

  test('it renders an plainIcon icon when @route is current route ', async function (assert) {
    const routerService = this.owner.lookup('service:router');
    sinon.stub(routerService, 'currentRouteName').value('hello');
    console.log(routerService.currentRouteName);
    // when
    const screen = await render(
      hbs`<PixNavigationButton @route='hello' @icon='campaign'>content</PixNavigationButton>`,
    );

    // then
    const link = screen.getByRole('link', { name: 'content' });
    const image = within(link).getByRole('img', { hidden: true });

    assert.ok(image.querySelector('use').getAttribute('href').endsWith('plain'));
  });

  module('when navigation can be shrink', function () {
    test(`should display the PixNavigationShrunkButton component`, async function (assert) {
      // given
      const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
      shrinkNavigationService.isShrunk = true;

      // when
      const screen = await render(
        hbs`<PixNavigationButton @route='hello' @icon='power'>content</PixNavigationButton>`,
      );

      // then
      assert.dom(screen.getByRole('link')).hasClass('navigation-shrunk-button');
    });
  });
});
