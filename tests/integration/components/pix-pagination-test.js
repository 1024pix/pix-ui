import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
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
    await render(hbs`<PixPagination @pagination={{this.pagination}} />`);

    const PixPaginationElement = this.element.querySelector('.pix-pagination');
    //then
    assert.ok(PixPaginationElement);
    assert.contains('Voir');
    assert.contains('2 éléments');
    assert.contains('Page 1 / 1');
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
    await render(hbs`<PixPagination @pagination={{this.pagination}} @locale={{this.locale}} />`);

    const PixPaginationElement = this.element.querySelector('.pix-pagination');
    //then
    assert.ok(PixPaginationElement);
    assert.contains('See');
    assert.contains('2 items');
    assert.contains('Page 1 / 1');
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
    await render(hbs`<PixPagination @pagination={{this.pagination}} />`);

    const PixPaginationElement = this.element.querySelector('.pix-pagination');
    //then
    assert.ok(PixPaginationElement);
    assert.contains('Voir');
    assert.contains('11-12 sur 12 éléments');
    assert.contains('Page 2 / 2');
  });
  test('When params isCondensed is true', async function (assert) {
    // given
    const paginationData = {
      page: 2,
      pageSize: 10,
      rowCount: 12,
      pageCount: 2,
    };
    this.set('pagination', paginationData);
    // when
    await render(hbs`<PixPagination @pagination={{this.pagination}} @isCondensed='true' />`);

    const PixPaginationCondensedElement = this.element.querySelector('.pix-pagination-condensed');
    //then
    assert.ok(PixPaginationCondensedElement);
  });
});
