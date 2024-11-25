//! template-lint-disable
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixTable', async function (assert) {
    // given
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
  });
});
