import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pagination', function (hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pagination-control';

  test('it renders the default PixPagination', async function (assert) {
    // when
    await render(hbs`
      <PixPagination/>
    `);
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.textContent.trim(), 'content');
  });
});
