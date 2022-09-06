import { currentURL, click } from '@ember/test-helpers';
import { visit } from '@1024pix/ember-testing-library';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { waitForDialog } from '../helpers/wait-for';

module('Acceptance | PixSidebarPageTest', function (hooks) {
  setupApplicationTest(hooks);

  test('Should redirect to link', async function (assert) {
    // given
    const screen = await visit('/sidebar');
    await click(screen.getByRole('button', { name: 'Ouvrir la sidebar' }));
    await waitForDialog();

    // when
    await click(screen.getByRole('link', { name: 'My link' }));

    // then
    assert.strictEqual(currentURL(), '/hello-world');
  });
});
