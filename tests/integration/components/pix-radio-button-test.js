import { clickByName, render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | pix-radio-button', function (hooks) {
  setupRenderingTest(hooks);

  module('it should be possible to check the radiobutton', function () {
    test('when label is displayed', async function (assert) {
      // when
      const screen = await render(hbs`<PixRadioButton><:label>Abricot</:label></PixRadioButton>`);
      await clickByName('Abricot');

      // then
      assert.true(screen.getByLabelText('Abricot').checked);
    });

    test('when label is hidden', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixRadioButton @screenReaderOnly={{true}}><:label>Abricot</:label></PixRadioButton>`,
      );
      await clickByName('Abricot');

      // then
      assert.true(screen.getByLabelText('Abricot').checked);
    });
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
    let warnStub;

    hooks.beforeEach(function () {
      warnStub = sinon.stub(console, 'warn');
    });

    hooks.afterEach(function () {
      warnStub.restore();
    });

    test(`it should not be possible to interact when @isDisabled={{true}}`, async function (assert) {
      // given
      this.set('isDisabled', true);
      const screen = await render(
        hbs`<PixRadioButton @isDisabled={{this.isDisabled}}><:label>Abricot</:label></PixRadioButton>`,
      );

      const radiobutton = screen.getByRole('radio', {
        name: 'Abricot',
        disabled: true,
      });

      assert.false(warnStub.called);
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

    test(`it should read success state info if given`, async function (assert) {
      // given
      this.set('isDisabled', true);

      // when
      const screen = await render(
        hbs`<PixRadioButton checked @isDisabled={{this.isDisabled}} @state='success'><:label>Recevoir la
    newsletter</:label></PixRadioButton>`,
      );

      // then
      assert
        .dom(
          screen.getByRole('radio', {
            description: 'Sélection correcte',
            hidden: true,
          }),
        )
        .exists();
    });

    test(`it should read error state info if given`, async function (assert) {
      // given
      this.set('isDisabled', true);

      // when
      const screen = await render(
        hbs`<PixRadioButton checked @isDisabled={{this.isDisabled}} @state='error'><:label>Recevoir la
    newsletter</:label></PixRadioButton>`,
      );

      // then
      assert
        .dom(
          screen.getByRole('radio', {
            description: 'Sélection incorrecte',
            hidden: true,
          }),
        )
        .exists();
    });

    ['true', 'false', 'null', 'undefined'].forEach(function (testCase) {
      test(`it should not be possible to interact when @isDisabled="${testCase}"`, async function (assert) {
        // given
        this.set('isDisabled', testCase);
        const screen = await render(
          hbs`<PixRadioButton @isDisabled={{this.isDisabled}}><:label>Abricot</:label></PixRadioButton>`,
        );

        assert.ok(
          warnStub.calledWithExactly(
            'WARNING: PixRadioButton: @isDisabled attribute should be a boolean.',
          ),
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

        assert.false(warnStub.called);
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

  module('@variant modulix', function () {
    test(`it should be functional`, async function (assert) {
      // given
      const screen = await render(
        hbs`<PixRadioButton @variant='modulix' @state='neutral'><:label>Abricot</:label></PixRadioButton>`,
      );
      const radiobutton = screen.getByRole('radio', {
        name: 'Abricot',
      });

      // when
      await click(radiobutton);

      // then
      assert.true(radiobutton.checked);
    });
  });
});
