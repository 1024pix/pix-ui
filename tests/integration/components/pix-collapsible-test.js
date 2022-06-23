import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByText } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | collapsible', function (hooks) {
  setupRenderingTest(hooks);

  test('it should only render PixCollapsible title by default', async function (assert) {
    // when
    const screen = await render(hbs`
      <PixCollapsible @title="Titre de mon élément déroulable">
        <p>Contenu de mon élément</p>
      </PixCollapsible>
    `);

    // then
    assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
  });

  test('it should render and show content on click on PixCollapsible title', async function (assert) {
    // when
    const screen = await render(hbs`
      <PixCollapsible
        @title="Titre de mon élément déroulable"
        aria-label="collapsible label"
      >
        <p>Contenu de mon élément</p>
      </PixCollapsible>
    `);
    await clickByText('Titre de mon élément déroulable');

    // then
    assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
  });

  test('it should not show PixCollapsible if title is not provided', async function (assert) {
    // given
    const componentParams = { title: '  ' };
    const component = createGlimmerComponent('component:pix-collapsible', componentParams);

    // when & then
    const expectedError = new Error(
      'ERROR in PixCollapsible component, @title param is not provided'
    );
    assert.throws(function () {
      component.title;
    }, expectedError);
  });

  test('it should not destroy content when uncollapsed then collapsed again', async function (assert) {
    // when
    const screen = await render(hbs`
      <PixCollapsible
        @title="Titre de mon élément déroulable"
        aria-label="collapsible label"
      >
        <p>Contenu de mon élément</p>
      </PixCollapsible>
    `);
    await clickByText('Titre de mon élément déroulable');
    await clickByText('Titre de mon élément déroulable');

    // then
    assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).isNotVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).exists();
  });
});
