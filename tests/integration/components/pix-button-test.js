import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | button', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-button';

  test('it renders the default PixButton', async function(assert) {
    // when
    await render(hbs`
      <PixButton>
        Mon bouton
      </PixButton>
    `);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(componentElement.textContent.trim(), 'Mon bouton');
    assert.equal(componentElement.type, 'button');
  });

  test('it renders the PixButton component with the given type', async function(assert) {
    // when
    await render(hbs`
      <PixButton @type="submit">
        Mon bouton
      </PixButton>
    `);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(componentElement.type, 'submit');
  });

  test('it renders the PixButton component with isDisabled attribute', async function(assert) {
    // given
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });

    //when
    await render(hbs`
      <PixButton
      @isDisabled={{true}}
      @triggerAction={{this.triggerAction}}>
        Mon bouton
      </PixButton>
    `);

    await click('button');

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(this.count, 1);
    assert.equal(componentElement.disabled, true);
  });

  test('it should call the action', async function(assert) {
    // given
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });

    //when
    await render(hbs`
      <PixButton @triggerAction={{this.triggerAction}} />
    `);

    await click('button');

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(this.count, 2);
    assert.equal(componentElement.disabled, false);
  });

  module('when type is submit, if no trigger action is defined', ()=>{

    test('if clicked, it should do nothing', async function(assert) {
      // given
      await render(hbs`
      <PixButton @type="submit" />
      `);

      //  when
      await click('button');

      // then
      const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
      assert.equal(componentElement.type, 'submit');
    });
  })

  test('it renders the PixButton link component', async function(assert) {
    // when
    await render(hbs`
      <PixButton
        @route='profile'
        class="very-small">
          Mon lien
      </PixButton>
    `);

    // then
    assert.dom('a.very-small').exists();
  });

  test('it renders the PixButton link component with model', async function(assert) {
    // when
    await render(hbs`
      <PixButton
        @route='profile'
        class="smaller"
        @model={{1}}>
          Mon lien
      </PixButton>
    `);

    // then
    assert.dom('a.smaller').exists();
  });

  module('when the button has a trigger action with a promise', function(hooks) {
    let clock;

    hooks.beforeEach(function() {
      clock = sinon.useFakeTimers();
    })

    hooks.afterEach(function() {
      clock.restore();
    })

    test('should display a loading state', async function(assert) {
      // given
      this.set('triggerAction', () => {
        return new Promise((resolve) => {
          let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve();
          }, 1)
        });
      });

      // when
      await render(hbs`<PixButton @triggerAction={{this.triggerAction}} />`);
      await click('button');

      // then
      const loadingComponent = this.element.querySelector('.loader');
      assert.ok(loadingComponent);
    });
  });

  module('when the button has isLoading to true', function() {
    test('should display a loading state', async function(assert) {
      // given
      this.set('triggerAction', () => {});
      this.set('isLoading', true);

      // when
      await render(hbs`<PixButton @isLoading={{isLoading}} />`);

      // then
      const loadingComponent = this.element.querySelector('.loader');
      assert.ok(loadingComponent);
    });
  });
});
