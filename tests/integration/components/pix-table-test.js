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
        age: 'il a 15ans',
      },
      {
        name: 'brian',
        description: 'travail au peach pit',
        age: 'il a 25ans',
      },
    ];

    this.headers = [
      {
        name: 'Nom',
        key: 'name',
      },
      {
        name: 'Description',
        key: 'description',
      },
      {
        name: 'Age',
        key: 'age',
      },
    ];
  });

  test('it renders the default PixTable', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixTable
  @caption='Ceci est le caption de notre table'
  @data={{this.data}}
  @headers={{this.headers}}
/>`,
    );

    // then
    assert.dom(screen.queryByRole('columnheader', { name: 'Nom' })).exists();
    assert.dom(screen.queryByRole('columnheader', { name: 'Description' })).exists();
    assert.dom(screen.queryByRole('columnheader', { name: 'Age' })).exists();
    assert.dom(screen.queryByRole('cell', { name: 'jean' })).exists();
    assert.dom(screen.queryByRole('cell', { name: 'fort au jungle speed' })).exists();
    assert.dom(screen.queryByRole('cell', { name: 'il a 15ans' })).exists();
    assert
      .dom(screen.queryByRole('caption', { name: 'Ceci est le caption de notre table' }))
      .exists();
    assert.dom(this.element.querySelector('colgroup')).doesNotExist();
  });

  test('it should renders the colgroup', async function (assert) {
    // when
    await render(
      hbs`<PixTable
  @caption='Ceci est le caption de notre table'
  @data={{this.data}}
  @headers={{this.headers}}
>
  <:colgroup>
    <col /><col /><col />
  </:colgroup>
</PixTable>`,
    );
    // then

    assert.dom(this.element.querySelector('colgroup')).exists();
  });

  ['orga', 'primary', 'certif'].forEach(function (variant) {
    test(`it add the correct className from ${variant}`, async function (assert) {
      // when
      this.variant = variant;
      const screen = await render(
        hbs`<PixTable
  @caption='Ceci est le caption de notre table'
  @data={{this.data}}
  @headers={{this.headers}}
  @variant={{this.variant}}
/>`,
      );
      // then
      assert.strictEqual(
        screen.queryByRole('columnheader', { name: 'Nom' }).getAttribute('class'),
        `pix-table-header--${variant}`,
      );
    });
  });
});
