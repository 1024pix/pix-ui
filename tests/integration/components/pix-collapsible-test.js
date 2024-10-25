import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByText } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | PixCollapsible', function (hooks) {
  setupRenderingTest(hooks);

  test('it should only render PixCollapsible title by default', async function (assert) {
    // when
    const screen = await render(hbs`<PixCollapsible>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixCollapsible>`);

    // then
    assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
  });

  test('it should render and show content on click on PixCollapsible title', async function (assert) {
    // when
    const screen = await render(hbs`<PixCollapsible aria-label='collapsible label'>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixCollapsible>`);
    await clickByText('Titre de mon élément déroulable');

    // then
    assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
  });

  test('it should not destroy content when uncollapsed then collapsed again', async function (assert) {
    // when
    const screen = await render(hbs`<PixCollapsible aria-label='collapsible label'>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixCollapsible>`);
    await clickByText('Titre de mon élément déroulable');
    await clickByText('Titre de mon élément déroulable');

    // then
    assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).isNotVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).exists();
  });
});
