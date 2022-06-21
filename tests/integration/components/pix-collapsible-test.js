import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import clickByLabel from '../../helpers/click-by-label';

module('Integration | Component | collapsible', function (hooks) {
  setupRenderingTest(hooks);

  test('it should show only PixCollapsible title by default', async function (assert) {
    // when
    const screen = await render(hbs`
      <PixCollapsible @title="Titre de mon élément déroulable">
        <p>Contenu de mon élément</p>
      </PixCollapsible>
    `);

    // then
    assert.contains('Titre de mon élément déroulable');
    assert.dom(screen.queryByText('Contenu de mon élément')).isNotVisible();
  });

  test('it should show content on click on PixCollapsible title', async function (assert) {
    // when
    const screen = await render(hbs`
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

  module('@lazyRender', function () {
    test('it should not render content when it has not been uncollapsed', async function (assert) {
      // when
      const screen = await render(hbs`
        <PixCollapsible
          @title="Titre de mon élément déroulable"
          aria-label="collapsible label"
          @lazyRender={{true}}
        >
          <p>Contenu de mon élément</p>
        </PixCollapsible>
      `);

      // then
      assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
    });

    test('it should render content when uncollapsed for the first time', async function (assert) {
      // when
      const screen = await render(hbs`
        <PixCollapsible
          @title="Titre de mon élément déroulable"
          aria-label="collapsible label"
          @lazyRender={{true}}
        >
          <p>Contenu de mon élément</p>
        </PixCollapsible>
      `);
      await clickByLabel('collapsible label');

      // then
      assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
    });

    test('it should not re-render content when uncollapsed then collapsed again', async function (assert) {
      // when
      const screen = await render(hbs`
        <PixCollapsible
          @title="Titre de mon élément déroulable"
          aria-label="collapsible label"
          @lazyRender={{true}}
        >
          <p>Contenu de mon élément</p>
        </PixCollapsible>
      `);
      await clickByLabel('collapsible label');
      await clickByLabel('collapsible label');

      // then
      assert.dom(screen.queryByText('Contenu de mon élément')).isNotVisible();
      assert.dom(screen.queryByText('Contenu de mon élément')).exists();
    });
  });
});
