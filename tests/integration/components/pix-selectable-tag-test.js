import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | selectable-tag', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders PixSelectableTag component with label attribute', async function (assert) {
    // when
    await render(hbs`<PixSelectableTag @label='test PixSelectableTag'>
  content
</PixSelectableTag>`);

    // then
    assert.contains('test PixSelectableTag');
  });

  test('it renders PixSelectableTag component with id attribute', async function (assert) {
    // when
    await render(hbs`<PixSelectableTag @label='test PixSelectableTag' @id='testId'>
  content
</PixSelectableTag>`);

    // then
    assert.dom('#testId').exists();
  });
  test('it renders PixSelectableTag component with checked attribute', async function (assert) {
    // when
    await render(hbs`<PixSelectableTag @label='test PixSelectableTag' @id='testId' @checked='true'>
  content
</PixSelectableTag>`);

    // then
    assert.dom('#testId').isChecked();
  });
});
