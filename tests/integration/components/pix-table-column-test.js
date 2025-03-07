//! template-lint-disable
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | table-column', function (hooks) {
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

  module('#warn', function (hooks) {
    let warnStub;
    hooks.beforeEach(function () {
      warnStub = sinon.stub(console, 'warn');
    });

    hooks.afterEach(function () {
      warnStub.restore();
    });

    test('should warn when provided incorrect type', async function (assert) {
      this.wrongType = 'wrong type';

      // when
      await render(
        hbs`<PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
  <:columns as |row context|>
    <PixTableColumn @context={{context}} @type={{this.wrongType}}>
      <:header>
        Nom
      </:header>
      <:cell>
        {{row.name}}
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>`,
      );

      // then
      assert.ok(
        warnStub.calledWithExactly('WARNING: PixTableColumn: you need to provide a valid type'),
      );
    });
  });

  module('when type is text', function () {
    test('it renders a text column by default', async function (assert) {
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
  </:columns>
</PixTable>`,
      );

      // then
      const cell = screen.queryByRole('cell', { name: 'jean' });
      assert.dom(cell).exists();
      const textAlign = window.getComputedStyle(cell).getPropertyValue('text-align');
      assert.strictEqual(textAlign, 'start');
    });
  });

  module('when type is number', function () {
    test('it renders a number column', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
  <:columns as |row context|>
    <PixTableColumn @context={{context}} @type='number'>
      <:header>
        Âge
      </:header>
      <:cell>
        {{row.age}}
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>`,
      );

      // then
      const cell = screen.queryByRole('cell', { name: '15' });
      assert.dom(cell).exists();
      const textAlign = window.getComputedStyle(cell).getPropertyValue('text-align');
      assert.strictEqual(textAlign, 'left');
    });
  });

  module('when isMainRow defined', function () {
    test('it renders a defined row title', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
  <:columns as |row context|>
    <PixTableColumn @context={{context}} @isMainRow={{true}}>
      <:header>
        Nom
      </:header>
      <:cell>
        {{row.name}}
      </:cell>
    </PixTableColumn>
    <PixTableColumn @context={{context}} @type='number'>
      <:header>
        Âge
      </:header>
      <:cell>
        {{row.age}}
      </:cell>
    </PixTableColumn>
  </:columns>
</PixTable>`,
      );

      // then
      const row = screen.getByRole('row', { name: 'jean 15' });
      assert.ok(row);
    });
  });
});
