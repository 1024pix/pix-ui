import { render } from '@1024pix/ember-testing-library';
import { click, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

import createGlimmerComponent from '../../helpers/create-glimmer-component';

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

  test('it should throw an error if require @title argument is missing', async function (assert) {
    // given
    const componentParams = {};

    // when
    const renderComponent = function () {
      createGlimmerComponent('pix-modal', componentParams);
    };

    // then
    const expectedError = new Error('ERROR in PixModal component: @title argument is required.');
    assert.throws(renderComponent, expectedError);
  });
});
