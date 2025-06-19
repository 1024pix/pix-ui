import { visit } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import userEvent from '@testing-library/user-event';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | PixSelectPageTest', function (hooks) {
  setupApplicationTest(hooks);

  module('PixMultiSelect', function () {
    test('displayed options should be reactive', async function (assert) {
      // given
      const screen = await visit('/select');

      // when
      await screen.getByLabelText('Kebab').focus();
      await userEvent.keyboard('[ArrowDown]');
      await screen.findByRole('menu');

      assert.strictEqual(screen.getAllByRole('menuitem').length, 3);
      await userEvent.keyboard('[Escape]');

      await click(screen.getByRole('button', { name: 'Ajouter une option' }));

      // then
      await screen.getByLabelText('Kebab').focus();
      await userEvent.keyboard('[ArrowDown]');
      await screen.findByRole('menu');

      assert.strictEqual(screen.getAllByRole('menuitem').length, 4);
      assert.ok(screen.getByRole('menuitem', { name: 'Harissa (NEW)' }));
    });
  });
});
