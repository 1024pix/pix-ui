import { module, test } from 'qunit';
import { click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByName, fillByLabel } from '@1024pix/ember-testing-library';
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
  this.id = 'id-select-test';
  this.searchLabel = 'Rechercher';
  this.searchInnerText = 'Un condiment';
  this.searchId = 'id-select-search-test';

  test('it renders Select', async function (assert) {
    // given & when
    const screen = await render(hbs`
    <PixSelect
      @options={{this.options}}
      @label={{this.label}}
      @subLabel={{this.subLabel}}
      @placeholder={{this.placeholder}}
      @id={{this.id}}
    />
  `);

    // then
    assert.dom(screen.getByText('Choisissez une option')).exists();
    assert.dom(screen.getByText('Mon sous label')).exists();
    assert.dom(screen.getByLabelText('Mon menu déroulant')).exists();
  });

  module('listbox', function () {
    test('it hide the dropdown unless there is a click on the button', async function (assert) {
      // given & when
      const screen = await render(hbs`
      <PixSelect
        @options={{this.options}}
        @label={{this.label}}
        @subLabel={{this.subLabel}}
        @placeholder={{this.placeholder}}
        @id={{this.id}}
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
          @id={{this.id}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');
      // then
      assert.dom(screen.getByRole('option', { name: 'Oignon' })).exists();
    });
  });

  module('category', function () {
    test('it does not render category when 1 category available', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');
      // then
      assert.dom(screen.queryByRole('group', { name: 'Kebab' })).doesNotExist();
    });

    test('it render category when at least 2 category available', async function (assert) {
      // given
      this.options = [
        { value: '2', label: 'Tomate', category: 'Fruit' },
        { value: '1', label: 'Salade', category: 'Autre' },
        { value: '3', label: 'Oignon', category: 'Autre' },
      ];
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      // then
      assert.dom(screen.getByRole('group', { name: 'Fruit' })).exists();
    });
  });

  module('a11y', function () {
    test('it should display list, focus first element on arrow down press', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
        />      
      `);

      // when
      await screen.getByLabelText('Mon menu déroulant').focus();

      await userEvent.keyboard('[ArrowDown]');

      await screen.findByRole('listbox');

      fireEvent(screen.getByRole('listbox'), new Event('transitionend'));

      const options = screen.queryAllByRole('option');
      // then
      assert.equal(options.length, 3);
      assert.equal(document.activeElement, options[0]);
    });
    test('it should display list, focus last element on arrow up press', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
        />      
      `);

      // when
      await screen.getByLabelText('Mon menu déroulant').focus();

      await userEvent.keyboard('[ArrowUp]');

      await screen.findByRole('listbox');

      fireEvent(screen.getByRole('listbox'), new Event('transitionend'));

      const options = screen.queryAllByRole('option');
      // then
      assert.equal(options.length, 3);
      assert.equal(document.activeElement, options[2]);
    });

    test('it should focus first element on arrow down press', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
        />      
      `);

      // when
      await screen.getByLabelText('Mon menu déroulant').focus();

      await userEvent.keyboard('[Enter]');

      await screen.findByRole('listbox');

      await userEvent.keyboard('[ArrowDown]');
      const options = screen.queryAllByRole('option');
      // then
      assert.equal(document.activeElement, options[0]);
    });

    test('it should focus last element on arrow up press', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
        />      
      `);

      // when
      await screen.getByLabelText('Mon menu déroulant').focus();

      await userEvent.keyboard('[Enter]');

      await screen.findByRole('listbox');

      await userEvent.keyboard('[ArrowUp]');

      const options = screen.queryAllByRole('option');
      // then
      assert.equal(document.activeElement, options[2]);
    });

    test('it should call on select on enter press', async function (assert) {
      // given
      this.onSelect = sinon.spy();

      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @onSelect={{this.onSelect}}
        />      
      `);

      // when
      await screen.getByLabelText('Mon menu déroulant').focus();

      await userEvent.keyboard('[ArrowDown]');

      await screen.findByRole('listbox');

      fireEvent(screen.getByRole('listbox'), new Event('transitionend'));

      await userEvent.keyboard('[Enter]');

      // then
      assert.ok(this.onSelect.calledOnce, 'the callback should be called once');
      assert.equal(document.activeElement, screen.getByLabelText('Mon menu déroulant'));
      assert.throws(screen.getByRole('listbox'));
    });

    test('it should close menu on escape press, focus select element', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
        />      
      `);

      // when
      screen.getByLabelText('Mon menu déroulant').focus();

      await userEvent.keyboard('[ArrowDown]');

      await screen.findByRole('listbox');

      await userEvent.keyboard('[Escape]');

      // then
      assert.equal(document.activeElement, screen.getByLabelText('Mon menu déroulant'));
      assert.throws(screen.getByRole('listbox'));
    });
  });

  module('#onSelect', function () {
    test('it should trigger onSelect function when an item is selected', async function (assert) {
      // given
      this.onSelect = sinon.spy();

      const screen = await render(hbs`
        <PixSelect
          @options={{this.options}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @onSelect={{this.onSelect}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      await click(screen.getByRole('option', { name: 'Oignon' }));

      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      // then
      assert.equal(screen.getByRole('option', { selected: true }).innerText, 'Oignon');
      assert.ok(this.onSelect.calledOnce, 'the callback should be called once');
      sinon.assert.calledWithMatch(this.onSelect, '3');
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
          @id={{this.id}}
          @searchLabel={{this.searchLabel}}
          @searchInnerText={{this.searchInnerText}}
          @searchId={{this.searchId}}
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
          @id={{this.id}}
          @searchLabel={{this.searchLabel}}
          @searchInnerText={{this.searchInnerText}}
          @searchId={{this.searchId}}
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
          @id={{this.id}}
          @searchLabel={{this.searchLabel}}
          @searchInnerText={{this.searchInnerText}}
          @searchId={{this.searchId}}
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
          @id={{this.id}}
          @searchLabel={{this.searchLabel}}
          @searchInnerText={{this.searchInnerText}}
          @searchId={{this.searchId}}
          @isSearchable={{this.isSearchable}}
        />
      `);

      // when
      await clickByName('Mon menu déroulant');
      await fillByLabel('Rechercher', ' sal ');

      await screen.findByRole('listbox');
      assert.equal(screen.queryAllByRole('option').length, 1);
    });
  });

  module('#className', function () {
    test('it adds a custom class', async function (assert) {
      // given & when
      await render(hbs`
        <PixSelect
          @className="some-custom-class"
          @options={{this.options}}
          @labels={{this.labels}}
        />
      `);

      // then
      assert.dom('.some-custom-class').exists();
    });
  });
});
