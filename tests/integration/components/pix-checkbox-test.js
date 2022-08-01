import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render, clickByText, clickByName } from '@1024pix/ember-testing-library';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | checkbox', function (hooks) {
  setupRenderingTest(hooks);

  const CHECKBOX_INPUT_SELECTOR = '.pix-checkbox input';

  test('it should be possible to check the checkbox', async function (assert) {
    // when
    await render(hbs`<PixCheckbox @id="checkboxId" @label="Recevoir la newsletter" />`);
    await clickByText('Recevoir la newsletter');

    // then
    const checkbox = this.element.querySelector(CHECKBOX_INPUT_SELECTOR);
    assert.true(checkbox.checked);
  });

  test('it should throw an error if there is no id', async function (assert) {
    // given & when
    const componentParams = { id: '   ' };
    const component = createGlimmerComponent('component:pix-checkbox', componentParams);

    // then
    const expectedError = new Error('ERROR in PixCheckbox component, @id param is not provided');
    assert.throws(function () {
      component.id;
    }, expectedError);
  });

  test('it should throw an error if pix checkbox has neither a label nor an ariaLabel param', async function (assert) {
    // given & when
    const componentParams = { id: 'superId', label: null, ariaLabel: null };
    const component = createGlimmerComponent('component:pix-checkbox', componentParams);

    // then
    const expectedError = new Error(
      'ERROR in PixCheckbox component, you must provide @label or @ariaLabel params'
    );
    assert.throws(function () {
      component.label;
    }, expectedError);
    assert.throws(function () {
      component.ariaLabel;
    }, expectedError);
  });

  test('it should be possible to render and click on aria-labelled checkbox (without label)', async function (assert) {
    // given & when
    await render(hbs`<PixCheckbox @id="checkboxId" @ariaLabel="Recevoir la newsletter" />`);
    await clickByName('Recevoir la newsletter');

    // then
    const checkbox = this.element.querySelector(CHECKBOX_INPUT_SELECTOR);
    assert.true(checkbox.checked);
  });

  test('it should be possible to make label small', async function (assert) {
    // when
    await render(hbs`<PixCheckbox @id="checkboxId" @label="Mini label" @labelSize="small" />`);

    // then
    assert.dom('.pix-checkbox__label--small').exists();
  });

  test('it should be possible to insert html in label', async function (assert) {
    // given & when
    const labelWithHtml = 'Accepter les cgu, <a href="https://cgu.example.net">voir ici</a>';
    this.set('label', labelWithHtml);
    const screen = await render(hbs`<PixCheckbox @id="checkboxId" @label={{label}} />`);

    // then
    assert.dom(screen.getByLabelText('Accepter les cgu, voir ici')).exists();
  });
});
