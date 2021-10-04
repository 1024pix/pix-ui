import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import sinon from 'sinon';
import { render, focus, triggerKeyEvent, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from "../../helpers/create-glimmer-component";
import fillInByLabel from '../../helpers/fill-in-by-label';

module('Integration | Component | pix-input-code', function (hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-input-code';
  const INPUT_SELECTOR = '#code-input';

  test('it renders the default PixInputCode with 6 inputs', async function (assert) {
    // given & when
    await render(hbs`<PixInputCode @ariaLabel="label" />`);

    // then
    assert.dom(COMPONENT_SELECTOR).exists();
    const inputElementsFound = this.element.querySelectorAll('input');
    assert.equal(inputElementsFound.length, 6);
  });

  test('it should throw an error if PixInputCode does not have an ariaLabel', async function (assert) {
    // given
    const componentParams = { ariaLabel: null };
    const component = createGlimmerComponent('component:pix-input-code', componentParams);

    // when & then
    const expectedError = new Error('ERROR in PixInputCode component, you must provide an @ariaLabel');
    assert.throws(function () {
      component.ariaLabel
    }, expectedError);
  });

  test('it should focus on next input after inputting value', async function (assert) {
    // given
    await render(hbs`<PixInputCode @ariaLabel="Mon super input code" />`);

    // when
    await fillInByLabel('Mon super input code n°1', '1');

    // then
    assert.dom(`${INPUT_SELECTOR}-1`).hasClass('filled');
    assert.dom(`${INPUT_SELECTOR}-2`).isFocused();
  });

  test('it should focus on previous input after Backspace', async function (assert) {
    // given
    await render(hbs`<PixInputCode @ariaLabel="label" />`);

    // when
    await focus(`${INPUT_SELECTOR}-4`);
    await triggerKeyEvent(`${INPUT_SELECTOR}-4`, 'keyup', 'Backspace');

    // then
    assert.dom(`${INPUT_SELECTOR}-3`).isFocused();
  });

  test('it should focus on previous input after ArrowLeft', async function (assert) {
    // given
    await render(hbs`<PixInputCode @ariaLabel="label" />`);

    // when
    await focus(`${INPUT_SELECTOR}-4`);
    await triggerKeyEvent(`${INPUT_SELECTOR}-4`, 'keyup', 'ArrowLeft');

    // then
    assert.dom(`${INPUT_SELECTOR}-3`).isFocused();
  });

  test('it should focus on next input after ArrowRight', async function (assert) {
    // given
    await render(hbs`<PixInputCode @ariaLabel="label" />`);

    // when
    await focus(`${INPUT_SELECTOR}-4`);
    await triggerKeyEvent(`${INPUT_SELECTOR}-4`, 'keyup', 'ArrowRight');

    // then
    assert.dom(`${INPUT_SELECTOR}-5`).isFocused();
  });

  test('it should not focus on next input after ArrowUp or ArrowDown', async function (assert) {
    // given
    await render(hbs`<PixInputCode @ariaLabel="label" />`);

    // when
    await focus(`${INPUT_SELECTOR}-4`);
    await triggerKeyEvent(`${INPUT_SELECTOR}-4`, 'keydown', 'ArrowUp');
    await triggerKeyEvent(`${INPUT_SELECTOR}-4`, 'keydown', 'ArrowUp');
    await triggerKeyEvent(`${INPUT_SELECTOR}-4`, 'keydown', 'ArrowUp');
    await triggerKeyEvent(`${INPUT_SELECTOR}-4`, 'keydown', 'ArrowDown');

    // then
    assert.dom(`${INPUT_SELECTOR}-4`).isFocused();
  });

  test('it should truncate input to 1 digit', async function (assert) {
    // given
    await render(hbs`<PixInputCode @ariaLabel="label" />`);

    // when
    await fillInByLabel('label n°4', '12345');

    // then
    assert.dom(`${INPUT_SELECTOR}-5`).isFocused();
    assert.dom(`${INPUT_SELECTOR}-5`).isFocused();
    assert.dom(`${INPUT_SELECTOR}-4`).hasValue('1');
  });

  test('it should not allow characters when type is number', async function (assert) {
    // given
    await render(hbs`<PixInputCode @ariaLabel="label" />`);

    // when
    await fillInByLabel('label n°4', 'a');

    // then
    assert.dom(`${INPUT_SELECTOR}-4`).isFocused();
    assert.dom(`${INPUT_SELECTOR}-4`).doesNotHaveClass('filled');
    assert.dom(`${INPUT_SELECTOR}-4`).hasValue('');
  });

  test('it should truncate input to 1 character', async function (assert) {
    // given
    await render(hbs`<PixInputCode @ariaLabel="label" @inputType="text" />`);

    // when
    await fillInByLabel('label n°4', 'abcdf');

    // then
    assert.dom(`${INPUT_SELECTOR}-5`).isFocused();
    assert.dom(`${INPUT_SELECTOR}-4`).hasValue('a');
  });

  test('it should support paste filling all inputs', async function (assert) {
    // given
    await render(hbs`<PixInputCode @ariaLabel="label" />`);

    // when
    await triggerEvent(`${INPUT_SELECTOR}-1`, 'paste', { clipboardData: { getData: () => '123456' } });

    // then
    [1, 2, 3, 4, 5, 6].forEach(index => {
      assert.dom(`${INPUT_SELECTOR}-${index}`).hasValue(`${index}`);
    });
  });

  test('it should trigger function with entered code when all inputs are filled', async function (assert) {
    // given
    this.set('onAllInputsFilled', sinon.spy());
    await render(hbs`<PixInputCode @ariaLabel="label" @onAllInputsFilled={{this.onAllInputsFilled}} />`);

    // when
    await fillInByLabel('label n°1', '3');
    await fillInByLabel('label n°2', '5');
    await fillInByLabel('label n°3', '7');
    await fillInByLabel('label n°4', '2');
    await fillInByLabel('label n°5', '4');
    await fillInByLabel('label n°6', '6');

    // then
    assert.ok(this.onAllInputsFilled.calledOnce, 'the callback should be called once');
    assert.ok(this.onAllInputsFilled.calledWith, ['357246']);
  });

  test('it should not trigger function with entered code when all inputs not filled', async function (assert) {
    // given
    this.set('onAllInputsFilled', sinon.spy());
    await render(hbs`<PixInputCode @ariaLabel="label" @onAllInputsFilled={{this.onAllInputsFilled}} />`);

    // when
    await fillInByLabel('label n°1', '3');
    await fillInByLabel('label n°2', '5');
    await fillInByLabel('label n°3', '7');
    await fillInByLabel('label n°5', '4');
    await fillInByLabel('label n°6', '6');

    // then
    assert.notOk(this.onAllInputsFilled.calledOnce);
  });

  test('it should trigger function with entered code even if last entered value is not the last input', async function (assert) {
    // given
    this.set('onAllInputsFilled', sinon.spy());
    await render(hbs`<PixInputCode @ariaLabel="label" @onAllInputsFilled={{this.onAllInputsFilled}} />`);

    // when
    await fillInByLabel('label n°1', '3');
    await fillInByLabel('label n°2', '5');
    await fillInByLabel('label n°3', '7');
    await fillInByLabel('label n°5', '4');
    await fillInByLabel('label n°6', '6');
    await fillInByLabel('label n°4', '2');

    // then
    assert.ok(this.onAllInputsFilled.calledOnce, 'the callback should be called once');
    assert.ok(this.onAllInputsFilled.calledWith, ['357246']);
  });

  test('it should trigger function with entered code after paste', async function (assert) {
    // given
    this.set('onAllInputsFilled', sinon.spy());
    await render(hbs`<PixInputCode @ariaLabel="label" @onAllInputsFilled={{this.onAllInputsFilled}} />`);

    // when
    await triggerEvent(`${INPUT_SELECTOR}-1`, 'paste', { clipboardData: { getData: () => '357246' } });

    // then
    assert.ok(this.onAllInputsFilled.calledOnce, 'the callback should be called once');
    assert.ok(this.onAllInputsFilled.calledWith, ['357246']);
  });
});
