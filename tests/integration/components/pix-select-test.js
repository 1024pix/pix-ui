import { module, test } from 'qunit';
import { click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  clickByName,
  fillByLabel,
  waitForElementToBeRemoved,
} from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';

module('Integration | Component | PixSelect', function (hooks) {
  setupRenderingTest(hooks);

  this.options = [
    { value: '1', label: 'Salade', category: 'Kebab' },
    { value: '2', label: 'Tomate', category: 'Kebab' },
    { value: '3', label: 'Oignon', category: 'Kebab' },
  ];

  this.label = 'Mon menu déroulant';
  this.subLabel = 'Mon sous label';
  this.placeholder = 'Choisissez une option';
  this.searchLabel = 'Rechercher';
  this.screenReaderOnly = 'Rechercher';
  this.searchPlaceholder = 'Placeholder de la recherche';

  test('it renders Select', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

    // then
    assert.dom(screen.getByText('Mon sous label')).exists();
    assert.strictEqual(
      screen.getByLabelText('Mon menu déroulant').innerText,
      'Choisissez une option'
    );
  });

  module('#id', function () {
    test('it puts a custom id on pix-select', async function (assert) {
      // given & when
      await render(hbs`
        <PixSelect
          @id="custom"
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
        />
      `);

      // then
      assert.dom('#custom').exists();
    });
  });

  module('listbox', function () {
    test('it hides the dropdown unless there is a click on the button', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

      // then
      assert.dom(screen.queryByRole('option', { name: 'Oignon' })).doesNotExist();
    });

    test('it opens the dropdown', async function (assert) {
      // given
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');
      // then
      assert.dom(screen.getByRole('option', { name: 'Oignon' })).exists();
    });

    test('it hides default option', async function (assert) {
      // given
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @hideDefaultOption={{true}}
/>`);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      // then
      assert.strictEqual(screen.queryByRole('option', { name: this.placeholder }), null);
    });
  });

  module('category', function () {
    test('it render categories when there are categories', async function (assert) {
      // given
      this.options = [
        { value: '2', label: 'Tomate', category: 'Fruit' },
        { value: '1', label: 'Salade', category: 'Autre' },
        { value: '3', label: 'Oignon', category: 'Autre' },
      ];
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      // then
      assert.dom(screen.getByRole('group', { name: 'Fruit' })).exists();
      assert.dom(screen.getByRole('group', { name: 'Autre' })).exists();
    });
  });

  module('a11y', function () {
    module('closed dropdown', function () {
      test('it should display list, focus selected element on arrow up press', async function (assert) {
        // given
        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @value={{'3'}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

        // when
        await screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[ArrowUp]');

        await screen.findByRole('listbox');
        fireEvent(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));

        const selectedOption = screen.getByRole('option', { name: 'Oignon' });

        // then
        assert.dom(selectedOption).isFocused();
      });

      test('it should display list, focus selected element on arrow down press', async function (assert) {
        // given
        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @value={{'2'}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

        // when
        await screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[ArrowDown]');

        await screen.findByRole('listbox');
        fireEvent(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));

        const selectedOption = screen.getByRole('option', { name: 'Tomate' });

        // then
        assert.dom(selectedOption).isFocused();
      });

      test('it should display list, focus selected element on space press', async function (assert) {
        // given
        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @value={{'1'}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

        // when
        await screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[Space]');

        await screen.findByRole('listbox');
        fireEvent(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));

        const selectedOption = screen.getByRole('option', { name: 'Salade' });

        // then
        assert.dom(selectedOption).isFocused();
      });
    });

    module('opened dropdown', function () {
      test('it should focus first element on arrow down press', async function (assert) {
        // given
        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

        // when
        await screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[Enter]');

        await screen.findByRole('listbox');

        await userEvent.keyboard('[ArrowDown]');

        const option = screen.getByRole('option', { name: 'Choisissez une option' });
        // then
        assert.dom(option).isFocused();
      });

      test('it should focus last element on arrow up press', async function (assert) {
        // given
        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

        // when
        await screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[Enter]');

        await screen.findByRole('listbox');

        await userEvent.keyboard('[ArrowUp]');

        const option = screen.getByRole('option', { name: 'Oignon' });
        // then
        assert.dom(option).isFocused();
      });

      test('it should close menu on escape press, focus select element', async function (assert) {
        // given
        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
/>`);

        // when
        screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[ArrowDown]');

        await screen.findByRole('listbox');

        await userEvent.keyboard('[Escape]');

        // then
        assert.strictEqual(document.activeElement, screen.getByLabelText('Mon menu déroulant'));
        await waitForElementToBeRemoved(() => screen.queryByRole('listbox'));
        assert.strictEqual(screen.queryByRole('listbox'), null);
      });

      test('it should call on select on enter press', async function (assert) {
        // given
        this.onChange = sinon.spy();

        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @onChange={{this.onChange}}
/>`);

        // when
        await screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[Space]');

        await screen.findByRole('listbox');

        await screen.getByText('Tomate').focus();

        await userEvent.keyboard('[Enter]');

        // then
        sinon.assert.calledWith(this.onChange, '2');
        assert.dom(screen.getByLabelText('Mon menu déroulant')).isFocused();
      });

      test('it should not focus select on click outside', async function (assert) {
        // given
        this.onChange = sinon.spy();

        const screen = await render(hbs`<button id="focus">Focus me</button><PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @onChange={{this.onChange}}
/>`);

        // when
        await screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[Space]');

        await screen.findByRole('listbox');

        await screen.getByText('Tomate').focus();

        await click(screen.getByRole('button', { name: 'Focus me' }));

        // then
        assert.dom(screen.getByRole('button', { name: 'Focus me' })).isFocused();
      });

      test('it should call on select on space press', async function (assert) {
        // given
        this.onChange = sinon.spy();

        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @onChange={{this.onChange}}
/>`);

        // when
        await screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[Space]');

        await screen.findByRole('listbox');

        await screen.getByText('Tomate').focus();

        await userEvent.keyboard('[Space]');

        // then
        sinon.assert.calledWith(this.onChange, '2');
        assert.dom(screen.getByLabelText('Mon menu déroulant')).isFocused();
      });

      test('it should focus on the search input when tab is pressed', async function (assert) {
        // given
        this.searchLabel = 'Label du search';
        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @isSearchable={{true}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @searchLabel={{this.searchLabel}}
/>`);

        // when
        screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[ArrowDown]');

        await screen.findByRole('listbox');

        await userEvent.keyboard('[Tab]');

        // then
        assert.dom(screen.getByLabelText(this.searchLabel)).isFocused();
      });

      test('it should focus on the input when escape is pressed', async function (assert) {
        // given
        this.searchLabel = 'Label du search';
        const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @isSearchable={{true}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @searchLabel={{this.searchLabel}}
/>`);

        // when
        screen.getByLabelText('Mon menu déroulant').focus();

        await userEvent.keyboard('[ArrowDown]');

        await screen.findByRole('listbox');
        fireEvent(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));

        await userEvent.keyboard('[Escape]');

        const select = await screen.getByLabelText(this.label);
        // then
        assert.dom(select).isFocused();
      });
    });
  });

  module('#onChange', function () {
    test('it should trigger onChange function when an item is selected', async function (assert) {
      // given
      this.onChange = sinon.spy();

      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @onChange={{this.onChange}}
/>`);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      await click(screen.getByRole('option', { name: 'Oignon' }));

      // then
      sinon.assert.calledWithMatch(this.onChange, '3');
      assert.ok(this.onChange.called);
    });
  });

  module('#value', function () {
    test('it should mark the item as selected when there is a value', async function (assert) {
      // given
      this.onChange = sinon.spy();
      this.value = '3';

      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @onChange={{this.onChange}}
  @value={{this.value}}
/>`);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      // then
      assert.strictEqual(screen.getByRole('option', { selected: true }).innerText, 'Oignon');
    });
  });

  module('#defaultOption', function () {
    test('should display searchable input', async function (assert) {
      this.onChange = sinon.spy();
      this.isSearchable = false;

      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @onChange={{this.onChange}}
  @isSearchable={{this.isSearchable}}
/>`);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      await click(screen.getByRole('option', { name: 'Choisissez une option' }));

      // then
      sinon.assert.calledWithMatch(this.onChange, '');
      assert.ok(this.onChange.called);
    });
  });

  module('#isSearchable', function () {
    test('should display searchable input', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @searchLabel={{this.searchLabel}}
  @searchPlaceholder={{this.searchPlaceholder}}
  @isSearchable={{this.isSearchable}}
/>`);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');
      assert.dom(screen.getByLabelText('Rechercher')).exists();
    });

    test('should focus on search input', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @searchLabel={{this.searchLabel}}
  @searchPlaceholder={{this.searchPlaceholder}}
  @isSearchable={{this.isSearchable}}
/>`);

      // when
      await clickByName('Mon menu déroulant');
      await screen.findByRole('listbox');
      fireEvent(document.querySelector('.pix-select__dropdown'), new Event('transitionend'));
      assert.dom(screen.getByLabelText('Rechercher')).isFocused();
    });

    test('should filter the option corresponding to the string', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @searchLabel={{this.searchLabel}}
  @searchPlaceholder={{this.searchPlaceholder}}
  @isSearchable={{this.isSearchable}}
/>`);

      // when
      await clickByName('Mon menu déroulant');
      await fillByLabel('Rechercher', 'Sal');

      await screen.findByRole('listbox');

      const filteredOptions = screen.queryAllByRole('option');
      assert.strictEqual(filteredOptions.length, 1);
      assert.strictEqual(filteredOptions[0].innerText, 'Salade');
    });

    test('should filter without taking care of the case', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @searchLabel={{this.searchLabel}}
  @searchPlaceholder={{this.searchPlaceholder}}
  @isSearchable={{this.isSearchable}}
/>`);

      // when
      await clickByName('Mon menu déroulant');
      await fillByLabel('Rechercher', 'sal');

      await screen.findByRole('listbox');
      assert.strictEqual(screen.queryAllByRole('option').length, 1);
    });

    test('should trim empty space before and after searched value', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @searchLabel={{this.searchLabel}}
  @searchPlaceholder={{this.searchPlaceholder}}
  @isSearchable={{this.isSearchable}}
/>`);

      // when
      await clickByName('Mon menu déroulant');
      await fillByLabel('Rechercher', ' sal ');

      await screen.findByRole('listbox');
      assert.strictEqual(screen.queryAllByRole('option').length, 1);
    });

    test('should display placeholder text', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @searchLabel={{this.searchLabel}}
  @searchPlaceholder={{this.searchPlaceholder}}
  @isSearchable={{this.isSearchable}}
/>`);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');
      assert.dom(screen.getByPlaceholderText('Placeholder de la recherche')).exists();
    });

    test('when there is no options found it displays the empty search result message', async function (assert) {
      this.isSearchable = true;
      this.emptySearchMessage = 'Aucune option';
      await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @searchLabel={{this.searchLabel}}
  @searchPlaceholder={{this.searchPlaceholder}}
  @isSearchable={{this.isSearchable}}
  @emptySearchMessage={{this.emptySearchMessage}}
/>`);

      // when
      await clickByName('Mon menu déroulant');

      await fillByLabel('Rechercher', 'Cheddar');
      assert.contains('Aucune option');
    });
  });

  module('#required', function () {
    test('it displays the astérisque', async function (assert) {
      this.requiredText = 'Title requis';

      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @requiredText={{this.requiredText}}
/>`);
      assert.dom(screen.getByLabelText('* Mon menu déroulant')).exists();
    });
  });

  module('#errorMesssage', function () {
    test('it displays the error message', async function (assert) {
      this.errorMessage = "Tu t'es trompé !";

      const screen = await render(hbs`<PixSelect
  @options={{this.options}}
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @errorMessage={{this.errorMessage}}
/>`);
      assert.dom(screen.getByText("Tu t'es trompé !")).exists();
    });
  });

  module('#className', function () {
    test('it adds a custom class', async function (assert) {
      // given & when
      await render(
        hbs`<PixSelect @className='some-custom-class' @options={{this.options}} @label={{this.label}} />`
      );

      // then
      assert.dom('.some-custom-class').exists();
    });
  });
});
