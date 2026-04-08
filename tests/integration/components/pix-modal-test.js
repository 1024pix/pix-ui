import { render } from '@1024pix/ember-testing-library';
import { click, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | modal', function (hooks) {
  setupRenderingTest(hooks);

  module('when showModal is equal true', function () {
    test('it renders the default PixModal', async function (assert) {
      // given
      this.title = "It's a modal!";
      this.showModal = true;

      // when
      const screen = await render(hbs`<PixModal @title={{this.title}} @showModal={{this.showModal}}>
  <:content>
    content
  </:content>
  <:footer>
    footer
  </:footer>
</PixModal>`);

      // then
      assert.ok(screen.getByRole('dialog'));
      assert.ok(screen.queryByRole('heading', { name: this.title }));
      assert.contains('content');
      assert.contains('footer');
    });

    module('when close button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.title = 'Close me baby one more time';
        this.showModal = true;
        this.onCloseButtonClick = sinon.stub();

        // when
        const screen = await render(hbs`<PixModal
  @title={{this.title}}
  @onCloseButtonClick={{this.onCloseButtonClick}}
  @showModal={{this.showModal}}
>
  content
</PixModal>`);
        await click(screen.getByRole('button', { name: /Fermer/ }));

        // then
        assert.ok(this.onCloseButtonClick.calledOnce);
      });
    });

    module('when escape button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.title = 'Close me baby one more time';
        this.showModal = true;
        this.onCloseButtonClick = sinon.stub();

        // when
        await render(hbs`<PixModal
  @title={{this.title}}
  @onCloseButtonClick={{this.onCloseButtonClick}}
  @showModal={{this.showModal}}
>
  content
</PixModal>`);
        await triggerKeyEvent('.pix-modal', 'keyup', 'Escape');

        // then
        assert.ok(this.onCloseButtonClick.calledOnce);
      });
    });
  });

  module('when showModal is false', function () {
    test('it should not show modal', async function (assert) {
      // given
      this.title = "It's a modal!";
      this.showModal = false;

      // when
      const screen = await render(hbs`<PixModal @title={{this.title}} @showModal={{this.showModal}}>
  <:content>
    content
  </:content>
  <:footer>
    footer
  </:footer>
</PixModal>`);

      // then
      assert.notOk(screen.queryByRole('dialog'));
      assert.notOk(screen.queryByRole('heading', { name: this.title }));
    });
  });

  module('variants', function () {
    module('when variant is not provided', function () {
      test('it should apply default style', async function (assert) {
        // given
        this.title = 'Modal with no variant';
        this.showModal = true;

        // when
        const screen =
          await render(hbs`<PixModal @title={{this.title}} @showModal={{this.showModal}}>
  <:content>
    content
  </:content>
  <:footer>
    footer
  </:footer>
</PixModal>`);

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
        this.title = 'Modal with "default" variant';
        this.showModal = true;

        // when
        const screen =
          await render(hbs`<PixModal @title={{this.title}} @showModal={{this.showModal}} @variant='default'>
  <:content>
    content
  </:content>
  <:footer>
    footer
  </:footer>
</PixModal>`);

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
        this.title = 'Modal with "orga" variant';
        this.showModal = true;

        // when
        const screen =
          await render(hbs`<PixModal @title={{this.title}} @showModal={{this.showModal}} @variant='orga'>
  <:content>
    content
  </:content>
  <:footer>
    footer
  </:footer>
</PixModal>`);

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
        this.title = 'Modal with "certif" variant';
        this.showModal = true;

        // when
        const screen =
          await render(hbs`<PixModal @title={{this.title}} @showModal={{this.showModal}} @variant='certif'>
  <:content>
    content
  </:content>
  <:footer>
    footer
  </:footer>
</PixModal>`);

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
