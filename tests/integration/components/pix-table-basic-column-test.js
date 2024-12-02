//! template-lint-disable
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table-basic-column', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.data = [
      {
        name: 'jean',
        description: 'fort au jungle speed',
        age: 15,
      },
      {
        name: 'brian',
        description: 'travail au peach pit',
        age: 25,
      },
    ];
  });

  module('when type is text', function () {
    test('it renders a text column by default', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
  <:columns as |row context|>
    <PixTableBasicColumn @context={{context}} @name="Nom" @value={{row.name}} />
  </:columns>
</PixTable>`,
      );

      // then
      const cell = screen.queryByRole('cell', { name: 'jean' });
      const textAlign = window.getComputedStyle(cell).getPropertyValue('text-align');
      assert.dom(cell).exists();
      assert.strictEqual(textAlign, 'start');
    });
  });
});
