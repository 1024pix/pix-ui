import { render } from '@1024pix/ember-testing-library';
import { fillIn, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | textarea', function (hooks) {
  setupRenderingTest(hooks);

  const TEXTAREA_SELECTOR = '.pix-textarea textarea';
  const ABBR_SELECTOR = '.mandatory-mark';

  test('it renders PixTextarea with correct id and content', async function (assert) {
    // given
    const newContent = 'Bonjour Pix !';

    // when
    const screen = await render(
      hbs`<PixTextarea @id='7' @value='old value'><:label>label</:label></PixTextarea>`,
    );
    const textarea = screen.getByLabelText('label');

    await fillIn(textarea, newContent);

    // then
    assert.dom(textarea).hasValue(newContent);
    assert.strictEqual(textarea.id, '7');
  });

  module('available letter', function () {
    test('it should show empty textarea with no count', async function (assert) {
      // given
      const defaultValue = '';
      this.set('value', defaultValue);
      const maxlength = '20';
      this.set('maxlength', maxlength);

      // when
      const screen = await render(
        hbs`<PixTextarea @value={{this.value}} @maxlength={{this.maxlength}} @id='textarea-id'><:label
  >label</:label></PixTextarea>`,
      );
      const textarea = screen.getByLabelText('label');

      // then
      assert.dom(textarea).hasAttribute('maxlength', maxlength);
      assert.ok(screen.getByText('0 / 20'));
    });

    test('it should filled textarea with available letter remaining', async function (assert) {
      // given
      const defaultValue = 'Hello Pix !';
      this.set('value', defaultValue);
      const maxlength = '20';
      this.set('maxlength', maxlength);

      // when
      const screen = await render(
        hbs`<PixTextarea @value={{this.value}} @maxlength={{this.maxlength}} @id='textarea-id'><:label
  >label</:label></PixTextarea>`,
      );
      const textarea = screen.getByLabelText('label');

      // then

      assert.dom(textarea).hasValue(defaultValue);
      assert.dom(textarea).hasAttribute('maxlength', maxlength);
      assert.ok(screen.getByText('11 / 20'));
    });

    test('it should update the count when typing', async function (assert) {
      // given
      this.set('value', '');
      const screen = await render(
        hbs`<PixTextarea @value={{this.value}} @maxlength='20' @id='textarea-id'><:label
  >label</:label></PixTextarea>`,
      );

      // when
      await fillIn(screen.getByLabelText('label'), 'Hello');

      // then
      assert.ok(screen.getByText('5 / 20'));
    });

    test('it should update the count when the value is reset programmatically', async function (assert) {
      // given
      this.set('value', 'Hello Pix !');
      const screen = await render(
        hbs`<PixTextarea @value={{this.value}} @maxlength='20' @id='textarea-id'><:label
  >label</:label></PixTextarea>`,
      );
      await fillIn(screen.getByLabelText('label'), 'Bonjour');

      // when
      this.set('value', '');
      await settled();

      // then
      assert.dom(screen.getByLabelText('label')).hasValue('');
      assert.ok(screen.getByText('0 / 20'));
    });

    test('it should update the count when the owning form is reset', async function (assert) {
      // given
      this.set('value', '');
      const screen = await render(
        hbs`<form><PixTextarea @value={{this.value}} @maxlength='20' @id='textarea-id'><:label
    >label</:label></PixTextarea></form>`,
      );
      await fillIn(screen.getByLabelText('label'), 'Bonjour');

      // when
      this.element.querySelector('form').reset();
      await settled();

      // then
      assert.ok(screen.getByText('0 / 20'));
    });
  });

  test('it should be possible to add required attributes to PixTextarea', async function (assert) {
    // given
    const defaultValue = '';
    this.set('value', defaultValue);

    // when
    await render(
      hbs`<PixTextarea @value={{this.value}} required='true'><:label>label</:label></PixTextarea>`,
    );

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    assert.true(textarea.required);
  });

  test('it should add requiredLabel message in label', async function (assert) {
    // given
    const requiredLabel = 'Obligatoire';
    this.set('requiredLabel', requiredLabel);

    // when{{
    await render(
      hbs`<PixTextarea @value={{this.value}} @id='pix-textarea' @requiredLabel={{this.requiredLabel}}><:label
  >label</:label></PixTextarea>`,
    );

    // then
    const abbr = this.element.querySelector(ABBR_SELECTOR);
    assert.deepEqual(abbr.title, requiredLabel);
  });

  test('it should add required html attributes when given a requiredLabel argument', async function (assert) {
    // given
    const defaultValue = '';
    this.set('value', defaultValue);

    // when
    await render(
      hbs`<PixTextarea @value={{this.value}} @requiredLabel='Obligatoire' @id='id'><:label
  >label</:label></PixTextarea>`,
    );

    // then
    const textarea = this.element.querySelector(TEXTAREA_SELECTOR);
    assert.true(textarea.required);
    assert.strictEqual(textarea.ariaRequired, 'true');
  });

  test('it should be possible to give a label', async function (assert) {
    // given & when
    await render(
      hbs`<PixTextarea @id='pix-select-with-label'><:label>Décrivez votre problème</:label></PixTextarea>`,
    );

    // then
    assert.contains('Décrivez votre problème');
  });

  test('it should be possible to show an error message', async function (assert) {
    // given & when
    await render(
      hbs`<PixTextarea @id='pix-textarea-with-error' @errorMessage='Veuillez remplir ce champ.'><:label
  >label</:label></PixTextarea>`,
    );

    // then
    assert.contains('Veuillez remplir ce champ.');
  });
});
