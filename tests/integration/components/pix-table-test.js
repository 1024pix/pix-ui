//! template-lint-disable
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table', function (hooks) {
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

  test('it renders the default PixTable', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
  <:columns as |row context|>
    <PixTableColumn @context={{context}}>
      <:header>
        Nom
      </:header>
      <:cell>
        {{row.name}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}}>
      <:header>
        Description
      </:header>
      <:cell>
        {{row.description}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}}>
      <:header>
        Age
      </:header>
      <:cell>
        il a
        {{row.age}}
        ans
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>`,
    );

    // then
    assert.dom(screen.queryByRole('columnheader', { name: 'Nom' })).exists();
    assert.dom(screen.queryByRole('columnheader', { name: 'Description' })).exists();
    assert.dom(screen.queryByRole('columnheader', { name: 'Age' })).exists();
    assert.dom(screen.queryByRole('cell', { name: 'jean' })).exists();
    assert.dom(screen.queryByRole('cell', { name: 'fort au jungle speed' })).exists();
    assert.dom(screen.queryByRole('cell', { name: 'il a 15 ans' })).exists();
    assert
      .dom(screen.queryByRole('caption', { name: 'Ceci est le caption de notre table' }))
      .exists();
  });

  ['orga', 'primary', 'certif'].forEach(function (variant) {
    test(`it add the correct className from ${variant}`, async function (assert) {
      // when
      this.variant = variant;
      await render(
        hbs`<PixTable
  @caption='Ceci est le caption de notre table'
  @data={{this.data}}
  @variant={{this.variant}}
>
  <:columns as |row context|>
    <PixTableColumn @context={{context}}>
      <:header>
        Nom
      </:header>
      <:cell>
        {{row.name}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}}>
      <:header>
        Description
      </:header>
      <:cell>
        {{row.description}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}}>
      <:header>
        Age
      </:header>
      <:cell>
        il a
        {{row.age}}
        ans
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>`,
      );
      // then
      assert.strictEqual(
        this.element.querySelector('thead').getAttribute('class'),
        `pix-table-header--${variant}`,
      );
    });
  });
});
