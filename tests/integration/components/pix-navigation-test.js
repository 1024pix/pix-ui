import { render, within } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | pix-navigation', function (hooks) {
  setupRenderingTest(hooks);

  module('Desktop', function () {
    test('it renders the navigation in a sidebar', async function (assert) {
      // when
      const screen = await render(hbs`<PixNavigation @navigationAriaLabel='label' />`);
      const aside = screen.getByRole('complementary');

      // then
      assert.ok(within(aside).getByRole('navigation', { name: 'label' }));
    });

    test('it renders content at the header of the aside', async function (assert) {
      // when
      const screen = await render(hbs`<PixNavigation @navigationAriaLabel='label'>
  <:brand>
    <svg role='img'><title>logo</title></svg>
  </:brand>
</PixNavigation>`);
      const aside = screen.getByRole('complementary');
      const header = within(aside).getByRole('banner');
      // then
      assert.ok(within(header).getByRole('img', { name: 'logo' }));
    });

    test('it renders content in the navigation', async function (assert) {
      // when
      const screen = await render(hbs`<PixNavigation @navigationAriaLabel='label'>
  <:navElements>
    <a href='toto'>mon lien</a>
  </:navElements>
</PixNavigation>`);
      const navBar = screen.getByRole('navigation', { name: 'label' });

      // then
      assert.ok(within(navBar).getByRole('link', { name: 'mon lien' }));
    });

    test('it renders content in the footer', async function (assert) {
      // when
      const screen = await render(hbs`<PixNavigation @navigationAriaLabel='label'>
  <:footer>
    <a href='toto'>mon lien</a>
  </:footer>
</PixNavigation>`);
      const navBar = screen.getByRole('complementary');
      const footer = within(navBar).getByRole('contentinfo');

      // then
      assert.ok(within(footer).getByRole('link', { name: 'mon lien' }));
    });
    test('it hides the burger menu', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixNavigation @navigationAriaLabel='label' @openLabel='open' @closeLabel='close' />`,
      );
      assert.notOk(screen.queryByRole('button', { name: 'menu' }));
    });
  });
});
