import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-link', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.setupRouter();
  });

  test('it renders an HTML link', async function(assert) {
    // when
    await render(hbs`
      <PixButtonLink href="pix.fr">
        content
      </PixButtonLink>
    `);
    
    // then
    const componentElement = this.element.querySelector('a[href="pix.fr"]');
    assert.ok(componentElement);
  });

  test('it renders an EmberJS link', async function(assert) {
    // when
    await render(hbs`
      <PixButtonLink @route="hello">
        content
      </PixButtonLink>
    `);
    
    // then
    const componentElement = this.element.querySelector('a[href="/hello-world"]');
    assert.ok(componentElement);
  });

  test('it renders an EmberJS link with model', async function(assert) {
    // when
    await render(hbs`
      <PixButtonLink @route="bye" @model="bye">
        content
      </PixButtonLink>
    `);
    
    // then
    const componentElement = this.element.querySelector('a[href="/bye/bye"]');
    assert.ok(componentElement);
  });

});
