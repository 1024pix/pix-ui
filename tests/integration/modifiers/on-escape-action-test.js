import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { triggerKeyEvent } from '@ember/test-helpers';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Modifier | on-escape-action', function (hooks) {
  setupRenderingTest(hooks);

  test('it fires action on escape keyup', async function (assert) {
    // given
    this.title = 'Close me baby one more time';
    this.onCloseButtonClick = sinon.stub();

    // when
    await render(hbs`<PixModal
  @title={{this.title}}
  @onCloseButtonClick={{this.onCloseButtonClick}}
  {{on-escape-action this.onCloseButtonClick}}
  {{trap-focus}}
>
  content
</PixModal>`);
    await triggerKeyEvent('.pix-modal__overlay', 'keyup', 'Escape');

    // then
    assert.ok(this.onCloseButtonClick.calledOnce);
  });
});
