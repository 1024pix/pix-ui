import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render, clickByText } from '@1024pix/ember-testing-library';

module('Integration | Component | checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it should be possible to check the checkbox', async function (assert) {
    // when
    await render(hbs`<PixCheckbox>Recevoir la newsletter</PixCheckbox>`);
    await clickByText('Recevoir la newsletter');

    // then
    const checkbox = this.element.querySelector('.pix-checkbox__input');
    assert.true(checkbox.checked);
  });

  test('it should display error message if there no yield', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixCheckbox />`);

    // then
    assert.dom(screen.getByLabelText('yield required to give a label for PixCheckbox.')).exists();
  });

  test('it should be possible to make label small', async function (assert) {
    // when
    await render(hbs`<PixCheckbox @labelSize='small'>Mini label</PixCheckbox>`);

    // then
    assert.dom('.pix-checkbox__label--small').exists();
  });

  test('it should be possible to disable the checkbox', async function (assert) {
    // when
    await render(hbs`<PixCheckbox disable>Mini label</PixCheckbox>`);

    // then
    assert.dom('.pix-checkbox__input[disable]').exists();
  });

  test('it should be possible to insert html in label', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixCheckbox>Accepter les cgu,
  <a href='https://cgu.example.net'>voir ici</a></PixCheckbox>`,
    );

    // then
    assert.dom(screen.getByLabelText('Accepter les cgu, voir ici')).exists();
  });

  test('it should be possible to control state', async function (assert) {
    // given
    this.set('checked', false);
    await render(hbs`<PixCheckbox @checked={{this.checked}}>Recevoir la newsletter</PixCheckbox>`);
    const checkbox = this.element.querySelector('.pix-checkbox__input');
    assert.false(checkbox.checked);

    // when
    this.set('checked', true);

    // then
    assert.true(checkbox.checked);
  });
});
