import { visit } from '@1024pix/ember-testing-library';
import { click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { waitForDialog } from '../helpers/wait-for';

module('Acceptance | PixModalPageTest', function (hooks) {
  setupApplicationTest(hooks);

  test('Should redirect to link', async function (assert) {
    // given
    const screen = await visit('/modal');
    await click(screen.getByRole('button', { name: 'Ouvrir la modale' }));
    await waitForDialog();

    // when
    await click(screen.getByRole('link', { name: 'My link' }));

    // then
    assert.strictEqual(currentURL(), '/hello-world');
  });
});
