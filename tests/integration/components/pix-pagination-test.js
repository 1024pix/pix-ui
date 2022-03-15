import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pagination', function (hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pagination-control';
  const paginationData = {
    page: 1,
    pageSize: 10,
    rowCount: 2,
    pageCount: 1,
  };

  test('it renders the default PixPagination', async function (assert) {
    // when
    await render(hbs`
      <PixPagination/>
    `);
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.textContent.trim(), 'content');
  });

  test('Use locale params to translate component', async function (assert) {
    // given
    this.locale = 'en';
    const COMPONENT_SELECTOR = '.page-size__label';
    this.set('pagination', paginationData);

    // when
    await render(hbs`
      <PixPagination
        @locale={{this.locale}}
        @pagination={{pagination}}
      />
    `);
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.textContent.trim(), 'See');
  });
  test('Use PixPagination without locale params', async function (assert) {
    // given
    const COMPONENT_SELECTOR = '.page-size__label';
    this.set('pagination', paginationData);
    // when
    await render(hbs`
      <PixPagination
         @pagination={{pagination}}
      />
    `);
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.textContent.trim(), 'Voir');
  });
});
