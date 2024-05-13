import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByName } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import EmberDebug from '@ember/debug';
import sinon from 'sinon';

module('Integration | Component | pix-radio-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixRadioButton', async function (assert) {
    // when
    const screen = await render(hbs`<PixRadioButton><:label>Abricot</:label></PixRadioButton>`);

    // then
    assert.strictEqual(screen.getByLabelText('Abricot').type, 'radio');
  });

  test('it should be possible to add more params to PixRadioButton', async function (assert) {
    // given
    const screen = await render(
      hbs`<PixRadioButton disabled checked><:label>Abricot</:label></PixRadioButton>`,
    );

    // when & then
    assert.true(screen.getByLabelText('Abricot').checked);
  });

  module('@isDisabled', function (hooks) {
    let sandbox;
    hooks.beforeEach(function () {
      sandbox = sinon.createSandbox();
      sandbox.stub(EmberDebug, 'warn');
    });

    hooks.afterEach(function () {
      sandbox.restore();
    });

    test(`it should not be possible to interact when @isDisabled={{true}}`, async function (assert) {
      // given
      this.set('isDisabled', true);
      const screen = await render(
        hbs`<PixRadioButton @isDisabled={{this.isDisabled}}><:label>Abricot</:label></PixRadioButton>`,
      );
      sandbox.assert.calledWith(
        EmberDebug.warn,
        'PixRadioButton: @isDisabled attribute should be a boolean.',
        true,
        {
          id: 'pix-ui.radio-button.is-disabled.not-boolean',
        },
      );
      const radiobutton = screen.getByRole('radio', {
        name: 'Abricot',
        disabled: true,
      });
      assert.false(radiobutton.checked, 'Radiobutton is not checked by default');
      assert.strictEqual(
        radiobutton.getAttribute('aria-disabled'),
        'true',
        '`aria-disabled` should be forced to "true" else VoiceOver don\'t consider the input as "dimmed"',
      );

      // when
      await clickByName('Abricot'); // should not throw!

      // then
      assert.false(radiobutton.checked, "Radiobutton has changed state, but shouldn't have");
    });

    ['true', 'false', 'null', 'undefined'].forEach(function (testCase) {
      test(`it should not be possible to interact when @isDisabled="${testCase}"`, async function (assert) {
        // given
        this.set('isDisabled', testCase);
        const screen = await render(
          hbs`<PixRadioButton @isDisabled={{this.isDisabled}}><:label>Abricot</:label></PixRadioButton>`,
        );
        sandbox.assert.calledWith(
          EmberDebug.warn,
          'PixRadioButton: @isDisabled attribute should be a boolean.',
          false,
          {
            id: 'pix-ui.radio-button.is-disabled.not-boolean',
          },
        );
        const radiobutton = screen.getByRole('radio', {
          name: 'Abricot',
          disabled: true,
        });
        assert.false(radiobutton.checked, 'Radiobutton is not checked by default');
        assert.strictEqual(
          radiobutton.getAttribute('aria-disabled'),
          'true',
          '`aria-disabled` should be forced to "true" else VoiceOver don\'t consider the input as "dimmed"',
        );

        // when
        await clickByName('Abricot'); // should not throw!

        // then
        assert.false(radiobutton.checked, "Radiobutton has changed state, but shouldn't have");
      });
    });

    [false, null, undefined].forEach(function (testCase) {
      test(`it should be possible to interact when @isDisabled={{${testCase}}}`, async function (assert) {
        // given
        this.set('isDisabled', testCase);
        const screen = await render(
          hbs`<PixRadioButton @isDisabled={{this.isDisabled}}><:label>Abricot</:label></PixRadioButton>`,
        );
        sandbox.assert.calledWith(
          EmberDebug.warn,
          'PixRadioButton: @isDisabled attribute should be a boolean.',
          true,
          {
            id: 'pix-ui.radio-button.is-disabled.not-boolean',
          },
        );
        const radiobutton = screen.getByRole('radio', {
          name: 'Abricot',
          disabled: true,
        });
        assert.false(radiobutton.checked, 'Radiobutton is not checked by default');
        assert.strictEqual(
          radiobutton.getAttribute('aria-disabled'),
          null,
          '`aria-disabled` should not be set',
        );

        // when
        await clickByName('Abricot');

        // then
        assert.true(radiobutton.checked, 'Radiobutton should have changed state');
      });
    });
  });
});
