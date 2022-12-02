import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Modifier | on-close-action', function (hooks) {
  setupRenderingTest(hooks);

  test.only('it fires action on close', async function (assert) {
    // given
    this.title = 'Close me baby one more time';
    this.onCloseAction = sinon.stub();
    this.isOpen = false;

    // when
    await render(hbs`<PixModal
  @title={{this.title}}
  {{on-close-action this.isOpen this.onCloseAction}}
>
  content
</PixModal>`);
    await click('.pix-modal__overlay');

    // then
    assert.ok(this.onCloseAction.calledOnce);
  });
});
