import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | PixIcons', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixIcons title', async function (assert) {
    // when
    const screen = await render(hbs`<PixIcon @title='my-title' @icon='help' />`);

    // then
    assert.ok(screen.getByRole('img', { name: 'my-title' }));
  });
});
