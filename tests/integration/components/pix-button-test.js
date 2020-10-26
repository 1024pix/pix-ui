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
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
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
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.type, 'submit');
  });

  test('it should call the action', async function(assert) {
    // when
    this.set('count', 1);
    this.set('action', () => {
      this.count = this.count + 1;
    });
    await render(hbs`
      <PixButton @action={{this.action}} />
    `);

    await click('button');
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(this.count, 2);
    assert.equal(componentElement.disabled, false);
  });


});
