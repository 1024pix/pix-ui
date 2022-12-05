import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Modifier | on-escape-action', function (hooks) {
  setupRenderingTest(hooks);

  test('it fires action on escape keyup', async function (assert) {
    // given
    this.title = 'Close me baby one more time';
    this.onClose = sinon.stub();

    // when
    await render(hbs`<PixModal
  @title={{this.title}}
  @onClose={{this.onClose}}
  {{on-escape-action this.onClose}}
  {{trap-focus}}
>
  content
</PixModal>`);
    await triggerKeyEvent('.pix-modal__overlay', 'keyup', 'Escape');

    // then
    assert.ok(this.onClose.calledOnce);
  });
});
