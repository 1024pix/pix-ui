import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import clickByLabel from '../../helpers/click-by-label';

module('Integration | Component | icon-button', function (hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-icon-button';
  const iconClass = `${COMPONENT_SELECTOR} > svg`;

  test('it renders PixIconButton with a default fa-icon', async function (assert) {
    // when
    await render(hbs`<PixIconButton @ariaLabel='action du bouton' />`);
    const iconElement = this.element.querySelector(iconClass);

    // then
    assert.ok(iconElement.classList.contains('fa-plus'));
  });

  test('it renders PixIconButton with the specified FaIcon', async function (assert) {
    // when
    await render(hbs`<PixIconButton @icon='xmark' @ariaLabel='action du bouton' />`);
    const iconElement = this.element.querySelector(iconClass);

    // then
    assert.ok(iconElement.classList.contains('fa-xmark'));
    assert.notOk(iconElement.classList.contains('fa-plus'));
  });

  test('it should trigger action if given one', async function (assert) {
    // when
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });
    await render(
      hbs`<PixIconButton @triggerAction={{this.triggerAction}} @ariaLabel='action du bouton' />`
    );
    await clickByLabel('action du bouton');

    // then
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(this.count, 2);
  });

  test('it renders PixIconButton with disabled attribute', async function (assert) {
    // given
    this.set('triggerAction', () => {});

    //when
    await render(hbs`<PixIconButton
  @triggerAction={{this.triggerAction}}
  disabled={{true}}
  @ariaLabel="L'action du bouton"
/>`);
    await clickByLabel('action du bouton');

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.true(componentElement.disabled);
  });

  test('it should not show PixIconButton if ariaLabel is not provided', async function (assert) {
    // given
    const componentParams = { ariaLabel: '   ' };
    const component = createGlimmerComponent('component:pix-icon-button', componentParams);

    // when & then
    const expectedError = new Error(
      'ERROR in PixIconButton component, @ariaLabel param is not provided.'
    );
    assert.throws(function () {
      component.ariaLabel;
    }, expectedError);
  });
});
