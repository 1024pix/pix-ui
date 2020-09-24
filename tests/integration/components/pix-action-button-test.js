import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | action-button', function(hooks) {
  setupRenderingTest(hooks);

  const PLUS_ICON = '.pix-action-button svg';

  test('it renders the default PixActionButton', async function(assert) {
    // when
    await render(hbs`
      <PixActionButton />
    `);
    const plusIcon = this.element.querySelector(PLUS_ICON);

    // then
    assert.ok(plusIcon.classList.contains('fa-plus'));
  });

  test('it renders the PixActionButton with the specified fa icon', async function(assert) {
    // when
    await render(hbs`
      <PixActionButton @icon='times'/>
    `);
    const plusIcon = this.element.querySelector(PLUS_ICON);

    // then
    assert.ok(plusIcon.classList.contains('fa-times'));
  });

});
