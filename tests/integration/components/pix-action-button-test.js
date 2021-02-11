import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | action-button', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-action-button';
  const iconClass = `${COMPONENT_SELECTOR} > svg`;

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

  test('it should trigger action if given one', async function(assert) {
    // when
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });
    await render(hbs`
      <PixActionButton @triggerAction={{this.triggerAction}} />
    `);
    await click('button');

    // then
    assert.equal(this.count, 2);
  });

  test('it renders PixActionButton with disabled attribute', async function(assert) {
    // given
    this.set('triggerAction', () => {});

    //when
    await render(hbs`
      <PixActionButton @triggerAction={{this.triggerAction}} disabled={{true}} />
    `);
    await click('button');

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(componentElement.disabled, true);
  });
});
