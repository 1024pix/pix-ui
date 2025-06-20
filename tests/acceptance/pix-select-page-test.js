import { fillByLabel, visit } from '@1024pix/ember-testing-library';
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

    test('it should filter by custom regex', async function (assert) {
      // given
      const screen = await visit('/select');

      // when
      await fillByLabel('Kebab', '[A-Z]{1}[a-z]{6}');
      await screen.findByRole('menu');

      // then
      assert.strictEqual(screen.getAllByRole('menuitem').length, 1);
      assert.dom(screen.getByRole('menuitem', { name: 'Oignons' })).exists();
    });
  });

  module('PixSelect', function () {
    test('displayed options should be reactive', async function (assert) {
      // given
      const screen = await visit('/select');

      // when
      await screen.getByLabelText('Fruits').focus();
      await userEvent.keyboard('[ArrowDown]');
      await screen.findByRole('listbox');

      assert.strictEqual(screen.getAllByRole('option').length, 6);
      await userEvent.keyboard('[Escape]');

      await click(screen.getByRole('button', { name: 'Ajouter un citron' }));

      // then
      await screen.getByLabelText('Fruits').focus();
      await userEvent.keyboard('[ArrowDown]');
      await screen.findByRole('listbox');

      assert.strictEqual(screen.getAllByRole('option').length, 7);
      assert.dom(screen.getAllByRole('presentation').at(-1)).hasText('yellow');
      assert.dom(screen.getByRole('option', { name: 'Citron' })).exists();
    });

    test('it should filter by custom regex', async function (assert) {
      // given
      const screen = await visit('/select');

      // when
      await screen.getByLabelText('Fruits').click();
      await fillByLabel('Rechercher un fruit', 'K[a-z]{3}');
      await screen.findByRole('listbox');

      // then
      assert.strictEqual(screen.getAllByRole('option').length, 1);
      assert.dom(screen.getByRole('option', { name: 'Kaki' })).exists();
    });
  });
});
