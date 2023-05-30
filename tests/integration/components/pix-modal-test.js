import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
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
      await render(hbs`<PixModal @title={{this.title}} @showModal={{this.showModal}}>
  <:content>
    content
  </:content>
  <:footer>
    footer
  </:footer>
</PixModal>`);

      // then
      assert.contains("It's a modal!");
      assert.contains('content');
      assert.contains('footer');
      assert.dom('.pix-modal__overlay--hidden').doesNotExist();
    });

    module('when close button is clicked', function () {
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
        await click('[aria-label="Fermer"]');

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
        await triggerKeyEvent('.pix-modal__overlay', 'keyup', 'Escape');

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
      await render(hbs`<PixModal @title={{this.title}} @showModal={{this.showModal}}>
  <:content>
    content
  </:content>
  <:footer>
    footer
  </:footer>
</PixModal>`);

      // then
      assert.dom('.pix-modal__overlay--hidden').exists();
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
