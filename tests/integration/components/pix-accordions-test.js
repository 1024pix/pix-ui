import { clickByText, render } from '@1024pix/ember-testing-library';
import { settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

function getToggleIconName() {
  const useElement = document.querySelector('.pix-accordions-title-container__toggle-icon use');
  return useElement.getAttribute('href').split('#')[1];
}

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

  test('it should call onToggle with the new state when uncontrolled', async function (assert) {
    // given
    const onToggle = sinon.stub();
    this.set('onToggle', onToggle);

    // when
    await render(hbs`<PixAccordions @onToggle={{this.onToggle}}>
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
    assert.true(onToggle.firstCall.calledWithExactly(true));
    assert.true(onToggle.secondCall.calledWithExactly(false));
  });

  module('when controlled with @isExpanded', function () {
    test('it should render content already expanded without any click', async function (assert) {
      // when
      const screen = await render(hbs`<PixAccordions @isExpanded={{true}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);

      // then
      assert.dom(screen.queryByRole('button')).hasAria('expanded', 'true');
      assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
    });

    test('it should render collapsed and without content when false', async function (assert) {
      // when
      const screen = await render(hbs`<PixAccordions @isExpanded={{false}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);

      // then
      assert.dom(screen.queryByRole('button')).hasAria('expanded', 'false');
      assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
    });

    test('it should call onToggle with the requested state on click', async function (assert) {
      // given
      const onToggle = sinon.stub();
      this.set('onToggle', onToggle);

      // when
      await render(hbs`<PixAccordions @isExpanded={{false}} @onToggle={{this.onToggle}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);
      await clickByText('Titre de mon élément déroulable');

      // then
      assert.true(onToggle.calledOnceWithExactly(true));
    });

    test('it should not change its own state on click while @isExpanded is unchanged', async function (assert) {
      // when
      const screen = await render(hbs`<PixAccordions @isExpanded={{false}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);
      await clickByText('Titre de mon élément déroulable');

      // then
      assert.dom(screen.queryByRole('button')).hasAria('expanded', 'false');
      assert.dom(screen.queryByText('Contenu de mon élément')).doesNotExist();
    });

    test('it should expand when @isExpanded becomes true after render', async function (assert) {
      // given
      this.set('isExpanded', false);
      const screen = await render(hbs`<PixAccordions @isExpanded={{this.isExpanded}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);

      // when
      this.set('isExpanded', true);
      await settled();

      // then
      assert.dom(screen.queryByRole('button')).hasAria('expanded', 'true');
      assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
    });

    test('it should collapse without destroying content when @isExpanded becomes false', async function (assert) {
      // given
      this.set('isExpanded', true);
      const screen = await render(hbs`<PixAccordions @isExpanded={{this.isExpanded}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);

      // when
      this.set('isExpanded', false);
      await settled();

      // then
      assert.dom(screen.queryByRole('button')).hasAria('expanded', 'false');
      assert.dom(screen.queryByText('Contenu de mon élément')).exists();
      assert.dom(screen.queryByText('Contenu de mon élément')).isNotVisible();
    });

    test('it should display the toggle icon according to the controlled state', async function (assert) {
      // given
      this.set('isExpanded', true);
      await render(hbs`<PixAccordions @isExpanded={{this.isExpanded}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);

      // then
      assert.strictEqual(getToggleIconName(), 'chevronUp');

      // when
      this.set('isExpanded', false);
      await settled();

      // then
      assert.strictEqual(getToggleIconName(), 'chevronDown');
    });

    test('it should set aria-hidden on content according to the controlled state', async function (assert) {
      // given
      this.set('isExpanded', true);
      await render(hbs`<PixAccordions @isExpanded={{this.isExpanded}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);
      await settled();

      // then
      assert.dom('.pix-accordions__content').hasAria('hidden', 'false');

      // when
      this.set('isExpanded', false);
      await settled();

      // then
      assert.dom('.pix-accordions__content').hasAria('hidden', 'true');
    });

    test('it should support the v2 version', async function (assert) {
      // when
      const screen = await render(hbs`<PixAccordions @isExpanded={{true}} @isV2Version={{true}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);

      // then
      assert.dom(screen.queryByRole('button')).hasClass('pix-accordions-v2__title');
      assert.dom(screen.queryByRole('button')).hasAria('expanded', 'true');
      assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
    });

    test('it should stay uncontrolled when @isExpanded is null', async function (assert) {
      // when
      const screen = await render(hbs`<PixAccordions @isExpanded={{null}}>
  <:title>
    Titre de mon élément déroulable
  </:title>
  <:content>
    <p>Contenu de mon élément</p>
  </:content>
</PixAccordions>`);
      await clickByText('Titre de mon élément déroulable');

      // then
      assert.dom(screen.queryByRole('button')).hasAria('expanded', 'true');
      assert.dom(screen.queryByText('Contenu de mon élément')).isVisible();
    });
  });
});
