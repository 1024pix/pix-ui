import { render } from '@1024pix/ember-testing-library';
import { triggerEvent, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | Overlay', function (hooks) {
  setupRenderingTest(hooks);

  module('when isVisible is equal true', function () {
    test('it renders the overlay', async function (assert) {
      // when
      await render(hbs`<PixOverlay @isVisible={{true}}>
  Main content
</PixOverlay>`);

      // then
      assert.contains('Main content');
      assert.dom('.pix-overlay--hidden').doesNotExist();
    });

    module('when overlay is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.onCloseCallback = sinon.stub();

        // when
        await render(hbs`<PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
  content
</PixOverlay>`);
        await triggerEvent('.pix-overlay', 'click');

        // then
        assert.ok(this.onCloseCallback.calledOnce);
      });
    });

    module('when escape button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.onCloseCallback = sinon.stub();

        // when
        await render(hbs`<PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
  content
</PixOverlay>`);
        await triggerKeyEvent('.pix-overlay', 'keyup', 'Escape');

        // then
        assert.ok(this.onCloseCallback.calledOnce);
      });
    });
  });

  module('when isVisible is false', function () {
    test('it does not display the overlay', async function (assert) {
      // when
      await render(hbs`<PixOverlay @isVisible={{false}}>
  Main content
</PixOverlay>`);

      // then
      assert.contains('Main content');
      assert.dom('.pix-overlay--hidden').exists();
    });
  });
});
