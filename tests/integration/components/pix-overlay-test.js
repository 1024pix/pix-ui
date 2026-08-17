import { render } from '@1024pix/ember-testing-library';
import { click, settled, triggerEvent, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

import { waitForDialogClose } from '../../helpers/wait-for';

module('Integration | Component | Overlay', function (hooks) {
  setupRenderingTest(hooks);

  module('when isVisible is equal true', function () {
    test('it shows the content to the user', async function (assert) {
      // when
      const screen = await render(hbs`<PixOverlay @isVisible={{true}}>
  Main content
</PixOverlay>`);

      // then
      assert.ok(screen.getByRole('dialog'));
      assert.contains('Main content');
    });

    test('it keeps the focus inside the overlay when trying to reach the content behind it', async function (assert) {
      // given
      const screen = await render(hbs`<button type='button'>Behind the overlay</button>
<PixOverlay @isVisible={{true}}>
  <button type='button'>Inside the overlay</button>
</PixOverlay>`);

      // when
      screen.getByRole('button', { name: 'Behind the overlay' }).focus();

      // then
      assert.true(screen.getByRole('dialog').contains(document.activeElement));
    });

    module('when overlay is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.onCloseCallback = sinon.stub();

        // when
        const screen =
          await render(hbs`<PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
  content
</PixOverlay>`);
        await triggerEvent(screen.getByRole('dialog'), 'click');

        // then
        assert.ok(this.onCloseCallback.calledOnce);
      });
    });

    module('when the cancel event is triggered (escape key)', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.onCloseCallback = sinon.stub();

        // when
        const screen =
          await render(hbs`<PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
  content
</PixOverlay>`);
        await triggerEvent(screen.getByRole('dialog'), 'cancel');

        // then
        assert.ok(this.onCloseCallback.calledOnce);
      });
    });

    module('when the user asks to close an overlay without an onClose function', function () {
      test('it should not keep the user trapped inside the overlay', async function (assert) {
        // given
        const screen = await render(hbs`<PixOverlay @isVisible={{true}}>
  Main content
</PixOverlay>`);

        // when
        screen.getByRole('dialog').requestClose();
        await waitForDialogClose();

        // then
        assert.notOk(screen.queryByRole('dialog'));
      });
    });

    module('when the user dismisses the file picker of an upload field', function () {
      test('it should not call onClose function passed in argument', async function (assert) {
        // given
        this.onCloseCallback = sinon.stub();
        const screen =
          await render(hbs`<PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
  <input type='file' aria-label='Upload a file' />
</PixOverlay>`);

        // when
        await triggerEvent(screen.getByLabelText('Upload a file'), 'cancel');

        // then
        assert.ok(this.onCloseCallback.notCalled);
      });
    });

    module('when the browser closes the overlay on its own', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.onCloseCallback = sinon.stub();

        // when
        const screen =
          await render(hbs`<PixOverlay @isVisible={{true}} @onClose={{this.onCloseCallback}}>
  <form method='dialog'><button type='submit'>Submit</button></form>
</PixOverlay>`);
        await click(screen.getByRole('button', { name: 'Submit' }));
        await waitUntil(() => this.onCloseCallback.called);

        // then
        assert.ok(this.onCloseCallback.calledOnce);
      });
    });
  });

  module('when isVisible is false', function () {
    test('it does not show the content to the user', async function (assert) {
      // when
      const screen = await render(hbs`<PixOverlay @isVisible={{false}}>
  Main content
</PixOverlay>`);

      // then
      assert.notOk(screen.queryByRole('dialog'));
    });
  });

  module('when isVisible becomes false', function () {
    test('it stops showing the content to the user', async function (assert) {
      // given
      this.isVisible = true;
      const screen = await render(hbs`<PixOverlay @isVisible={{this.isVisible}}>
  Main content
</PixOverlay>`);

      // when
      this.set('isVisible', false);
      await waitForDialogClose();

      // then
      assert.notOk(screen.queryByRole('dialog'));
    });

    test('it should not call onClose function passed in argument', async function (assert) {
      // given
      this.isVisible = true;
      this.onCloseCallback = sinon.stub();
      await render(hbs`<PixOverlay @isVisible={{this.isVisible}} @onClose={{this.onCloseCallback}}>
  Main content
</PixOverlay>`);

      // when
      this.set('isVisible', false);
      await waitForDialogClose();

      // then
      assert.ok(this.onCloseCallback.notCalled);
    });
  });

  module('when several overlays are stacked', function () {
    test('it should keep the page behind locked while one of them is still open', async function (assert) {
      // given
      this.isFirstVisible = true;
      await render(hbs`<PixOverlay @isVisible={{this.isFirstVisible}}>
  First
</PixOverlay>
<PixOverlay @isVisible={{true}}>
  Second
</PixOverlay>`);

      // when
      this.set('isFirstVisible', false);
      await settled();

      // then
      assert.strictEqual(getComputedStyle(document.body).overflowY, 'hidden');
    });

    test('it should let the user scroll the page again once all of them are closed', async function (assert) {
      // given
      this.areVisible = true;
      await render(hbs`<PixOverlay @isVisible={{this.areVisible}}>
  First
</PixOverlay>
<PixOverlay @isVisible={{this.areVisible}}>
  Second
</PixOverlay>`);

      // when
      this.set('areVisible', false);
      await settled();

      // then
      assert.notStrictEqual(getComputedStyle(document.body).overflowY, 'hidden');
    });
  });
});
