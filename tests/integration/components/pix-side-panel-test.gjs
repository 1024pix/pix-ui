import { render } from '@1024pix/ember-testing-library';
import PixSidePanel from '@1024pix/pix-ui/components/pix-side-panel';
import { click, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | SidePanel', function (hooks) {
  setupRenderingTest(hooks);

  module('when showSidePanel is equal true', function () {
    test('it renders the default PixSidePanel', async function (assert) {
      // given
      this.title = "It's a sidepanel!";
      this.showSidePanel = true;

      // when
      const screen =
        await render(hbs`<PixSidePanel @title={{this.title}} @showSidePanel={{this.showSidePanel}}>
  <:content>
    content
  </:content>
  <:footer>
    footer
  </:footer>
</PixSidePanel>`);

      // then
      assert.ok(screen.getByRole('dialog'));
      assert.ok(screen.getByRole('heading', { name: this.title }));
      assert.contains('content');
      assert.contains('footer');
    });

    test('it should slide in from the right edge of the screen', async function (assert) {
      // given
      this.title = "It's a sidepanel!";

      // when
      const screen = await render(hbs`<PixSidePanel @title={{this.title}} @showSidePanel={{true}}>
  <:content>
    content
  </:content>
</PixSidePanel>`);
      const title = screen.getByRole('heading', { name: this.title });
      const leftOnOpening = title.getBoundingClientRect().left;
      await Promise.all(
        screen
          .getByRole('dialog')
          .getAnimations({ subtree: true })
          .map((animation) => animation.finished),
      );

      // then
      assert.true(
        leftOnOpening > title.getBoundingClientRect().left,
        'the side panel travels from the right edge instead of appearing in place',
      );
    });

    module('when close button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        const title = 'Close me baby one more time';
        const showSidePanel = true;
        const onClose = sinon.stub();

        // when
        const screen = await render(
          <template>
            <PixSidePanel @title={{title}} @onClose={{onClose}} @showSidePanel={{showSidePanel}}>
              <:content>
                content
              </:content>
            </PixSidePanel>
          </template>,
        );

        await click(screen.getByRole('button', { name: /Fermer/ }));

        // then
        assert.ok(onClose.calledOnce);
      });
    });

    module('when the cancel event is triggered (escape key)', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        const title = 'Close me baby one more time';
        const showSidePanel = true;
        const onClose = sinon.stub();

        // when
        const screen = await render(
          <template>
            <PixSidePanel @title={{title}} @onClose={{onClose}} @showSidePanel={{showSidePanel}}>
              <:content>
                content
              </:content>
            </PixSidePanel>
          </template>,
        );
        await triggerEvent(screen.getByRole('dialog'), 'cancel');

        // then
        assert.ok(onClose.calledOnce);
      });
    });
  });

  module('when showSidePanel is false', function () {
    test('it should not show sidepanel', async function (assert) {
      // given
      const title = "It's a sidepanel!";
      const showSidePanel = false;

      // when
      const screen = await render(
        <template>
          <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}}>
            <:content>
              content
            </:content>
            <:footer>
              footer
            </:footer>
          </PixSidePanel>
        </template>,
      );

      // then
      assert.notOk(screen.queryByRole('dialog'));
      assert.notOk(screen.queryByRole('heading', { name: title }));
    });
  });

  module('variants', function () {
    module('when variant is not provided', function () {
      test('it should apply default style for global and footer', async function (assert) {
        // given
        const title = 'SidePanel with no variant';
        const showSidePanel = true;

        // when
        const screen = await render(
          <template>
            <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}}>
              <:content>
                content
              </:content>
              <:footer>
                footer
              </:footer>
            </PixSidePanel>
          </template>,
        );

        // then
        const dialog = screen.getByRole('dialog', { name: 'SidePanel with no variant' });
        const footer = this.element.querySelector('.pix-side-panel__footer');

        assert.dom(dialog.querySelector('.pix-side-panel')).hasClass('pix-side-panel--default');
        assert.dom(footer).hasClass('pix-side-panel__footer--default');
      });
    });

    module('when variant is "default"', function () {
      test('it should apply default style for global and footer', async function (assert) {
        // given
        const title = 'SidePanel with default variant';
        const showSidePanel = true;

        // when
        const screen = await render(
          <template>
            <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}} @variant="default">
              <:content>
                content
              </:content>
              <:footer>
                footer
              </:footer>
            </PixSidePanel>
          </template>,
        );

        // then
        const dialog = screen.getByRole('dialog', { name: 'SidePanel with default variant' });
        const footer = this.element.querySelector('.pix-side-panel__footer');

        assert.dom(dialog.querySelector('.pix-side-panel')).hasClass('pix-side-panel--default');
        assert.dom(footer).hasClass('pix-side-panel__footer--default');
      });
    });

    module('when variant is "orga"', function () {
      test('it should apply orga style for global and footer', async function (assert) {
        // given
        const title = 'SidePanel with orga variant';
        const showSidePanel = true;

        // when
        const screen = await render(
          <template>
            <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}} @variant="orga">
              <:content>
                content
              </:content>
              <:footer>
                footer
              </:footer>
            </PixSidePanel>
          </template>,
        );

        // then
        const dialog = screen.getByRole('dialog', { name: 'SidePanel with orga variant' });
        const footer = this.element.querySelector('.pix-side-panel__footer');

        assert.dom(dialog.querySelector('.pix-side-panel')).hasClass('pix-side-panel--orga');
        assert.dom(footer).hasClass('pix-side-panel__footer--orga');
      });
    });

    module('when variant is "certif"', function () {
      test('it should apply certif style for global and footer', async function (assert) {
        // given
        const title = 'SidePanel with certif variant';
        const showSidePanel = true;

        // when
        const screen = await render(
          <template>
            <PixSidePanel @title={{title}} @showSidePanel={{showSidePanel}} @variant="certif">
              <:content>
                content
              </:content>
              <:footer>
                footer
              </:footer>
            </PixSidePanel>
          </template>,
        );

        // then
        const dialog = screen.getByRole('dialog', { name: 'SidePanel with certif variant' });
        const footer = this.element.querySelector('.pix-side-panel__footer');

        assert.dom(dialog.querySelector('.pix-side-panel')).hasClass('pix-side-panel--certif');
        assert.dom(footer).hasClass('pix-side-panel__footer--certif');
      });
    });
  });
});
