import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | action-button', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-action-button';

  test('it renders the default PixActionButton', async function(assert) {
    // when
    await render(hbs`
      <PixActionButton>
        content
      </PixActionButton>
    `);
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.textContent.trim(), 'content');
  });

});
