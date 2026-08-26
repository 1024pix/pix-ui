import { render, within } from '@1024pix/ember-testing-library';
import { click, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | pix-navigation', function (hooks) {
  setupRenderingTest(hooks);
  const texts = {
    mainNavigation: 'Navigation Principale',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    shrinkNavigation: 'Réduire la largeur',
    expandNavigation: 'Revenir à la largeur initiale',
  };

  module('Desktop', function () {
    test('it renders the navigation in a sidebar', async function (assert) {
      //given
      this.set('texts', texts);

      // when
      const screen = await render(
        hbs`<PixNavigation @navigationAriaLabel='label' @texts={{this.texts}} />`,
      );
      const aside = screen.getByRole('complementary');

      // then
      assert.ok(within(aside).getByRole('navigation', { name: texts.mainNavigation }));
    });

    test('it renders content at the header of the aside', async function (assert) {
      //given
      this.set('texts', texts);

      // when
      const screen = await render(hbs`<PixNavigation @texts={{this.texts}}>
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
      //given
      this.set('texts', texts);

      // when
      const screen = await render(hbs`<PixNavigation @texts={{this.texts}}>
  <:navElements>
    <a href='toto'>mon lien</a>
  </:navElements>
</PixNavigation>`);
      const navBar = screen.getByRole('navigation', { name: 'Navigation Principale' });

      // then
      assert.ok(within(navBar).getByRole('link', { name: 'mon lien' }));
    });

    test('it renders content in the footer', async function (assert) {
      //given
      this.set('texts', texts);

      // when
      const screen = await render(hbs`<PixNavigation @texts={{this.texts}}>
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
      //given
      this.set('texts', texts);

      // when
      const screen = await render(hbs`<PixNavigation @texts={{this.texts}} />`);
      assert.notOk(screen.queryByRole('button', { name: 'Ouvrir le menu' }));
    });

    module('when navigation can be shrink', function () {
      test(`should display the button`, async function (assert) {
        // given
        const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
        shrinkNavigationService.canNavigationBeShrunk = true;
        this.set('texts', texts);

        // when
        const screen = await render(hbs`<PixNavigation @texts={{this.texts}} />`);

        // then
        assert.dom(screen.getByRole('button', { name: texts.shrinkNavigation })).exists();
      });

      module(`when the shrink button is clicked`, function () {
        test(`should display an other aria label`, async function (assert) {
          // given
          const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
          shrinkNavigationService.canNavigationBeShrunk = true;
          this.set('texts', texts);

          // when
          const screen = await render(hbs`<PixNavigation @texts={{this.texts}} />`);
          await click(screen.getByRole('button', { name: texts.shrinkNavigation }));

          // then
          assert
            .dom(
              screen.getByRole('button', {
                name: texts.expandkNavigation,
              }),
            )
            .exists();
        });

        test(`should hide footer elements except the navigation button`, async function (assert) {
          // given
          const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');
          shrinkNavigationService.canNavigationBeShrunk = true;
          this.set('triggerAction', () => {});
          this.set('texts', texts);

          // when
          const screen = await render(
            hbs`<PixNavigation @texts={{this.texts}}>
  <:footer>
    <p>
      Martin Dupond
    </p>
    <PixNavigationButton @icon='power' @triggerAction={{this.triggerAction}}>Se déconnecter</PixNavigationButton>
  </:footer>
</PixNavigation>`,
          );

          await click(screen.getByRole('button', { name: texts.shrinkNavigation }));

          // then
          assert.dom(screen.getByText('Martin Dupond')).isNotVisible();
          assert.dom(screen.getByText('Se déconnecter')).isVisible();
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
        this.set('texts', texts);
        // when
        const screen = await render(
          hbs`<PixNavigation @texts={{this.texts}}>
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

        const openMenuButton = screen.getByText(texts.openMenu).closest('button');

        await click(openMenuButton);

        const spanElement = screen.getByText(this.label);
        await click(spanElement);

        // then
        assert.ok(screen.queryByText(texts.closeMenu));
      });
    });

    test('it should close the menu on route change', async function (assert) {
      // given
      this.set('texts', texts);
      const router = this.owner.lookup('service:router');

      const screen = await render(hbs`<PixNavigation @texts={{this.texts}} />`);

      // when
      const openMenuButton = screen.getByText(texts.openMenu).closest('button');
      await click(openMenuButton);

      router.trigger('routeDidChange');
      await settled();

      // then
      assert.notOk(screen.queryByText(texts.closeMenu));
      assert.ok(screen.getByText(texts.openMenu).closest('button'));
    });
  });
});
