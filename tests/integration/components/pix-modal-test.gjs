import { render } from '@1024pix/ember-testing-library';
import PixModal from '@1024pix/pix-ui/components/pix-modal';
import { click, triggerKeyEvent } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | modal', function (hooks) {
  setupRenderingTest(hooks);

  module('when showModal is equal true', function () {
    test('it renders the default PixModal', async function (assert) {
      // given
      const title = "It's a modal!";
      const showModal = true;

      // when
      const screen = await render(
        <template>
          <PixModal @title={{title}} @showModal={{showModal}}>
            <:content>
              content
            </:content>
            <:footer>
              footer
            </:footer>
          </PixModal>
        </template>,
      );

      // then
      assert.ok(screen.getByRole('dialog'));
      assert.ok(screen.queryByRole('heading', { name: title }));
      assert.contains('content');
      assert.contains('footer');
    });

    module('when close button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        const title = 'Close me baby one more time';
        const showModal = true;
        const onCloseButtonClick = sinon.stub();

        // when
        const screen = await render(
          <template>
            <PixModal
              @title={{title}}
              @onCloseButtonClick={{onCloseButtonClick}}
              @showModal={{showModal}}
            >
              content
            </PixModal>
          </template>,
        );
        await click(screen.getByRole('button', { name: /Fermer/ }));

        // then
        assert.ok(onCloseButtonClick.calledOnce);
      });
    });

    module('when escape button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        const title = 'Close me baby one more time';
        const showModal = true;
        const onCloseButtonClick = sinon.stub();

        // when
        await render(
          <template>
            <PixModal
              @title={{title}}
              @onCloseButtonClick={{onCloseButtonClick}}
              @showModal={{showModal}}
            >
              content
            </PixModal>
          </template>,
        );
        await triggerKeyEvent('.pix-modal', 'keyup', 'Escape');

        // then
        assert.ok(onCloseButtonClick.calledOnce);
      });
    });
  });

  module('when showModal is false', function () {
    test('it should not show modal', async function (assert) {
      // given
      const title = "It's a modal!";
      const showModal = false;

      // when
      const screen = await render(
        <template>
          <PixModal @title={{title}} @showModal={{showModal}}>
            <:content>
              content
            </:content>
            <:footer>
              footer
            </:footer>
          </PixModal>
        </template>,
      );

      // then
      assert.notOk(screen.queryByRole('dialog'));
      assert.notOk(screen.queryByRole('heading', { name: title }));
    });
  });

  module('variants', function () {
    module('when variant is not provided', function () {
      test('it should apply default style', async function (assert) {
        // given
        const title = 'Modal with no variant';
        const showModal = true;

        // when
        const screen = await render(
          <template>
            <PixModal @title={{title}} @showModal={{showModal}}>
              <:content>
                content
              </:content>
              <:footer>
                footer
              </:footer>
            </PixModal>
          </template>,
        );

        // then
        const modal = screen.getByRole('dialog', { name: 'Modal with no variant' });
        const header = screen.getByRole('heading', { name: 'Modal with no variant' }).parentNode;

        assert.dom(modal).hasClass('pix-modal--default');
        assert.dom(header).hasClass('pix-modal__header--default');
      });
    });

    module('when variant is "default"', function () {
      test('it should apply default style', async function (assert) {
        // given
        const title = 'Modal with "default" variant';
        const showModal = true;

        // when
        const screen = await render(
          <template>
            <PixModal @title={{title}} @showModal={{showModal}} @variant="default">
              <:content>
                content
              </:content>
              <:footer>
                footer
              </:footer>
            </PixModal>
          </template>,
        );

        // then
        const modal = screen.getByRole('dialog', { name: 'Modal with "default" variant' });
        const header = screen.getByRole('heading', {
          name: 'Modal with "default" variant',
        }).parentNode;

        assert.dom(modal).hasClass('pix-modal--default');
        assert.dom(header).hasClass('pix-modal__header--default');
      });
    });

    module('when variant is "orga"', function () {
      test('it should apply orga style', async function (assert) {
        // given
        const title = 'Modal with "orga" variant';
        const showModal = true;

        // when
        const screen = await render(
          <template>
            <PixModal @title={{title}} @showModal={{showModal}} @variant="orga">
              <:content>
                content
              </:content>
              <:footer>
                footer
              </:footer>
            </PixModal>
          </template>,
        );

        // then
        const modal = screen.getByRole('dialog', { name: 'Modal with "orga" variant' });
        const header = screen.getByRole('heading', {
          name: 'Modal with "orga" variant',
        }).parentNode;

        assert.dom(modal).hasClass('pix-modal--orga');
        assert.dom(header).hasClass('pix-modal__header--orga');
      });
    });

    module('when variant is "certif"', function () {
      test('it should apply certif style', async function (assert) {
        // given
        const title = 'Modal with "certif" variant';
        const showModal = true;

        // when
        const screen = await render(
          <template>
            <PixModal @title={{title}} @showModal={{showModal}} @variant="certif">
              <:content>
                content
              </:content>
              <:footer>
                footer
              </:footer>
            </PixModal>
          </template>,
        );

        // then
        const modal = screen.getByRole('dialog', { name: 'Modal with "certif" variant' });
        const header = screen.getByRole('heading', {
          name: 'Modal with "certif" variant',
        }).parentNode;

        assert.dom(modal).hasClass('pix-modal--certif');
        assert.dom(header).hasClass('pix-modal__header--certif');
      });
    });
  });
});
