import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import clickByLabel from '../../helpers/click-by-label';

module('Integration | Component | icon-button', function (hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-icon-button';

  test('it should trigger action if given one', async function (assert) {
    // when
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });
    await render(
      hbs`<PixIconButton
  @triggerAction={{this.triggerAction}}
  @ariaLabel='action du bouton'
  @iconName='add'
/>`,
    );
    await clickByLabel('action du bouton');

    // then
    assert.strictEqual(this.count, 2);
  });

  test('it renders PixIconButton with disabled attribute', async function (assert) {
    // given
    this.set('triggerAction', () => {});

    //when
    await render(hbs`<PixIconButton
  @triggerAction={{this.triggerAction}}
  @iconName='add'
  disabled={{true}}
  @ariaLabel="L'action du bouton"
/>`);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.true(componentElement.disabled);
  });
});
