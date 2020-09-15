import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | action-button', function(hooks) {
  setupRenderingTest(hooks);

  const iconClass = '.pix-action-button > svg';

  test('it renders PixActionButton with a default fa-icon', async function(assert) {
    // when
    await render(hbs`
      <PixActionButton></PixActionButton>
    `);
    const iconElement = this.element.querySelector(iconClass);

    // then
    assert.ok(iconElement.classList.contains('fa-plus'));
  });

  test('it renders PixActionButton with the specified FaIcon', async function(assert) {
    // when
    await render(hbs`
      <PixActionButton @icon='times'></PixActionButton>
    `);
    const iconElement = this.element.querySelector(iconClass);

    // then
    assert.ok(iconElement.classList.contains('fa-times'));
    assert.notOk(iconElement.classList.contains('fa-plus'));
  });

});
