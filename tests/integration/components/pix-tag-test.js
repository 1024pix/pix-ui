import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | pix-tag', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given content', async function (assert) {
    await render(hbs`<PixTag>tag text</PixTag>`);

    assert.contains('tag text');
  });

  test('it renders with the given color class', async function (assert) {
    await render(hbs`<PixTag @color='primary' />`);

    const pixTagElement = this.element.querySelector('.pix-tag');
    assert.ok(pixTagElement.classList.contains('pix-tag--primary'));
  });

  test('it renders with attributes override', async function (assert) {
    const screen = await render(hbs`<PixTag @color='secondary' aria-label='world' />`);

    assert.dom(screen.getByLabelText('world')).exists();
  });

  test('it displays remove button when displayRemoveButton is true', async function (assert) {
    const screen = await render(hbs`<PixTag @displayRemoveButton={{true}}>tag text</PixTag>`);

    assert.dom(screen.getByRole('button', { name: 'Supprimer' })).exists();
  });

  test('it calls onRemove when button is clicked', async function (assert) {
    this.onRemove = sinon.stub();
    const screen = await render(
      hbs`<PixTag @displayRemoveButton={{true}} @onRemove={{this.onRemove}}>tag text</PixTag>`,
    );

    await click(screen.getByRole('button', { name: 'Supprimer' }));

    assert.ok(this.onRemove.calledOnce);
  });
});
