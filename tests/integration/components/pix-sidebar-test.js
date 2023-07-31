import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, triggerKeyEvent } from '@ember/test-helpers';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | Sidebar', function (hooks) {
  setupRenderingTest(hooks);

  module('when showSidebar is equal true', function () {
    test('it renders the default PixSidebar', async function (assert) {
      // given
      this.title = "It's a sidebar!";
      this.showSidebar = true;

      // when
      await render(hbs`
        <PixSidebar @title={{this.title}} @showSidebar={{this.showSidebar}}>
          <:content>
            content
          </:content>
          <:footer>
            footer
          </:footer>
        </PixSidebar>
      `);

      // then
      assert.contains("It's a sidebar!");
      assert.contains('content');
      assert.contains('footer');
      assert.dom('.pix-sidebar--hidden').doesNotExist();
      assert.dom('.pix-sidebar__overlay--hidden').doesNotExist();
    });

    module('when close button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.title = 'Close me baby one more time';
        this.showSidebar = true;
        this.onClose = sinon.stub();

        // when
        await render(hbs`
          <PixSidebar
            @title={{this.title}}
            @onClose={{this.onClose}}
            @showSidebar={{this.showSidebar}}
          >
          <:content>
            content
          </:content>
          </PixSidebar>
        `);
        await click('[aria-label="Fermer"]');

        // then
        assert.ok(this.onClose.calledOnce);
      });
    });

    module('when escape button is clicked', function () {
      test('it should call onClose function passed in argument', async function (assert) {
        // given
        this.title = 'Close me baby one more time';
        this.showSidebar = true;
        this.onClose = sinon.stub();

        // when
        await render(hbs`
          <PixSidebar
            @title={{this.title}}
            @onClose={{this.onClose}}
            @showSidebar={{this.showSidebar}}
          >
          <:content>
            content
          </:content>
          </PixSidebar>
        `);
        await triggerKeyEvent('.pix-sidebar__overlay', 'keyup', 'Escape');

        // then
        assert.ok(this.onClose.calledOnce);
      });
    });
  });

  module('when showSidebar is false', function () {
    test('it should not show sidebar', async function (assert) {
      // given
      this.title = "It's a sidebar!";
      this.showSidebar = false;

      // when
      await render(hbs`
        <PixSidebar @title={{this.title}} @showSidebar={{this.showSidebar}}>
          <:content>
            content
          </:content>
          <:footer>
            footer
          </:footer>
        </PixSidebar>
      `);

      // then
      assert.dom('.pix-sidebar--hidden').exists();
      assert.dom('.pix-sidebar__overlay--hidden').exists();
    });
  });

  test('it should throw an error if require @title argument is missing', async function (assert) {
    // given
    const componentParams = {};

    // when
    const renderComponent = function () {
      createGlimmerComponent('pix-sidebar', componentParams);
    };

    // then
    const expectedError = new Error('ERROR in PixSidebar component: @title argument is required.');
    assert.throws(renderComponent, expectedError);
  });
});
