import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-informations-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it displays informations', async function (assert) {
    this.informations = [{ title: 'def1', description: 'desc1' }];
    await render(
      hbs`<PixInformationsList @informations={{this.informations}}></PixInformationsList>`
    );

    assert.contains('def1');
    assert.contains('desc1');
  });

  test('it displays all informations given', async function (assert) {
    this.informations = [
      { title: 'defA', description: 'descA' },
      { title: 'defB', description: 'descB' },
      { title: 'defC', description: 'descC' },
    ];
    await render(
      hbs`<PixInformationsList @informations={{this.informations}}></PixInformationsList>`
    );

    assert.contains('defA');
    assert.contains('descA');
    assert.contains('defB');
    assert.contains('descB');
    assert.contains('defC');
    assert.contains('descC');
  });
});
