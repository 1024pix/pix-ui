import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-upload', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixButtonUpload', async function (assert) {
    // when
    await render(hbs`<PixButtonUpload @id='1'>
  content
</PixButtonUpload>`);

    // then
    assert.contains('content');
  });
});
