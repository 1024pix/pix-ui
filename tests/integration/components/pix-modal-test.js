import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixModal', async function (assert) {
    // given
    this.title = "It's a bird! It's a plane! It's a modal!";

    // when
    await render(hbs`
      <PixModal @title={{this.title}}>
        <:content>
          content
        </:content>
        <:footer>
          footer
        </:footer>
      </PixModal>
    `);

    // then
    assert.contains("It's a bird! It's a plane! It's a modal!");
    assert.contains('content');
    assert.contains('footer');
  });

  test('it should throw an error if require @title argument is missing', async function (assert) {
    // given
    const componentParams = {};

    // when
    const renderComponent = function () {
      createGlimmerComponent('component:pix-modal', componentParams);
    };

    // then
    const expectedError = new Error('ERROR in PixModal component: @title argument is required.');
    assert.throws(renderComponent, expectedError);
  });

  module('when close button is clicked', function () {
    test('it closes the modal', async function (assert) {
      // given
      this.title = 'Close me baby one more time';
      this.onCloseButtonClick = sinon.stub();

      // when
      await render(hbs`
        <PixModal
          @title={{this.title}}
          @onCloseButtonClick={{this.onCloseButtonClick}}
        >
          content
        </PixModal>
      `);
      await click('[aria-label="Fermer"]');

      // then
      assert.ok(this.onCloseButtonClick.calledOnce);
    });
  });
});
