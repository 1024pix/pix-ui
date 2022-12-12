import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | PixMenu', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.show = true;
    this.items = [{ label: 'Salade' }];
    this.onClick = sinon.stub();
  });

  module('customize content behavior', function () {
    test('it renders Menu', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixMenu
      @show={{this.show}}
      @items={{this.items}}
      @onClick={{this.onClick}}
        as |item|
    >
      {{item.label}}
    </PixMenu>`);

      // then
      assert.dom(screen.getByRole('menuitem', { name: 'Salade' })).exists();
    });

    test('it calls onClick callback', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixMenu
      @show={{this.show}}
      @items={{this.items}}
      @onClick={{this.onClick}}
      as |item|
    >
      {{item.label}}
    </PixMenu>`);

      await click(screen.queryByRole('menuitem', { name: 'Salade' }));

      // then
      assert.ok(this.onClick.calledOnce);
    });
  });

  module('customize action behavior', function () {
    test('it renders Menu', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixMenu
      @show={{this.show}}
      @items={{this.items}}
      as |item|
    >
      {{item.label}}
    </PixMenu>`);

      // then
      assert.dom(screen.getByRole('menuitem', { name: 'Salade' })).exists();
    });

    test('it passes css class Menu', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixMenu
      @show={{this.show}}
      @items={{this.items}}
      as |item className|
    >
      <div class="{{className}}">{{item.label}}</div>
    </PixMenu>`);

      // then
      assert.dom(screen.getByRole('menuitem', { name: 'Salade' })).exists();
      assert.dom('.pix-menu__item').exists();
    });
  });
});
