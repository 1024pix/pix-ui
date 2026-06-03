import { render } from '@1024pix/ember-testing-library';
import { click, triggerKeyEvent } from '@ember/test-helpers';
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

    module('when close button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.title = 'Close me baby one more time';
        this.showSidePanel = true;
        this.onClose = sinon.stub();

        // when
        const screen =
          await render(hbs`<PixSidePanel @title={{this.title}} @onClose={{this.onClose}} @showSidePanel={{this.showSidePanel}}>
  <:content>
    content
  </:content>
</PixSidePanel>`);
        await click(screen.getByRole('button', { name: /Fermer/ }));

        // then
        assert.ok(this.onClose.calledOnce);
      });
    });

    module('when escape button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.title = 'Close me baby one more time';
        this.showSidePanel = true;
        this.onClose = sinon.stub();

        // when
        await render(hbs`<PixSidePanel @title={{this.title}} @onClose={{this.onClose}} @showSidePanel={{this.showSidePanel}}>
  <:content>
    content
  </:content>
</PixSidePanel>`);
        await triggerKeyEvent('.pix-side-panel', 'keyup', 'Escape');

        // then
        assert.ok(this.onClose.calledOnce);
      });
    });
  });

  module('when showSidePanel is false', function () {
    test('it should not show sidepanel', async function (assert) {
      // given
      this.title = "It's a sidepanel!";
      this.showSidePanel = false;

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
      assert.notOk(screen.queryByRole('dialog'));
      assert.notOk(screen.queryByRole('heading', { name: this.title }));
    });
  });
});
