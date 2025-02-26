//! template-lint-disable
import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

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
        age: 14,
      },
      {
        name: 'zoé',
        description: 'travail aux affaires non classées',
        age: 70,
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

  module('#condensed', function () {
    test('it should not be condensed by default', async function (assert) {
      // when
      await render(
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
      assert.notOk(this.element.querySelector('table').getAttribute('class'));
    });

    test('it should be condensed', async function (assert) {
      // given
      this.condensed = true;

      // when
      await render(
        hbs`<PixTable
  @caption='Ceci est le caption de notre table'
  @data={{this.data}}
  @condensed={{this.condensed}}
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
        this.element.querySelector('table').getAttribute('class'),
        'pix-table__condensed',
      );
    });
  });

  module('#onRowClick', function () {
    test('should call onClick on clicked row', async function (assert) {
      this.onClick = sinon.stub();

      const screen = await render(
        hbs`<PixTable
  @caption='Ceci est le caption de notre table'
  @data={{this.data}}
  @onRowClick={{this.onClick}}
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

      //when
      await click(screen.getByText('jean'));

      // then
      assert.ok(this.onClick.calledWithExactly(this.data[0]));
    });
  });

  module('#sort', function () {
    test('it should call @onSort on click', async function (assert) {
      // given
      const sortStub = sinon.stub();
      this.onSort = sortStub;

      const arialLabelDefaultSort = 'default label sort';
      this.arialLabelDefaultSort = arialLabelDefaultSort;

      // when

      const screen = await render(
        hbs`<PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
  <:columns as |row context|>
    <PixTableColumn
      @context={{context}}
      @onSort={{this.onSort}}
      @sortOrder={{null}}
      @ariaLabelDefaultSort={{this.arialLabelDefaultSort}}
      @ariaLabelSortAsc='asc label sort'
      @ariaLabelSortDesc='desc label sort'
    >
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
      await click(await screen.getByRole('button', { name: arialLabelDefaultSort }));
      assert.ok(sortStub.calledOnce);
    });

    test('it should display `ariaLabelSortAsc` when sortOrder is `desc`', async function (assert) {
      // given
      const sortStub = sinon.stub();
      this.onSort = sortStub;

      this.sortOrder = 'desc';

      const ariaLabelSortAsc = "clicker pour trié dans l'ordre desc";
      this.ariaLabelSortAsc = ariaLabelSortAsc;

      // when

      const screen = await render(
        hbs`<PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
  <:columns as |row context|>
    <PixTableColumn
      @context={{context}}
      @onSort={{this.onSort}}
      @sortOrder={{this.sortOrder}}
      @ariaLabelDefaultSort='default label sort'
      @ariaLabelSortAsc={{this.ariaLabelSortAsc}}
      @ariaLabelSortDesc='desc label sort'
    >
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
      assert.ok(await screen.getByRole('button', { name: ariaLabelSortAsc }));
    });

    test('it should display `ariaLabelSortDesc` when sortOrder is `asc`', async function (assert) {
      // given
      const sortStub = sinon.stub();
      this.onSort = sortStub;

      this.sortOrder = 'asc';

      const ariaLabelSortDesc = "clicker pour trié dans l'ordre asc";
      this.ariaLabelSortDesc = ariaLabelSortDesc;

      // when

      const screen = await render(
        hbs`<PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
  <:columns as |row context|>
    <PixTableColumn
      @context={{context}}
      @onSort={{this.onSort}}
      @sortOrder={{this.sortOrder}}
      @ariaLabelDefaultSort='default label sort'
      @ariaLabelSortDesc={{this.ariaLabelSortDesc}}
      @ariaLabelSortAsc='asc label sort'
    >
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
      assert.ok(await screen.getByRole('button', { name: ariaLabelSortDesc }));
    });

    test('it should not display sortlabel when `@onSort` is not provided', async function (assert) {
      // given
      const arialLabelDefaultSort = 'default label sort';
      this.arialLabelDefaultSort = arialLabelDefaultSort;

      // when
      const screen = await render(
        hbs`<PixTable @caption='Ceci est le caption de notre table' @data={{this.data}}>
  <:columns as |row context|>
    <PixTableColumn @context={{context}} @ariaLabelDefaultSort={{this.arialLabelDefaultSort}}>
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
      assert.notOk(await screen.queryByRole('button', { name: arialLabelDefaultSort }));
    });
  });

  module('#warn', function (hooks) {
    let warnStub;
    hooks.beforeEach(function () {
      warnStub = sinon.stub(console, 'warn');
    });

    hooks.afterEach(function () {
      warnStub.restore();
    });

    test('it should warn when @variant is incorrect', async function (assert) {
      // when
      this.data = [];
      await render(
        hbs`<PixTable @data={{this.data}} @caption='A caption' @variant='wrong variant' />`,
      );

      // then
      assert.ok(
        warnStub.calledWithExactly(
          'WARNING: PixTable: @variant "wrong variant" should be certif, orga or primary',
        ),
      );
    });

    test('it should warn when @caption is not provided', async function (assert) {
      // when
      this.data = [];
      await render(hbs`<PixTable @data={{this.data}} />`);

      // then
      assert.ok(warnStub.calledWithExactly('WARNING: PixTable: @caption is required'));
    });

    test('it should warn when @sortOrder is incorrect', async function (assert) {
      // when
      this.data = [];
      this.onSort = () => {};
      await render(
        hbs`<PixTable @data={{this.data}} @caption='On sort?'>
  <:columns as |row context|>
    <PixTableColumn @context={{context}} @onSort={{this.onSort}} @sortOrder='eeuuuuh' />
  </:columns>
</PixTable>`,
      );

      // then
      assert.ok(
        warnStub.calledWithExactly(
          'WARNING: PixTableColumn: you need to provide a valid sortOrder',
        ),
      );
    });

    test('it should warn when @condensed is incorrect', async function (assert) {
      // when
      this.data = [];
      await render(
        hbs`<PixTable @data={{this.data}} @condensed={{null}} @caption='On condense ?'>
  <:columns as |row context|>
    <PixTableColumn @context={{context}} />
  </:columns>
</PixTable>`,
      );

      // then
      assert.ok(
        warnStub.calledWithExactly(
          'WARNING: PixTable: @condensed must be a boolean, default undefined',
        ),
      );
    });

    [
      {
        ariaLabelDefaultSort: 'tri',
        ariaLabelSortDesc: 'tri',
        ariaLabelSortAsc: undefined,
      },
      {
        ariaLabelDefaultSort: 'tri',
        ariaLabelSortDesc: undefined,
        ariaLabelSortAsc: 'tri',
      },
      {
        ariaLabelDefaultSort: undefined,
        ariaLabelSortDesc: 'tri',
        ariaLabelSortAsc: 'tri',
      },
    ].forEach(function (sortAriaLabels) {
      const [missingLabel] = Object.entries(sortAriaLabels).find(([, value]) => !value);
      test(`it should warn when ${missingLabel} is not provided`, async function (assert) {
        // when
        this.data = [];
        this.onSort = () => {};
        this.ariaLabelDefaultSort = sortAriaLabels.ariaLabelDefaultSort;
        this.ariaLabelSortDesc = sortAriaLabels.ariaLabelSortDesc;
        this.ariaLabelSortAsc = sortAriaLabels.ariaLabelSortAsc;

        await render(hbs`<PixTable @data={{this.data}} @caption='Mon tableau et pas le tien'>
  <:columns as |row context|>
    <PixTableColumn
      @context={{context}}
      @onSort={{this.onSort}}
      @ariaLabelDefaultSort={{this.ariaLabelDefaultSort}}
      @ariaLabelSortDesc={{this.ariaLabelSortDesc}}
      @ariaLabelSortAsc={{this.ariaLabelSortAsc}}
    />
  </:columns>
</PixTable>`);

        // then
        assert.ok(
          warnStub.calledWithExactly(
            'WARNING: PixTableColumn: parameters `@ariaLabelDefaultSort`, `@ariaLabelSortDesc` and `@ariaLabelSortAsc` are required for sort buttons',
          ),
        );
      });
    });
  });
});
