import { render } from '@1024pix/ember-testing-library';
import { fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | PixCode', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixCode', async function (assert) {
    // given
    const screen = await render(
      hbs`<PixCode @length={{10}}><:label>Code de vérification</:label></PixCode>`,
    );

    // when
    await fillIn(screen.getByRole('textbox', { name: 'Code de vérification' }), 'P-123VALID');

    // then
    assert.contains('P-123VALID');
  });

  test('it should  be possible to provide the expected number of length in the field', async function (assert) {
    // given
    const screen = await render(
      hbs`<PixCode @length={{14}}><:label>Code de vérification</:label></PixCode>`,
    );

    // when
    await fillIn(screen.getByRole('textbox', { name: 'Code de vérification' }), 'P-123VALID');

    // then
    assert
      .dom(screen.getByRole('textbox', { name: 'Code de vérification' }))
      .hasAttribute('maxLength', '14');
    assert
      .dom(screen.getByRole('textbox', { name: 'Code de vérification' }))
      .hasAttribute('minLength', '14');
  });

  test('it should be possible to give an extra information to input', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixCode @length={{10}} @subLabel='exemple: P-1234'><:label>Code de vérification</:label></PixCode>`,
    );

    // then
    assert.ok(screen.getByRole('textbox', { name: 'Code de vérification exemple: P-1234' }));
  });

  test('it should be possible to give an error message to input', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixCode
  @errorMessage='Seul les caractères alphanumériques sont autorisés'
  @validationStatus='error'
><:label>Code de vérification</:label></PixCode>`,
    );

    // then
    assert.dom(screen.getByText('Seul les caractères alphanumériques sont autorisés')).exists();
  });

  test('it should be possible to make "pixCode" required', async function (assert) {
    // given & when
    const screen = await render(
      hbs`<PixCode @length={{10}} @requiredLabel='Champ obligatoire'><:label>Code de vérification</:label></PixCode>`,
    );

    // then
    const requiredInput = screen.getByLabelText('Code de vérification *');
    assert.dom(requiredInput).isRequired();
  });

  module('@length', function (hooks) {
    let warnStub;

    hooks.beforeEach(function () {
      warnStub = sinon.stub(console, 'warn');
    });

    hooks.afterEach(function () {
      warnStub.restore();
    });

    ['', null, undefined].forEach(function (testCase) {
      test(`it should warn when @length="${testCase}"`, async function (assert) {
        // given
        this.set('length', testCase);
        await render(
          hbs`<PixCode @length={{this.length}} @requiredLabel='Champ obligatoire'><:label>Code de vérification</:label></PixCode>`,
        );

        assert.ok(warnStub.calledWithExactly('WARNING: PixCode: @length is required.'));
      });
    });
  });
});
