import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fireEvent } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import { waitForElementToBeRemoved } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

module('Integration | Component | pix-structure-switcher', function (hooks) {
  setupRenderingTest(hooks);

  this.structures = [
    { value: '1', label: 'Salade' },
    { value: '2', label: 'Tomate' },
    { value: '3', label: 'Oignon' },
  ];

  test('it renders the component', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />`,
    );

    // then
    assert.ok(screen.getByRole('button', { name: 'Changer de structure' }));
  });
  module('listbox', function () {
    test('it hides the dropdown by default', async function (assert) {
      // given & when
      const screen = await render(
        hbs`<PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />`,
      );

      // then
      assert.notOk(screen.queryByRole('listbox'));
    });

    test('it shows the dropdown when button is clicked', async function (assert) {
      // given
      const screen = await render(
        hbs`<PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />`,
      );

      // when
      const button = screen.getByRole('button', { name: 'Changer de structure' });
      await userEvent.click(button);
      await screen.findByRole('option', { name: 'Tomate' });

      // then
      assert.ok(screen.getByRole('option', { name: 'Tomate' }));
    });

    test('it hides default option', async function (assert) {
      // given
      const screen = await render(
        hbs`<PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />`,
      );

      // when
      const button = screen.getByRole('button', { name: 'Changer de structure' });
      await userEvent.click(button);

      const hiddenDefaultOption = await screen.findByRole('option', {
        selected: true,
        hidden: true,
      });
      // then
      assert.strictEqual(hiddenDefaultOption.tabIndex, -1);
    });
  });

  module('when option is clicked', function () {
    test('it calls onChange handler with clicked selected', async function (assert) {
      // given
      this.onChangeHandler = sinon.spy();
      const screen = await render(
        hbs`<PixStructureSwitcher
  @label='Changer de structure'
  @onChange={{this.onChangeHandler}}
  @structures={{this.structures}}
/>`,
      );

      const button = screen.getByRole('button', { name: 'Changer de structure' });
      fireEvent.click(button);

      // when
      const structureSalade = await screen.findByRole('option', { name: 'Salade' });
      fireEvent.click(structureSalade);

      // then
      assert.ok(this.onChangeHandler.calledOnceWithExactly({ value: '1', label: 'Salade' }));
    });
    test('the selected option is active', async function (assert) {
      //given
      const screen = await render(
        hbs`<PixStructureSwitcher @label='Changer de structure' @value='1' @structures={{this.structures}} />`,
      );

      //when
      const button = screen.getByRole('button', { name: 'Changer de structure' });
      fireEvent.click(button);
      const selectedOption = await screen.findByRole('option', { selected: true });

      // then
      assert.strictEqual(selectedOption.innerText, 'Salade');
    });

    test('it closes the dropdown when an option is clicked and focuses back on switcher button', async function (assert) {
      // given
      this.onChangeHandler = sinon.spy();
      const screen = await render(
        hbs`<PixStructureSwitcher
  @structures={{this.structures}}
  @label='Changer de structure'
  @onChange={{this.onChangeHandler}}
/>`,
      );

      const button = screen.getByRole('button', { name: 'Changer de structure' });
      await userEvent.click(button);
      const option = await screen.findByRole('option', { name: 'Salade' });

      //when
      await userEvent.click(option);
      await waitForElementToBeRemoved(() => screen.queryByRole('listbox'));

      // then
      assert.strictEqual(document.activeElement, button);
      assert.strictEqual(screen.queryByRole('listbox'), null);
    });
  });

  module('a11y', function () {
    module('closed dropdown', function () {
      test('it should display list, focus selected element on arrow up press', async function (assert) {
        // given
        const screen = await render(
          hbs`<PixStructureSwitcher @label='Changer de structure' @value='2' @structures={{this.structures}} />`,
        );
        //  when
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        button.focus();
        await userEvent.keyboard('[ArrowUp]');

        //then
        const selectedOption = await screen.findByRole('option', {
          name: 'Tomate',
          selected: true,
        });
        assert.ok(selectedOption);
      });

      test('it should display list, focus selected element on arrow down press', async function (assert) {
        // given
        const screen = await render(
          hbs`<PixStructureSwitcher @label='Changer de structure' @value='2' @structures={{this.structures}} />`,
        );
        //  when
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        button.focus();
        await userEvent.keyboard('[ArrowDown]');

        //then
        const selectedOption = await screen.findByRole('option', {
          name: 'Tomate',
          selected: true,
        });
        assert.ok(selectedOption);
      });

      test('it should display list, focus selected element on space press', async function (assert) {
        //given
        const screen = await render(
          hbs`<PixStructureSwitcher @label='Changer de structure' @value='2' @structures={{this.structures}} />`,
        );

        //  when
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        button.focus();
        await userEvent.keyboard('[Space]');

        //then
        const selectedOption = await screen.findByRole('option', {
          name: 'Tomate',
          selected: true,
        });
        assert.ok(selectedOption);
      });
    });
    module('opened dropdown', function () {
      test('it should focus first element on arrow down press', async function (assert) {
        // given
        const screen = await render(
          hbs`<PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />`,
        );
        //  when
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        await userEvent.click(button);
        await screen.findByRole('listbox');
        await userEvent.keyboard('[ArrowDown]');

        //then
        const selectedOption = screen.getByRole('option', { name: 'Salade' });
        assert.strictEqual(document.activeElement, selectedOption);
      });

      test('it should focus on last element on arrow up press', async function (assert) {
        // given
        const screen = await render(
          hbs`<PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />`,
        );

        //  when
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        await userEvent.click(button);
        await screen.findByRole('listbox');
        await userEvent.keyboard('[ArrowUp]');

        //then
        const selectedOption = screen.getByRole('option', { name: 'Oignon' });
        assert.strictEqual(document.activeElement, selectedOption);
      });

      test('it should close menu an focus back to button on escape press', async function (assert) {
        // given
        const screen = await render(
          hbs`<PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />`,
        );

        //  when
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        await userEvent.click(button);
        await screen.findByRole('listbox');
        await userEvent.keyboard('[Escape]');

        // then
        await waitForElementToBeRemoved(() => screen.queryByRole('listbox'));
        assert.strictEqual(document.activeElement, button);
      });

      test('it should call onChange handler on enter press', async function (assert) {
        // given
        this.onChangeSpy = sinon.spy();
        const screen = await render(
          hbs`<PixStructureSwitcher
  @label='Changer de structure'
  @onChange={{this.onChangeSpy}}
  @structures={{this.structures}}
/>`,
        );

        //  when
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        await userEvent.click(button);
        await screen.findByRole('listbox');
        await userEvent.keyboard('[ArrowDown]');
        await userEvent.keyboard('[Enter]');

        // then
        assert.ok(this.onChangeSpy.calledWith({ value: '1', label: 'Salade' }));
        await waitForElementToBeRemoved(() => screen.queryByRole('listbox'));
        assert.notOk(screen.queryByRole('listbox'));
        assert.strictEqual(document.activeElement, button);
      });

      test('it should call onChange handler on space press', async function (assert) {
        // given
        this.onChangeSpy = sinon.spy();
        const screen = await render(
          hbs`<PixStructureSwitcher
  @label='Changer de structure'
  @onChange={{this.onChangeSpy}}
  @structures={{this.structures}}
/>`,
        );

        //  when
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        await userEvent.click(button);
        await screen.findByRole('listbox');
        await userEvent.keyboard('[ArrowDown]');
        await userEvent.keyboard('[Space]');

        // then
        assert.ok(this.onChangeSpy.calledWith({ value: '1', label: 'Salade' }));
        await waitForElementToBeRemoved(() => screen.queryByRole('listbox'));
        assert.notOk(screen.queryByRole('listbox'));
        assert.strictEqual(document.activeElement, button);
      });

      test('it should not focus back button on click outside', async function (assert) {
        // given
        const screen = await render(
          hbs`<button type='button'>Click outside</button><PixStructureSwitcher
  @label='Changer de structure'
  @structures={{this.structures}}
/>`,
        );
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        await userEvent.click(button);
        await screen.findByRole('listbox');
        await userEvent.keyboard('[ArrowDown]');

        assert.strictEqual(document.activeElement, screen.getByRole('option', { name: 'Salade' }));

        //  when
        const externalButton = screen.getByRole('button', { name: 'Click outside' });
        await userEvent.click(externalButton);

        assert.strictEqual(document.activeElement, externalButton);
        await waitForElementToBeRemoved(() => screen.queryByRole('listbox'));
        assert.notOk(screen.queryByRole('listbox'));
      });

      test('it should block tab when menu is open', async function (assert) {
        // given
        const screen = await render(
          hbs`<PixStructureSwitcher @label='Changer de structure' @structures={{this.structures}} />`,
        );
        const button = screen.getByRole('button', { name: 'Changer de structure' });
        await userEvent.click(button);
        await screen.findByRole('listbox');
        await userEvent.keyboard('[ArrowDown]');
        assert.strictEqual(document.activeElement, screen.getByRole('option', { name: 'Salade' }));

        //when
        await userEvent.keyboard('[Tab]');

        //then
        assert.strictEqual(document.activeElement, screen.getByRole('option', { name: 'Salade' }));
      });
    });
  });
});
