import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | toast', function (hooks) {
  setupRenderingTest(hooks);

  let ariaLabel, message, toast;

  hooks.beforeEach(function () {
    ariaLabel = 'ariaLabel';
    message = 'message';

    toast = {
      message,
      type: 'success',
    };

    this.set('toast', toast);
    this.set('closeButtonAriaLabel', ariaLabel);
  });
  test('renders a component with a container, an icon, a message and a "close" icon button', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixToast @toast={{this.toast}} @closeButtonAriaLabel={{this.closeButtonAriaLabel}} />`,
    );

    // then
    const icons = await screen.getAllByRole('img', { hidden: true });

    assert.dom(screen.getByRole('alert')).exists();
    assert.dom(screen.queryByText(ariaLabel)).exists();
    assert.dom(screen.queryByText(message)).exists();
    assert.dom(screen.getByRole('button')).exists();
    assert.strictEqual(icons.length, 2);
  });

  module('when user clicks on "close" icon button', function () {
    test('it calls toast service "removeNotification" method', async function (assert) {
      // given
      const pixToastService = this.owner.lookup('service:pixToast');
      pixToastService.removeNotification = sinon.stub();

      // when
      const screen = await render(hbs`<PixToast @toast={{this.toast}} />`);
      await click(screen.getByRole('button'));

      // then
      sinon.assert.calledOnceWithExactly(pixToastService.removeNotification, toast);
      assert.ok(true);
    });
  });
});
