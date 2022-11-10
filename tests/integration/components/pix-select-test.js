import { module, test } from 'qunit';
import { click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByName, fillByLabel } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

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
  this.searchPlaceholder = 'Un condiment';
  this.searchId = 'id-select-search-test';

  test('it renders Select', async function (assert) {
    // given & when
    const screen = await render(hbs`
    <PixSelect
      @options={{this.options}}
      @label={{this.label}}
      @subLabel={{this.subLabel}}
      @placeholder={{this.placeholder}}
    />
  `);

    // then
    assert.dom(screen.getByText('Mon sous label')).exists();
    assert.equal(screen.getByLabelText('Mon menu déroulant').innerText, 'Choisissez une option');
  });

  module('listbox', function () {
    test('it hides the dropdown unless there is a click on the button', async function (assert) {
      // given & when
      const screen = await render(hbs`
      <PixSelect
        @options={{this.options}}
        @label={{this.label}}
        @subLabel={{this.subLabel}}
        @placeholder={{this.placeholder}}
      />
      `);

      // then
      assert.dom(screen.queryByRole('option', { name: 'Oignon' })).doesNotExist();
    });

    test('it opens the dropdown', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');
      // then
      assert.dom(screen.getByRole('option', { name: 'Oignon' })).exists();
    });
  });

  module('#onChange', function () {
    test('it should trigger onChange function when an item is selected', async function (assert) {
      // given
      this.onChange = sinon.spy();

      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @onChange={{this.onChange}}
        />
      `);

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

      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @onChange={{this.onChange}}
          @value={{this.value}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      // then
      assert.equal(screen.getByRole('option', { selected: true }).innerText, 'Oignon');
    });
  });

  module('#defaultOption', function () {
    test('should display searchable input', async function (assert) {
      this.onChange = sinon.spy();
      this.isSearchable = false;

      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @onChange={{this.onChange}}
          @isSearchable={{this.isSearchable}}
        />
      `);

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
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');
      assert.dom(screen.getByLabelText('Rechercher')).exists();
    });

    test('should filter the option corresponding to the string', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');
      await fillByLabel('Rechercher', 'Sal');

      await screen.findByRole('listbox');
      assert.equal(screen.queryAllByRole('option').length, 1);
    });

    test('should filter without taking care of the case', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');
      await fillByLabel('Rechercher', 'sal');

      await screen.findByRole('listbox');
      assert.equal(screen.queryAllByRole('option').length, 1);
    });

    test('should trim empty space before and after searched value', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');
      await fillByLabel('Rechercher', ' sal ');

      await screen.findByRole('listbox');
      assert.equal(screen.queryAllByRole('option').length, 1);
    });

    test('should display placeholder text', async function (assert) {
      this.isSearchable = true;
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');
      assert.dom(screen.getByPlaceholderText('Un condiment')).exists();
    });

    test('when there is no options found it displays the empty search result message', async function (assert) {
      this.isSearchable = true;
      this.emptySearchMessage = 'Aucune option';
      await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @searchLabel={{this.searchLabel}}
          @searchPlaceholder={{this.searchPlaceholder}}
          @isSearchable={{this.isSearchable}}
          @emptySearchMessage={{this.emptySearchMessage}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');

      await fillByLabel('Rechercher', 'Cheddar');
      assert.contains('Aucune option');
    });
  });

  module('#required', function () {
    test('it displays the asterix', async function (assert) {
      this.requiredLabel = 'Title requis';

      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @requiredLabel={{this.requiredLabel}}
        />
      `);
      assert.dom(screen.getByLabelText('* Mon menu déroulant')).exists();
    });
  });

  module('#className', function () {
    test('it adds a custom class', async function (assert) {
      // given & when
      await render(hbs`
        <PixSelect
          @className="some-custom-class"
          @options={{this.options}}
          @label={{this.label}}
        />
      `);

      // then
      assert.dom('.some-custom-class').exists();
    });
  });
});
