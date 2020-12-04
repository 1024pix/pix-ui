import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filter-banner', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-filter-banner';

  test('it renders the default PixFilterBanner', async function(assert) {
    // when
    await render(hbs`
      <PixFilterBanner>
        content
      </PixFilterBanner>
    `);
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.textContent.trim(), 'content');
  });

  test('it renders the PixFilterBanner with title', async function(assert) {
    // when
    await render(hbs`
      <PixFilterBanner @title="Titre de la bannière">
        content
      </PixFilterBanner>
    `);
    const componentElement = this.element.querySelector('.pix-filter-banner__title');

    // then
    assert.equal(componentElement.textContent.trim(), 'Titre de la bannière');
  });
});
