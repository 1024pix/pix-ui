import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import clickByLabel from '../../helpers/click-by-label';

module('Integration | Component | button', function (hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-button';

  test('it renders the default PixButton', async function (assert) {
    // when
    await render(hbs`<PixButton>
  Mon bouton
</PixButton>`);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.contains('Mon bouton');
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(componentElement.type, 'button');
  });

  test('it renders the PixButton component with the given type', async function (assert) {
    // when
    await render(hbs`<PixButton @type='submit'>
  Mon bouton
</PixButton>`);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(componentElement.type, 'submit');
  });

  test('it renders the PixButton component with isDisabled attribute', async function (assert) {
    // given
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });

    //when
    await render(hbs`<PixButton @isDisabled={{true}} @triggerAction={{this.triggerAction}} aria-label='button label'>
  Mon bouton
</PixButton>`);

    await clickByLabel('button label');

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(this.count, 1);
    assert.true(componentElement.disabled);
  });

  test('it should call the action', async function (assert) {
    // given
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });

    //when
    await render(
      hbs`<PixButton @triggerAction={{this.triggerAction}} aria-label='button label' />`
    );

    await clickByLabel('button label');

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(this.count, 2);
    assert.false(componentElement.disabled);
  });

  module('when type is submit, if no trigger action is defined', () => {
    test('if clicked, it should do nothing', async function (assert) {
      // given
      await render(hbs`<PixButton @type='submit' aria-label='button label' />`);

      //  when
      await clickByLabel('button label');

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(componentElement.type, 'submit');
    });
  });

  test('it renders the PixButton link component', async function (assert) {
    // when
    await render(hbs`<PixButton @route='profile' class='very-small'>
  Mon lien
</PixButton>`);

    // then
    assert.dom('a.very-small').exists();
  });

  test('it renders the PixButton link component with model', async function (assert) {
    // when
    await render(hbs`<PixButton @route='profile' class='smaller' @model={{1}}>
  Mon lien
</PixButton>`);

    // then
    assert.dom('a.smaller').exists();
  });

  module('when the button has a trigger action with a promise', function (hooks) {
    let clock;

    hooks.beforeEach(function () {
      clock = sinon.useFakeTimers();
    });

    hooks.afterEach(function () {
      clock.restore();
    });

    test('should display a loading state', async function (assert) {
      // given
      this.set('triggerAction', () => {
        return new Promise((resolve) => {
          let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve();
          }, 1);
        });
      });

      // when
      await render(
        hbs`<PixButton @triggerAction={{this.triggerAction}} aria-label='button label' />`
      );
      await clickByLabel('button label');

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
