import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render, clickByText } from '@1024pix/ember-testing-library';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | checkbox', function (hooks) {
  setupRenderingTest(hooks);

  const CHECKBOX_INPUT_SELECTOR = '.pix-checkbox input';

  test('it should be possible to check the checkbox', async function (assert) {
    // when
    await render(hbs`<PixCheckbox @id='checkboxId'>Recevoir la newsletter</PixCheckbox>`);
    await clickByText('Recevoir la newsletter');

    // then
    const checkbox = this.element.querySelector(CHECKBOX_INPUT_SELECTOR);
    assert.true(checkbox.checked);
  });

  test('it should throw an error if there is no id', async function (assert) {
    // given & when
    const componentParams = { id: '   ', label: 'Super label' };
    const renderComponent = function () {
      createGlimmerComponent('component:pix-checkbox', componentParams);
    };

    // then
    const expectedError = new Error('ERROR in PixCheckbox component, @id param is not provided');
    assert.throws(renderComponent, expectedError);
  });

  test('it should display error message if there no yield', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixCheckbox @id='checkboxId' />`);

    // then
    assert
      .dom(screen.getByLabelText('yield required to give a label for PixCheckBox checkboxId.'))
      .exists();
  });

  test('it should be possible to make label small', async function (assert) {
    // when
    await render(hbs`<PixCheckbox @id='checkboxId' @labelSize='small'>Mini label</PixCheckbox>`);

    // then
    assert.dom('.pix-checkbox__label--small').exists();
  });

  test('it should be possible to insert html in label', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixCheckbox @id='checkboxId'>Accepter les cgu,
  <a href='https://cgu.example.net'>voir ici</a></PixCheckbox>`
    );

    // then
    assert.dom(screen.getByLabelText('Accepter les cgu, voir ici')).exists();
  });

  test('it should be possible to control state', async function (assert) {
    // given
    this.set('checked', false);
    await render(
      hbs`<PixCheckbox @id='checkboxId' @checked={{checked}}>Recevoir la newsletter</PixCheckbox>`
    );
    const checkbox = this.element.querySelector(CHECKBOX_INPUT_SELECTOR);
    assert.false(checkbox.checked);

    // when
    this.set('checked', true);

    // then
    assert.true(checkbox.checked);
  });
});
