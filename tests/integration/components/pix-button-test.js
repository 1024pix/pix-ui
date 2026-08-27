import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | PixButton', function (hooks) {
  setupRenderingTest(hooks);
  const COMPONENT_SELECTOR = '.pix-button';

  test('it renders the default PixButton', async function (assert) {
    // when
    const screen = await render(hbs`<PixButton>
  Mon bouton
</PixButton>`);

    // then
    assert.ok(screen.getByRole('button', { name: 'Mon bouton' }));
  });

  test('it renders the PixButton component with the given type', async function (assert) {
    // when
    const screen = await render(hbs`<PixButton @type='submit'>
  Mon bouton
</PixButton>`);

    // then
    assert.dom(screen.getByRole('button', { name: 'Mon bouton' })).hasAttribute('type', 'submit');
  });

  test('it renders the PixButton component with isDisabled attribute', async function (assert) {
    // given
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });

    //when
    const screen =
      await render(hbs`<PixButton @isDisabled={{true}} @triggerAction={{this.triggerAction}}>
  Mon bouton
</PixButton>`);

    // then
    assert.dom(screen.getByText('Mon bouton')).hasAttribute('aria-disabled', 'true');
  });

  test('it should call the action', async function (assert) {
    // given
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });

    //when
    const screen = await render(
      hbs`<PixButton @triggerAction={{this.triggerAction}}>Mon bouton</PixButton>`,
    );

    await click(screen.getByRole('button', { name: 'Mon bouton' }));

    // then
    assert.strictEqual(this.count, 2);
    assert.ok(screen.getByRole('button', { name: 'Mon bouton' }));
  });

  module('when type is submit, if no trigger action is defined', () => {
    test('if clicked, it should do nothing', async function (assert) {
      // given
      const screen = await render(
        hbs`<PixButton @triggerAction={{this.triggerAction}} @type='submit'>Mon bouton</PixButton>`,
      );

      await click(screen.getByRole('button', { name: 'Mon bouton' }));

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      assert.strictEqual(componentElement.type, 'submit');
    });
  });

  module('when the button has a trigger action with a promise', function (hooks) {
    hooks.beforeEach(function () {
      sinon.useFakeTimers();
    });

    test('should display a loading state', async function (assert) {
      // given
      this.set('triggerAction', () => {
        return new Promise((resolve) => {
          const wait = setTimeout(() => {
            clearTimeout(wait);
            resolve();
          }, 1);
        });
      });

      // when
      const screen = await render(
        hbs`<PixButton @triggerAction={{this.triggerAction}}>Mon bouton</PixButton>`,
      );
      await click(screen.getByRole('button', { name: 'Mon bouton' }));

      // then
      const loadingComponent = this.element.querySelector('.loader');
      assert.ok(loadingComponent);
    });
  });

  module('when the button has isLoading to true', function () {
    test('should display a loading state', async function (assert) {
      // given
      this.set('isLoading', true);

      // when
      await render(hbs`<PixButton @isLoading={{this.isLoading}} />`);

      // then
      const loadingComponent = this.element.querySelector('.loader');
      assert.ok(loadingComponent);
    });
  });
});
