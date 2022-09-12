import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillByLabel, clickByName } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import sinon from 'sinon';

module('Integration | Component | multi-select', function (hooks) {
  setupRenderingTest(hooks);

  const DEFAULT_OPTIONS = [
    { value: '1', label: 'Salade' },
    { value: '2', label: 'Tomate' },
    { value: '3', label: 'Oignon' },
  ];
  const LABEL_SELECTOR = '.pix-multi-select__label';

  test('it renders PixMultiSelect with list', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.selected = [];
    this.onSelect = (selected) => this.set('selected', selected);
    this.emptyMessage = 'no result';
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @selected={{this.selected}}
        @onSelect={{this.onSelect}}
        @innerText={{this.title}}
        @id={{this.id}}
        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    // then
    const listElement = this.element.querySelectorAll('li');
    assert.contains('MultiSelectTest');
    assert.equal(listElement.length, 3);
  });

  test('it renders the PixMultiSelect with empty message', async function (assert) {
    // given
    this.options = [];
    this.selected = [];
    this.onSelect = (selected) => this.set('selected', selected);
    this.emptyMessage = 'no result';
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @selected={{this.selected}}
        @onSelect={{this.onSelect}}
        @innerText={{this.title}}
        @id={{this.id}}
        @label="label"
        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `);

    await clickByName('label');

    // then
    const listElement = this.element.querySelectorAll('li');
    assert.contains('MultiSelectTest');

    assert.equal(listElement.length, 1);
    assert.contains('no result');
  });

  test('it renders the PixMultiSelect with default checked', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.onSelect = (selected) => this.set('selected', selected);
    this.selected = ['2'];
    this.emptyMessage = 'no result';
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @onSelect={{this.onSelect}}
        @innerText={{this.title}}
        @id={{this.id}}
        @selected={{this.selected}}
        @label="label"
        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `);

    await clickByName('label');

    // then
    const checkboxElement = this.element.querySelectorAll('input[type=checkbox]');
    assert.equal(checkboxElement.length, 3);
    assert.false(checkboxElement.item(0).checked);
    assert.true(checkboxElement.item(1).checked);
    assert.false(checkboxElement.item(2).checked);
  });

  test('it should display selected labels when the multiselect is searchable', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.onSelect = (selected) => this.set('selected', selected);
    this.selected = ['2', '3'];
    this.emptyMessage = 'no result';
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    const screen = await render(hbs`
      <PixMultiSelect
        @onSelect={{this.onSelect}}
        @innerText={{this.title}}
        @id={{this.id}}
        @selected={{this.selected}}
        @label="label"
        @emptyMessage={{this.emptyMessage}}
        @isSearchable={{true}}
        @options={{this.options}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `);

    // then
    const inputElement = screen.getByLabelText('label');
    assert.equal(inputElement.placeholder, 'Tomate, Oignon');
  });

  test('it should updates selected items when @selected is changed', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.selected = ['2'];
    this.onSelect = (selected) => this.set('selected', selected);
    this.emptyMessage = 'no result';
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    await render(hbs`
      <PixMultiSelect
        @onSelect={{this.onSelect}}
        @innerText={{this.title}}
        @id={{this.id}}
        @selected={{this.selected}}
        @label="label"
        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    // when
    this.set('selected', []);
    await clickByName('label');

    // then
    const checkboxElement = this.element.querySelectorAll('input[type=checkbox]');
    assert.false(checkboxElement.item(0).checked);
    assert.false(checkboxElement.item(1).checked);
    assert.false(checkboxElement.item(2).checked);
  });

  test('it should trigger onSelect function when an item is selected', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;

    this.title = 'MultiSelectTest';
    this.emptyMessage = 'no result';
    this.id = 'id-MultiSelectTest';
    this.onSelect = sinon.spy();

    const screen = await render(hbs`
    <PixMultiSelect
      @onSelect={{this.onSelect}}
      @innerText={{this.title}}
      @id={{this.id}}
      @emptyMessage={{this.emptyMessage}}
      @options={{this.options}} as |option|>
      {{option.label}}
    </PixMultiSelect>
  `);

    // when
    await clickByName(this.title);

    await screen.findByRole('menu');

    await clickByName('Salade');

    // then
    assert.true(screen.getByLabelText('Salade').checked);
    assert.ok(this.onSelect.calledOnce, 'the callback should be called once');
    assert.ok(this.onSelect.calledWith, ['1']);
  });

  test('it should unselect item and return selected item of the updated list', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;

    this.title = 'MultiSelectTest';
    this.emptyMessage = 'no result';
    this.selected = ['1', '2'];
    this.id = 'id-MultiSelectTest';
    this.onSelect = sinon.spy();

    const screen = await render(hbs`
      <PixMultiSelect
        @onSelect={{this.onSelect}}
        @innerText={{this.title}}
        @id={{this.id}}
        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    // when
    await clickByName(this.title);

    await screen.findByRole('menu');

    await clickByName('Salade');

    // then
    assert.ok(this.onSelect.calledWith, ['2']);
  });

  test('it should be possible to give a label', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.selected = [];
    this.onSelect = (selected) => this.set('selected', selected);
    await render(hbs`
      <PixMultiSelect
        @id="pix-select-with-label"
        @label="Votre choix:"
        @options={{this.options}}
        @onChange={{this.onSelect}}
      />
    `);

    // when & then
    const selectorElement = this.element.querySelector(LABEL_SELECTOR);
    assert.equal(selectorElement.innerHTML, 'Votre choix:');
  });

  test('it should throw an error if no id is provided when there is a label', async function (assert) {
    // given
    const componentParams = { id: '   ', options: DEFAULT_OPTIONS };
    const renderComponent = function () {
      createGlimmerComponent('component:pix-multi-select', componentParams);
    };

    // when & then
    const expectedError = new Error('ERROR in PixMultiSelect component, @id param is necessary');
    assert.throws(renderComponent, expectedError);
  });

  test('it should asynchronously load options', async function (assert) {
    // given
    this.onLoadOptions = () => Promise.resolve(DEFAULT_OPTIONS);
    this.selected = [];
    this.onSelect = (selected) => this.set('selected', selected);
    this.emptyMessage = 'no result';
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @selected={{this.selected}}
        @onSelect={{this.onSelect}}
        @innerText={{this.title}}
        @id={{this.id}}
        @emptyMessage={{this.emptyMessage}}
        @onLoadOptions={{this.onLoadOptions}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    // then
    const listElement = this.element.querySelectorAll('li');
    assert.contains('MultiSelectTest');
    assert.equal(listElement.length, 3);
  });

  module('When it is a searchable multiselect', function () {
    test('it should renders searchable PixMultiSelect multi select list', async function (assert) {
      // given
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.innerText = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;

      // when
      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @innerText={{this.innerText}}
          @id={{this.id}}
          @label="label"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      await fillByLabel('label', '');

      await screen.findByRole('menu');

      // then

      assert.equal(screen.getByLabelText('label').placeholder, this.innerText);
      assert.equal(screen.getAllByRole('checkbox').length, 3);
    });

    test('it should renders filtered given case insensitive', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @innerText={{this.title}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @label="Mon multi select"
          @options={{this.options}} as |option|
        >
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('Mon multi select', 'tomate');

      await screen.findByRole('menu');

      // then

      assert.equal(screen.getAllByRole('checkbox').length, 1);
      assert.contains('Tomate');
    });

    test('it should renders no result given case sensitive', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.strictSearch = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @strictSearch={{this.strictSearch}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @innerText={{this.title}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @label="Mon multi select"
          @options={{this.options}} as |option|
        >
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('Mon multi select', 'tomate');

      await screen.findByRole('menu');

      // then
      assert.contains('no result');
    });

    test('it should display list PixMultiSelect on focus', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.label = 'label';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @innerText={{this.title}}
          @placeholder={{this.placeholder}}
          @label={{this.label}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('label', '');

      await screen.findByRole('menu');

      // then
      assert.equal(screen.getByRole('menu').className.trim(), 'pix-multi-select-list');
    });

    test('it should sort default selected items when focused', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';
      this.defaultSelected = ['3'];

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @innerText={{this.title}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="label"
          @emptyMessage={{this.emptyMessage}}
          @selected={{defaultSelected}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('label', '');

      await screen.findByRole('menu');

      // then
      const listElement = screen.getAllByRole('checkbox');
      assert.equal(listElement.length, 3);
      assert.equal(listElement[0].labels[0].innerText.trim(), 'Oignon');
      assert.equal(listElement[1].labels[0].innerText.trim(), 'Salade');
      assert.equal(listElement[2].labels[0].innerText.trim(), 'Tomate');
    });

    test('it should not sort when user select item', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @innerText={{this.title}}
          @placeholder={{this.placeholder}}
          @label="label"
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('label', '');

      await screen.findByRole('menu');

      await clickByName(DEFAULT_OPTIONS[1].label);

      // then
      const listElement = screen.getAllByRole('checkbox');
      assert.equal(listElement.length, 3);
      assert.equal(listElement[0].labels[0].innerText.trim(), 'Salade');
      assert.equal(listElement[1].labels[0].innerText.trim(), 'Tomate');
      assert.equal(listElement[2].labels[0].innerText.trim(), 'Oignon');
    });

    test('it should not sort when user search and select item', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @innerText={{this.title}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @label="Mon multi select"
          @options={{this.options}} as |option|
        >
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('Mon multi select', 'Oi');

      await screen.findByRole('menu');

      await clickByName('Oignon');
      await fillByLabel('Mon multi select', 'o');
      // then
      const listElement = screen.getAllByRole('checkbox');
      assert.equal(listElement.length, 2);
      assert.equal(listElement[0].labels[0].innerText.trim(), 'Tomate');
      assert.equal(listElement[1].labels[0].innerText.trim(), 'Oignon');
    });

    test('it should sort items when search is cleaned', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @innerText={{this.title}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @label="Mon multi select"
          @options={{this.options}} as |option|
        >
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('Mon multi select', 'Oi');

      await screen.findByRole('menu');

      await clickByName('Oignon');

      await fillByLabel('Mon multi select', '');

      // then
      const listElement = screen.getAllByRole('checkbox');
      assert.equal(listElement.length, 3);
      assert.equal(listElement[0].labels[0].innerText.trim(), 'Oignon');
      assert.equal(listElement[1].labels[0].innerText.trim(), 'Salade');
      assert.equal(listElement[2].labels[0].innerText.trim(), 'Tomate');
    });

    test('should not sort when there are default items selected and a new selected item', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = ['2'];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @innerText={{this.title}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="label"
          @emptyMessage={{this.emptyMessage}}
          @showOptionsOnInput={{true}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('label', '');

      await screen.findByRole('menu');

      const listElement = screen.getAllByRole('checkbox');

      assert.equal(listElement[0].labels[0].innerText.trim(), 'Tomate');

      await clickByName('Oignon');

      // then
      const listElement2 = screen.getAllByRole('checkbox');

      assert.equal(listElement2[0].labels[0].innerText.trim(), 'Tomate');
      assert.equal(listElement2[2].labels[0].innerText.trim(), 'Oignon');
    });
  });
});
