import { render } from '@1024pix/ember-testing-library';
import { triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Modifier | on-escape-action', function (hooks) {
  setupRenderingTest(hooks);

  test('it fires action on escape keyup', async function (assert) {
    // given
    this.onCloseCallback = sinon.stub();

    // when
    await render(
      hbs`<div class='escapable' {{on-escape-action this.onCloseCallback}}>content</div>`,
    );
    await triggerKeyEvent('.escapable', 'keyup', 'Escape');

    // then
    assert.ok(this.onCloseCallback.calledOnce);
  });
});
