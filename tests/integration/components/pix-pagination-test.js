import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | pagination', function (hooks) {
  setupRenderingTest(hooks);

  module('PixPagination controls', function (hooks) {
    let onChangeStub, router;

    hooks.beforeEach(function () {
      onChangeStub = sinon.stub();
      router = this.owner.lookup('service:router');
      router.replaceWith = sinon.stub();
    });

    test('should call onChange on pageSize change', async function (assert) {
      // given
      const paginationData = {
        page: 1,
        pageSize: 10,
        rowCount: 12,
        pageCount: 2,
      };
      const texts = { pageSize: "Nombre d'élément à afficher par page" };

      this.set('pagination', paginationData);
      this.set('onChange', onChangeStub);
      this.set('texts', texts);
      // when
      const screen = await render(
        hbs`<PixPagination @pagination={{this.pagination}} @onChange={{this.onChange}} @texts={{this.texts}} />`,
      );
      await click(screen.getByLabelText(texts.pageSize));
      const optionLine = await screen.findByRole('option', { name: '50' });

      await click(optionLine);

      // then
      assert.ok(
        router.replaceWith.calledWithExactly({ queryParams: { pageSize: 50, pageNumber: 1 } }),
      );
      assert.ok(onChangeStub.called);
    });

    test('should call onChange on nextPage action', async function (assert) {
      // given
      const paginationData = {
        page: 1,
        pageSize: 10,
        rowCount: 12,
        pageCount: 2,
      };
      const texts = { nextPage: 'Page Suivante' };
      this.set('texts', texts);
      this.set('pagination', paginationData);
      this.set('onChange', onChangeStub);

      // when
      const screen = await render(
        hbs`<PixPagination @pagination={{this.pagination}} @onChange={{this.onChange}} @texts={{this.texts}} />`,
      );
      await click(screen.getByRole('button', { name: texts.nextPage, exact: false }));
      // then
      assert.ok(router.replaceWith.calledWithExactly({ queryParams: { pageNumber: 2 } }));
      assert.ok(onChangeStub.called);
    });

    test('should call onChange on previousPage action', async function (assert) {
      // given
      const paginationData = {
        page: 2,
        pageSize: 10,
        rowCount: 12,
        pageCount: 2,
      };

      const texts = { previousPage: 'Page Précédente' };
      this.set('texts', texts);

      this.set('pagination', paginationData);
      this.set('onChange', onChangeStub);

      // when
      const screen = await render(
        hbs`<PixPagination @pagination={{this.pagination}} @onChange={{this.onChange}} @texts={{this.texts}} />`,
      );
      await click(screen.getByRole('button', { name: texts.previousPage, exact: false }));
      // then
      assert.ok(router.replaceWith.calledWithExactly({ queryParams: { pageNumber: 1 } }));
      assert.ok(onChangeStub.called);
    });
  });

  test('When pagination params have options to display several pages', async function (assert) {
    // given
    const paginationData = {
      page: 2,
      pageSize: 10,
      rowCount: 12,
      pageCount: 2,
    };
    const texts = {
      title: 'Voir',
      pageElementCount: '11-12 sur 12 éléments',
      pageNumber: 'Page 2 / 2',
    };
    const onChangeStub = sinon.stub();

    this.set('texts', texts);
    this.set('pagination', paginationData);
    this.set('onChange', onChangeStub);
    // when
    const screen = await render(
      hbs`<PixPagination @pagination={{this.pagination}} @texts={{this.texts}} @onChange={{this.onChange}} />`,
    );

    //then
    assert.notOk(screen.queryByRole('text', { name: texts.title }));
    assert.ok(screen.getByText(texts.pageElementCount));
    assert.ok(screen.getByText(texts.pageNumber));
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
