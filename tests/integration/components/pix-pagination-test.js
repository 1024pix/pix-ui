import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pagination', function (hooks) {
  setupRenderingTest(hooks);

  test('Use PixPagination without locale params', async function (assert) {
    // given
    const paginationData = {
      page: 1,
      pageSize: 10,
      rowCount: 2,
      pageCount: 1,
    };
    this.set('pagination', paginationData);
    // when
    const screen = await render(hbs`
      <PixPagination
         @pagination={{pagination}}
      />
    `);

    // then
    assert.dom(screen.getByText('Voir')).exists();
    assert.dom(screen.getByText('2 éléments')).exists();
    assert.dom(screen.getByText('Page 1 / 1')).exists();
  });

  test('Use locale params to translate component', async function (assert) {
    // given
    const paginationData = {
      page: 1,
      pageSize: 10,
      rowCount: 2,
      pageCount: 1,
    };
    this.set('locale', 'en');
    this.set('pagination', paginationData);

    // when
    const screen = await render(hbs`
      <PixPagination
        @pagination={{pagination}}
        @locale={{this.locale}}
      />
    `);

    // then
    assert.dom(screen.getByText('See')).exists();
    assert.dom(screen.getByText('2 items')).exists();
    assert.dom(screen.getByText('Page 1 / 1')).exists();
  });

  test('When pagination params have options to display several pages', async function (assert) {
    // given
    const paginationData = {
      page: 2,
      pageSize: 10,
      rowCount: 12,
      pageCount: 2,
    };
    this.set('pagination', paginationData);

    // when
    const screen = await render(hbs`
      <PixPagination
        @pagination={{pagination}}
      />
    `);

    // then
    assert.dom(screen.getByText('Voir')).exists();
    assert.dom(screen.getByText('11-12 sur 12 éléments')).exists();
    assert.dom(screen.getByText('Page 2 / 2')).exists();
  });
});
