import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-upload', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-button';

  test('it renders the default PixButtonUpload', async function(assert) {
    // when
    await render(hbs`
      <PixButtonUpload @id="1">
        content
      </PixButtonUpload>
    `);
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.textContent.trim(), 'content');
  });

});
