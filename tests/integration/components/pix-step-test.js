import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | PixStep', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders as a listitem with title and index', async function (assert) {
    // given
    this.set('index', 0);
    this.set('title', 'Informations');

    // when
    const screen = await render(hbs`<PixStep @index={{this.index}} @title={{this.title}} />`);

    // then
    assert.dom(screen.getByRole('listitem')).exists();
    assert.dom(screen.getByText('Informations')).exists();
  });

  test('it displays index starting at 1', async function (assert) {
    // given
    this.set('index', 2);
    this.set('title', 'Validation');

    // when
    await render(hbs`<PixStep @index={{this.index}} @title={{this.title}} />`);

    // then
    const index = this.element.querySelector('.pix-step__index');
    assert.strictEqual(index.textContent.trim(), '3');
  });

  test('it sets aria-current="step" when current', async function (assert) {
    // given
    this.set('index', 0);
    this.set('title', 'Étape 1');
    this.set('isCurrent', true);

    // when
    await render(
      hbs`<PixStep @index={{this.index}} @title={{this.title}} @isCurrent={{this.isCurrent}} />`,
    );

    // then
    const step = this.element.querySelector('.pix-step');
    assert.dom(step).hasAttribute('aria-current', 'step');
    assert.dom(step).hasClass('pix-step--current');
  });

  test('it does not set aria-current when not current', async function (assert) {
    // given
    this.set('index', 1);
    this.set('title', 'Étape 2');
    this.set('isCurrent', false);

    // when
    await render(
      hbs`<PixStep @index={{this.index}} @title={{this.title}} @isCurrent={{this.isCurrent}} />`,
    );

    // then
    const step = this.element.querySelector('.pix-step');
    assert.dom(step).doesNotHaveAttribute('aria-current');
    assert.dom(step).doesNotHaveClass('pix-step--current');
  });

  test('it renders subtitle when provided', async function (assert) {
    // given
    this.set('index', 0);
    this.set('title', 'Informations');
    this.set('subtitle', 'Renseignez vos informations');

    // when
    const screen = await render(
      hbs`<PixStep @index={{this.index}} @title={{this.title}} @subtitle={{this.subtitle}} />`,
    );

    // then
    assert.dom(screen.getByText('Renseignez vos informations')).exists();
  });

  test('it does not render subtitle when not provided', async function (assert) {
    // given
    this.set('index', 0);
    this.set('title', 'Étape 1');

    // when
    await render(hbs`<PixStep @index={{this.index}} @title={{this.title}} />`);

    // then
    assert.dom('.pix-step__subtitle').doesNotExist();
  });

  test('it hides visual index from screen readers', async function (assert) {
    // given
    this.set('index', 0);
    this.set('title', 'Étape 1');

    // when
    await render(hbs`<PixStep @index={{this.index}} @title={{this.title}} />`);

    // then
    const index = this.element.querySelector('.pix-step__index');
    assert.dom(index).hasAttribute('aria-hidden', 'true');
  });

  test('it spreads attributes on the root element', async function (assert) {
    // given
    this.set('index', 0);
    this.set('title', 'Étape 1');

    // when
    await render(hbs`<PixStep @index={{this.index}} @title={{this.title}} data-test='custom' />`);

    // then
    const step = this.element.querySelector('.pix-step');
    assert.dom(step).hasAttribute('data-test', 'custom');
  });
});
