import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import clickByLabel from '../../helpers/click-by-label';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | PixSelect', function (hooks) {
  setupRenderingTest(hooks);

  this.options = Array.from({ length: 10 }, (_, index) => ({
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

  test('it hide the dropdown unless there is a click on the button', async function (assert) {
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
    assert.dom(screen.queryByRole('option', { name: '3abc' })).doesNotExist();
  });

  test('it opens the dropdown', async function (assert) {
    // given
    const screen = await render(hbs`
        <PixSelect
          @id="pix-select"
          @options={{this.options}}
          @innerText="Choisissez une option"
          @label="Mon menu déroulant"
          @subLabel="Mon sous label"
        />
      `);

    // when
    await clickByLabel('Choisissez une option');

    await screen.findByRole('listbox');
    // then
    assert.dom(screen.getByRole('option', { name: '3abc' })).exists();
  });
});
