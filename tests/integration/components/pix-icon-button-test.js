import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | icon-button', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-icon-button';
  const iconClass = `${COMPONENT_SELECTOR} > svg`;

  test('it renders PixIconButton with a default fa-icon', async function(assert) {
    // when
    await render(hbs`
      <PixIconButton></PixIconButton>
    `);
    const iconElement = this.element.querySelector(iconClass);

    // then
    assert.ok(iconElement.classList.contains('fa-plus'));
  });

  test('it renders PixIconButton with the specified FaIcon', async function(assert) {
    // when
    await render(hbs`
      <PixIconButton @icon='times'></PixIconButton>
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
      <PixIconButton @triggerAction={{this.triggerAction}} />
    `);
    await click('button');

    // then
    assert.equal(this.count, 2);
  });

  test('it renders PixIconButton with disabled attribute', async function(assert) {
    // given
    this.set('triggerAction', () => {});

    //when
    await render(hbs`
      <PixIconButton @triggerAction={{this.triggerAction}} disabled={{true}} />
    `);
    await click('button');

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(componentElement.disabled, true);
  });
});
