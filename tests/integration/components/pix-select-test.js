import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByName, clickByText, fillByLabel } from '@1024pix/ember-testing-library';
import { triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | PixSelect', function (hooks) {
  setupRenderingTest(hooks);

  this.options = Array.from({ length: 40 }, (_, index) => ({
    value: `${index + 1}`,
    label: `${index + 1}abc`,
  }));

  test('it renders Select', async function (assert) {
    // given & when
    const screen = await render(hbs`
      <PixSelect
        @id="pix-select"
        @options={{this.options}}
        @innerText="Choisissez une option"
        @label="Mon menu déroulant"
        @subLabel="Mon sous label"
      />
    `);

    // then
    assert.dom(screen.getByText('Choisissez une option')).exists();
    assert.dom(screen.getByText('Mon sous label')).exists();
    assert.dom(screen.getByLabelText('Mon menu déroulant')).exists();
  });
});
