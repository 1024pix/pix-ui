import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render, clickByText } from '@1024pix/ember-testing-library';

module('Integration | Component | PixCheckbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it should be possible to check the checkbox', async function (assert) {
    // given
    // when
    await render(hbs`<PixCheckbox><:label>Recevoir la newsletter</:label></PixCheckbox>`);
    await clickByText('Recevoir la newsletter');

    // then
    const checkbox = this.element.querySelector('.pix-checkbox__input');
    assert.true(checkbox.checked);
  });

  test('it should be possible to disable the checkbox', async function (assert) {
    // when
    await render(hbs`<PixCheckbox disable><:label>Mini label</:label></PixCheckbox>`);

    // then
    assert.dom('.pix-checkbox__input[disable]').exists();
  });

  test('it should be possible to insert html in label', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixCheckbox><:label>Accepter les cgu,
    <a href='https://cgu.example.net'>voir ici</a></:label></PixCheckbox>`,
    );

    // then
    assert.dom(screen.getByLabelText('Accepter les cgu, voir ici')).exists();
  });

  test('it should be possible to control state', async function (assert) {
    // given
    this.set('checked', false);
    await render(
      hbs`<PixCheckbox @checked={{this.checked}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
    );
    const checkbox = this.element.querySelector('.pix-checkbox__input');
    assert.false(checkbox.checked);

    // when
    this.set('checked', true);

    // then
    assert.true(checkbox.checked);
  });
});
