import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import clickByLabel from '../../helpers/click-by-label';

module('Integration | Component | collapsible', function(hooks) {
  setupRenderingTest(hooks);

  test('it show only PixCollapsible title by default', async function(assert) {
    // when
    await render(hbs`
      <PixCollapsible @title="Titre de mon élément déroulable">
        <p>Contenu de mon élément</p>
      </PixCollapsible>
    `);

    // then
    assert.contains('Titre de mon élément déroulable');
  });

  test('it shows content on click on PixCollapsible title', async function(assert) {
    // when
    await render(hbs`
      <PixCollapsible
        @title="Titre de mon élément déroulable"
        aria-label="collapsible label"
      >
        <p>Contenu de mon élément</p>
      </PixCollapsible>
    `);
    await clickByLabel('collapsible label');

    // then
    assert.contains('Titre de mon élément déroulable');
    assert.contains('Contenu de mon élément');
  });

  test('it should not show PixCollapsible if title is not provided', async function(assert) {
    // given
    const componentParams = { title: '  ' };
    const component = createGlimmerComponent('component:pix-collapsible', componentParams);

    // when & then
    const expectedError = new Error('ERROR in PixCollapsible component, @title param is not provided');
    assert.throws(
      function() { component.title },
      expectedError
    );
  });
});
