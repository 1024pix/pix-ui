import { clickByText, render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | PixAccordions', function (hooks) {
  setupRenderingTest(hooks);

  test('it should only render PixAccordions title by default', async function (assert) {
    // when
    const screen = await render(hbs`<PixAccordions>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);

    // then
    assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
  });

  test('it should render and show content on click on PixAccordions title', async function (assert) {
    // when
    const screen = await render(hbs`<PixAccordions aria-label='accordions label'>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);
    await clickByText('Titre de mon élément déroulable');

    // then
    assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
  });

  test('it should not destroy content when uncollapsed then collapsed again', async function (assert) {
    // when
    const screen = await render(hbs`<PixAccordions aria-label='accordions label'>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);
    await clickByText('Titre de mon élément déroulable');
    await clickByText('Titre de mon élément déroulable');

    // then
    assert.dom(screen.queryByText('Titre de mon élément déroulable')).isVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).isNotVisible();
    assert.dom(screen.queryByText('Contenu de mon élément')).exists();
  });
});
