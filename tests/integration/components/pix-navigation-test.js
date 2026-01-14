import { render, within } from '@1024pix/ember-testing-library';
import { click, settled } from '@ember/test-helpers';
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

    module('when navigation can be shrink', function () {
      test(`should display the button`, async function (assert) {
        // given
        const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
        shrinkNavigationService.canNavigationBeShrunk = true;

        // when
        const screen = await render(
          hbs`<PixNavigation @navigationAriaLabel='label' @openLabel='open' @closeLabel='close' />`,
        );

        // then
        assert
          .dom(screen.getByRole('button', { name: 'Réduire la largeur du menu de navigation' }))
          .exists();
      });

      module(`when the shrink button is clicked`, function () {
        test(`should display an other aria label`, async function (assert) {
          // given
          const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
          shrinkNavigationService.canNavigationBeShrunk = true;

          // when
          const screen = await render(
            hbs`<PixNavigation @navigationAriaLabel='label' @openLabel='open' @closeLabel='close' />`,
          );
          await click(
            screen.getByRole('button', { name: 'Réduire la largeur du menu de navigation' }),
          );

          // then
          assert
            .dom(
              screen.getByRole('button', {
                name: 'Revenir à la largeur initiale du menu de navigation',
              }),
            )
            .exists();
        });
      });
    });
  });

  module('Mobile', function () {
    module('when a button is disabled on menu', function () {
      test('it should not close the menu when clicking on this button', async function (assert) {
        // given
        const disabledButtonLabel = 'bouton désactivé';
        this.set('label', disabledButtonLabel);

        // when
        const screen = await render(
          hbs`<PixNavigation @navigationAriaLabel='label' @openLabel='open' @closeLabel='close'>
  <:navElements>
    <PixButton
      aria-disabled='true'
      @iconBefore='cancel'
      @isDisabled={{true}}
      @variant='primary'
    ><span>{{this.label}}</span></PixButton>
  </:navElements>
</PixNavigation>`,
        );

        const openMenuButton = screen.getByText('open').closest('button');

        await click(openMenuButton);

        const spanElement = screen.getByText(this.label);
        await click(spanElement);

        // then
        assert.ok(screen.queryByText('close'));
      });
    });

    test('it should close the menu on route change', async function (assert) {
      // given
      const router = this.owner.lookup('service:router');

      const screen = await render(
        hbs`<PixNavigation @navigationAriaLabel='label' @openLabel='open' @closeLabel='close' />`,
      );

      // when
      const openMenuButton = screen.getByText('open').closest('button');
      await click(openMenuButton);

      router.trigger('routeDidChange');
      await settled();

      // then
      assert.ok(screen.getByText('open').closest('button'));
      assert.notOk(screen.queryByText('close'));
    });
  });
});
