import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, focus, blur } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import sinon from 'sinon';
import fillInByLabel from '../../helpers/fill-in-by-label';
import clickByLabel from '../../helpers/click-by-label';

module('Integration | Component | multi-select', function (hooks) {
  setupRenderingTest(hooks);

  const DEFAULT_OPTIONS = [
    { value: '1', label: 'Salade' },
    { value: '2', label: 'Tomate' },
    { value: '3', label: 'Oignon' },
  ];

  test('it renders PixMultiSelect with list', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.selected = [];
    this.onSelect = (selected) => this.set('selected', selected);
    this.emptyMessage = 'no result';
    this.label = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @selected={{selected}}
        @selected={{this.selected}}
        @onSelect={{this.onSelect}}
        @label={{this.label}}
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
    this.label = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @selected={{this.selected}}
        @onSelect={{this.onSelect}}
        @label={{this.label}}
        @id={{this.id}}
        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `);
    await clickByLabel('MultiSelectTest');

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
    this.label = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @onSelect={{this.onSelect}}
        @label={{this.label}}
        @id={{this.id}}
        @selected={{this.selected}}
        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `);

    await clickByLabel('MultiSelectTest');

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
    this.label = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @onSelect={{this.onSelect}}
        @label={{this.label}}
        @id={{this.id}}
        @selected={{this.selected}}
        @label="label"
        @emptyMessage={{this.emptyMessage}}
        @placeholder="Yo"
        @isSearchable={{true}}
        @options={{this.options}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `);

    // then
    const inputElement = this.element.querySelector('.pix-multi-select-header__search-input');
    assert.equal(inputElement.placeholder, 'Tomate, Oignon');
  });

  test('it should updates selected items when @selected is changed', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.selected = ['2'];
    this.onSelect = (selected) => this.set('selected', selected);
    this.emptyMessage = 'no result';
    this.label = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    await render(hbs`
      <PixMultiSelect
        @onSelect={{this.onSelect}}
        @label={{this.label}}
        @id={{this.id}}
        @selected={{this.selected}}
        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    // when
    this.set('selected', []);
    await clickByLabel('MultiSelectTest');

    // then
    const checkboxElement = this.element.querySelectorAll('input[type=checkbox]');
    assert.false(checkboxElement.item(0).checked);
    assert.false(checkboxElement.item(1).checked);
    assert.false(checkboxElement.item(2).checked);
  });

  test('it should trigger onSelect function when an item is selected', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;

    this.label = 'MultiSelectTest';
    this.emptyMessage = 'no result';
    this.id = 'id-MultiSelectTest';
    this.onSelect = sinon.spy();

    await render(hbs`
    <PixMultiSelect
      @onSelect={{this.onSelect}}
      @label={{this.label}}
      @id={{this.id}}
      @emptyMessage={{this.emptyMessage}}
      @options={{this.options}} as |option|>
      {{option.label}}
    </PixMultiSelect>
  `);

    // when
    await clickByLabel('MultiSelectTest');
    await clickByLabel('Salade');

    // then
    const firstCheckbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
    assert.true(firstCheckbox.checked);
    assert.ok(this.onSelect.calledOnce, 'the callback should be called once');
    assert.ok(this.onSelect.calledWith, ['1']);
  });

  test('it should unselect item and return selected item of the updated list', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;

    this.label = 'MultiSelectTest';
    this.emptyMessage = 'no result';
    this.selected = ['1', '2'];
    this.id = 'id-MultiSelectTest';
    this.onSelect = sinon.spy();

    await render(hbs`
      <PixMultiSelect
        @onSelect={{this.onSelect}}
        @label={{this.label}}
        @id={{this.id}}
        @emptyMessage={{this.emptyMessage}}
        @options={{this.options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    // when
    await clickByLabel('MultiSelectTest');
    await clickByLabel('Salade');

    // then
    assert.ok(this.onSelect.calledWith, ['2']);
  });

  module('When it is a searchable multiselect', function () {
    test('it should renders searchable PixMultiSelect multi select list', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.label = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      // when
      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // then
      const inputElement = this.element.querySelector('.pix-multi-select-header__search-input');
      const listElement = this.element.querySelectorAll('li');
      assert.contains('MultiSelectTest');
      assert.equal(inputElement.placeholder, this.placeholder);
      assert.equal(listElement.length, 3);
    });

    test('it should renders filtered given case insensitive', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
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
      await fillInByLabel('Mon multi select', 'tomate');

      // then
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.length, 1);
      assert.contains('Tomate');
    });

    test('it should renders no result given case sensitive', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.label = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.strictSearch = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @strictSearch={{this.strictSearch}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @label={{this.label}}
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
      await fillInByLabel('Mon multi select', 'tomate');

      // then
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.length, 1);
      assert.contains('no result');
    });

    test('it should display list PixMultiSelect on focus', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.label = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.showOptionsOnInput = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @showOptionsOnInput={{this.showOptionsOnInput}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await focus('input');

      // then
      const listElement = this.element.querySelector('ul');
      assert.equal(listElement.className.trim(), 'pix-multi-select-list');
    });

    test('it should not display list PixMultiSelect on focus', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.label = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.showOptionsOnInput = false;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @showOptionsOnInput={{this.showOptionsOnInput}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await focus('input');

      // then
      const listElement = this.element.querySelector('ul');
      assert.equal(listElement.className, 'pix-multi-select-list pix-multi-select-list--hidden');
    });

    test('it should sort default selected items when focused', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.label = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';
      this.defaultSelected = ['3'];

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @selected={{defaultSelected}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await focus('input');

      // then
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.length, 3);
      assert.equal(listElement.item(0).textContent.trim(), 'Oignon');
      assert.equal(listElement.item(1).textContent.trim(), 'Salade');
      assert.equal(listElement.item(2).textContent.trim(), 'Tomate');
    });

    test('it should not sort when user select item', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.label = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await clickByLabel('MultiSelectTest');
      await clickByLabel(DEFAULT_OPTIONS[1].label);

      // then
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.length, 3);
      assert.equal(listElement.item(0).textContent.trim(), 'Salade');
      assert.equal(listElement.item(1).textContent.trim(), 'Tomate');
      assert.equal(listElement.item(2).textContent.trim(), 'Oignon');
    });

    test('it should not sort when user search and select item', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
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
      await fillInByLabel('Mon multi select', 'Oi');
      await clickByLabel('Oignon');
      await fillInByLabel('Mon multi select', 'o');

      // then
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.length, 2);
      assert.equal(listElement.item(0).textContent.trim(), 'Tomate');
      assert.equal(listElement.item(1).textContent.trim(), 'Oignon');
    });

    test('it should sort items when search is cleaned', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.label = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
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
      await fillInByLabel('Mon multi select', 'Oi');
      await clickByLabel('Oignon');
      await fillInByLabel('Mon multi select', '');

      // then
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.length, 3);
      assert.equal(listElement.item(0).textContent.trim(), 'Oignon');
      assert.equal(listElement.item(1).textContent.trim(), 'Salade');
      assert.equal(listElement.item(2).textContent.trim(), 'Tomate');
    });

    test('should not sort when there are default items selected and a new selected item', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = ['2'];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.label = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
          @label={{this.label}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @showOptionsOnInput={{true}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await clickByLabel('MultiSelectTest');

      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.item(0).textContent.trim(), 'Tomate');

      await clickByLabel('Oignon');

      // then
      const listElement2 = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement2.item(0).textContent.trim(), 'Tomate');
      assert.equal(listElement2.item(1).textContent.trim(), 'Salade');
      assert.equal(listElement2.item(2).textContent.trim(), 'Oignon');
    });

    test('it should sort items when search is unfocus', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = [];
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.label = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @selected={{this.selected}}
          @onSelect={{this.onSelect}}
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
      await fillInByLabel('Mon multi select', 'Oi');
      await clickByLabel('Oignon');

      await blur('input');

      await fillInByLabel('Mon multi select', '');

      // then
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.length, 3);
      assert.equal(listElement.item(0).textContent.trim(), 'Oignon');
      assert.equal(listElement.item(1).textContent.trim(), 'Salade');
      assert.equal(listElement.item(2).textContent.trim(), 'Tomate');
    });
  });

  test('it should throw an error if no id is provided when there is a label', async function (assert) {
    // given
    const componentParams = { id: '   ', label: 'Votre choix: ', options: DEFAULT_OPTIONS };
    const component = createGlimmerComponent('component:pix-multi-select', componentParams);

    // when & then
    const expectedError = new Error(
      'ERROR in PixMultiSelect component, @id param is necessary when giving @label'
    );
    assert.throws(function () {
      component.label;
    }, expectedError);
  });

  test('it should asynchronously load options', async function (assert) {
    // given
    this.onLoadOptions = () => Promise.resolve(DEFAULT_OPTIONS);
    this.selected = [];
    this.onSelect = (selected) => this.set('selected', selected);
    this.emptyMessage = 'no result';
    this.label = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @selected={{this.selected}}
        @onSelect={{this.onSelect}}
        @label={{this.label}}
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

  test('it should throw an error if removed argument size is used', async function (assert) {
    // given
    const componentParams = { size: 'big', options: DEFAULT_OPTIONS };

    // when
    const renderComponent = function () {
      createGlimmerComponent('component:pix-multi-select', componentParams);
    };

    // then
    const expectedError = new Error(
      'ERROR in PixMultiSelect component: @size argument has been removed and must not be used anymore.'
    );
    assert.throws(renderComponent, expectedError);
  });
});
