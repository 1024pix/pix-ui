import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render, clickByName } from '@1024pix/ember-testing-library';
import EmberDebug from '@ember/debug';
import sinon from 'sinon';

module('Integration | Component | checkbox', function (hooks) {
  setupRenderingTest(hooks);

  module('it should be possible to check the checkbox', function () {
    test('when label is displayed', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixCheckbox><:label>Recevoir la newsletter</:label></PixCheckbox>`,
      );
      await clickByName('Recevoir la newsletter');

      // then
      assert.true(screen.getByLabelText('Recevoir la newsletter').checked);
    });

    test('when label is hidden', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixCheckbox @screenReaderOnly={{true}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
      );
      await clickByName('Recevoir la newsletter');

      // then
      assert.true(screen.getByLabelText('Recevoir la newsletter').checked);
    });
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
    const screen = await render(
      hbs`<PixCheckbox @checked={{this.checked}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
    );
    const checkbox = screen.getByLabelText('Recevoir la newsletter');
    assert.false(checkbox.checked);

    // when
    this.set('checked', true);

    // then
    assert.true(checkbox.checked);
  });

  module('@isDisabled', function (hooks) {
    let sandbox;
    hooks.beforeEach(function () {
      sandbox = sinon.stub(EmberDebug, 'warn');
    });

    test(`it should not be possible to interact when @isDisabled={{true}}`, async function (assert) {
      // given
      this.set('isDisabled', true);
      const screen = await render(
        hbs`<PixCheckbox checked @isDisabled={{this.isDisabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
      );
      sandbox.calledWith(
        EmberDebug.warn,
        'PixCheckbox: @isDisabled attribute should be a boolean.',
        true,
        {
          id: 'pix-ui.checkbox.is-disabled.not-boolean',
        },
      );
      const checkbox = screen.getByRole('checkbox', {
        name: 'Recevoir la newsletter',
        disabled: true,
      });
      assert.true(checkbox.checked, 'Checkbox has been set to checked by default');
      assert.strictEqual(
        checkbox.getAttribute('aria-disabled'),
        'true',
        '`aria-disabled` should be forced to "true" else VoiceOver don\'t consider the input as "dimmed"',
      );

      // when
      await clickByName('Recevoir la newsletter'); // should not throw!

      // then
      assert.true(checkbox.checked, "Checkbox has changed state, but shouldn't have");
    });

    test(`it should read success state info if given`, async function (assert) {
      // given
      this.set('isDisabled', true);

      // when
      const screen = await render(
        hbs`<PixCheckbox checked @isDisabled={{this.isDisabled}} @state='success'><:label>Recevoir la newsletter</:label></PixCheckbox>`,
      );

      // then
      assert
        .dom(
          screen.getByRole('checkbox', {
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
        hbs`<PixCheckbox checked @isDisabled={{this.isDisabled}} @state='error'><:label>Recevoir la newsletter</:label></PixCheckbox>`,
      );

      // then
      assert
        .dom(
          screen.getByRole('checkbox', {
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
          hbs`<PixCheckbox checked @isDisabled={{this.isDisabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
        );
        sandbox.calledWith(
          EmberDebug.warn,
          'PixCheckbox: @isDisabled attribute should be a boolean.',
          false,
          {
            id: 'pix-ui.checkbox.is-disabled.not-boolean',
          },
        );
        const checkbox = screen.getByRole('checkbox', {
          name: 'Recevoir la newsletter',
          disabled: true,
        });
        assert.true(checkbox.checked, 'Checkbox has been set to checked by default');
        assert.strictEqual(
          checkbox.getAttribute('aria-disabled'),
          'true',
          '`aria-disabled` should be forced to "true" else VoiceOver don\'t consider the input as "dimmed"',
        );

        // when
        await clickByName('Recevoir la newsletter'); // should not throw!

        // then
        assert.true(checkbox.checked, "Checkbox has changed state, but shouldn't have");
      });
    });

    [false, null, undefined].forEach(function (testCase) {
      test(`it should be possible to interact when @isDisabled={{${testCase}}}`, async function (assert) {
        // given
        this.set('isDisabled', testCase);
        const screen = await render(
          hbs`<PixCheckbox checked @isDisabled={{this.isDisabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
        );
        sandbox.calledWith(
          EmberDebug.warn,
          'PixCheckbox: @isDisabled attribute should be a boolean.',
          true,
          {
            id: 'pix-ui.checkbox.is-disabled.not-boolean',
          },
        );
        const checkbox = screen.getByRole('checkbox', {
          name: 'Recevoir la newsletter',
          disabled: true,
        });
        assert.true(checkbox.checked, 'Checkbox has been set to checked by default');
        assert.strictEqual(
          checkbox.getAttribute('aria-disabled'),
          null,
          '`aria-disabled` should not be set',
        );

        // when
        await clickByName('Recevoir la newsletter');

        // then
        assert.false(checkbox.checked, 'Checkbox should have changed state');
      });
    });
  });

  module('when disabled', function () {
    test(`it should not be possible to interact when disabled={{true}}`, async function (assert) {
      // given
      this.set('disabled', true);
      const screen = await render(
        hbs`<PixCheckbox checked disabled={{this.disabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
      );
      const checkbox = screen.getByRole('checkbox', {
        name: 'Recevoir la newsletter',
        disabled: true,
      });
      assert.true(checkbox.checked, 'Checkbox has been set to checked by default');

      try {
        // when
        await clickByName('Recevoir la newsletter');

        assert.true(false, 'It should not be possible to interact with disabled Checkbox');
      } catch (error) {
        // then state did not change
        assert.true(checkbox.checked, "Checkbox has changed state, but shouldn't have");
      }
    });

    ['true', 'false', 'null', 'undefined'].forEach(function (testCase) {
      test(`it should not be possible to interact when disabled="${testCase}"`, async function (assert) {
        // given
        this.set('disabled', testCase);
        const screen = await render(
          hbs`<PixCheckbox checked disabled={{this.disabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
        );
        const checkbox = screen.getByRole('checkbox', {
          name: 'Recevoir la newsletter',
          disabled: true,
        });
        assert.true(checkbox.checked, 'Checkbox has been set to checked by default');

        try {
          // when
          await clickByName('Recevoir la newsletter');

          assert.true(false, 'It should not be possible to interact with disabled Checkbox');
        } catch (error) {
          // then state did not change
          assert.true(checkbox.checked, "Checkbox has changed state, but shouldn't have");
        }
      });
    });

    [false, null, undefined].forEach(function (testCase) {
      test(`it should be possible to interact when disabled={{${testCase}}}`, async function (assert) {
        // given
        this.set('disabled', testCase);
        const screen = await render(
          hbs`<PixCheckbox checked disabled={{this.disabled}}><:label>Recevoir la newsletter</:label></PixCheckbox>`,
        );
        const checkbox = screen.getByRole('checkbox', {
          name: 'Recevoir la newsletter',
          disabled: true,
        });
        assert.true(checkbox.checked, 'Checkbox has been set to checked by default');

        // when
        await clickByName('Recevoir la newsletter');

        // then
        assert.false(checkbox.checked, 'Checkbox should have changed state');
      });
    });
  });
});
