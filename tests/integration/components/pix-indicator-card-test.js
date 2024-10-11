import { assert, module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | PixIndicatorCard', function (hooks) {
  setupRenderingTest(hooks);

  this.title = 'Hello Dedans';
  this.color = 'blue';
  this.icon = 'help';
  this.info = "Coucou la bulle d'info";
  this.loadingMessage = 'texte de chargement sr';

  test('it renders', async function (assert) {
    const screen =
      await render(hbs`<PixIndicatorCard @title={{this.title}} @color={{this.color}} @iconName={{this.icon}}>
  <:default>42</:default>
  <:sub>
    En cours : 1
  </:sub>
</PixIndicatorCard>`);

    assert.strictEqual(screen.getByRole('term').textContent, this.title);
    assert.strictEqual(screen.getByRole('definition').textContent, '42');
    assert.dom(screen.getByText('En cours : 1')).exists();
  });

  test('it shows the pop up info', async function (assert) {
    const screen = await render(hbs`<PixIndicatorCard
  @title={{this.title}}
  @color={{this.color}}
  @iconName={{this.icon}}
  @info={{this.info}}
  @infoLabel='En savoir plus'
>
  <:default>42</:default>
  <:sub>
    En cours : 1
  </:sub>
</PixIndicatorCard>`);
    screen.getByLabelText('En savoir plus').focus();

    const tooltip = await screen.findByRole('tooltip');
    assert.strictEqual(tooltip.innerText, this.info);
  });

  module('#loadingMessage, when is loading', function () {
    test("it didn't display card infos", async function () {
      const screen = await render(hbs`<PixIndicatorCard
  @title={{this.title}}
  @color={{this.color}}
  @iconName={{this.icon}}
  @info={{this.info}}
  @isLoading={{true}}
  @loadingMessage={{this.loadingMessage}}
>
  <:default>42</:default>
  <:sub>
    En cours : 1
  </:sub>
</PixIndicatorCard>`);

      const title = screen.queryByText(this.title);
      assert.dom(title).doesNotExist();
    });

    test('it display loading text', async function () {
      const screen = await render(hbs`<PixIndicatorCard
  @title={{this.title}}
  @color={{this.color}}
  @iconName={{this.icon}}
  @info={{this.info}}
  @isLoading={{true}}
  @loadingMessage={{this.loadingMessage}}
>
  <:default>42</:default>
  <:sub>
    En cours : 1
  </:sub>
</PixIndicatorCard>`);

      const loadingText = screen.queryByText(this.loadingMessage);
      assert.dom(loadingText).exists();
    });
  });
});
