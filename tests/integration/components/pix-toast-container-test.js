import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | toast-container', function (hooks) {
  setupRenderingTest(hooks);

  module('when toast service content is not empty', function (hooks) {
    let toasts = [];
    hooks.beforeEach(function () {
      toasts.push(
        {
          message: 'this is a toast',
          type: 'success',
        },
        {
          message: 'this is another toast',
          type: 'error',
        },
      );

      const pixToastService = this.owner.lookup('service:pixToast');
      pixToastService.addNotification(toasts[0]);
      pixToastService.addNotification(toasts[1]);
    });

    test('it renders its content as toast component', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixToastContainer @closeButtonAriaLabel='Fermer la notification' />`,
      );
      // then
      assert.dom(screen.queryByText(toasts[0].message)).exists();
      assert.dom(screen.queryByText(toasts[1].message)).exists();
      assert.strictEqual(screen.getAllByRole('alert').length, 2);
      assert.strictEqual(screen.getAllByText('Fermer la notification').length, 2);
    });
  });
});
