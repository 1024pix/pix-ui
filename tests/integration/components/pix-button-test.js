import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-button';

  test('it renders the default PixButton', async function(assert) {
    // when
    await render(hbs`
      <PixButton>
        Mon bouton
      </PixButton>
    `);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(componentElement.textContent.trim(), 'Mon bouton');
    assert.equal(componentElement.type, 'button');
  });

  test('it renders the PixButton component with the given type', async function(assert) {
    // when
    await render(hbs`
      <PixButton @type="submit">
        Mon bouton
      </PixButton>
    `);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(componentElement.type, 'submit');
  });

  test('it renders the PixButton component with isDisabled attribute', async function(assert) {
    // given
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });

    //when
    await render(hbs`
      <PixButton
      @isDisabled={{true}}
      @triggerAction={{this.triggerAction}}>
        Mon bouton
      </PixButton>
    `);

    await click('button');

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(this.count, 1);
    assert.equal(componentElement.disabled, true);
  });

  test('it should call the action', async function(assert) {
    // given
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });

    //when
    await render(hbs`
      <PixButton @triggerAction={{this.triggerAction}} />
    `);

    await click('button');

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(this.count, 2);
    assert.equal(componentElement.disabled, false);
  });
});
