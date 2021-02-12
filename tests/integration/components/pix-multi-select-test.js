import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn, focus, blur } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import sinon from 'sinon';

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
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
    await render(hbs`
      <PixMultiSelect
        @selected={{selected}}
        @onSelect={{onSelect}}
        @title={{title}}
        @id={{id}}
        @emptyMessage={{emptyMessage}}
        @options={{options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    const buttonElement = this.element.querySelector('.pix-multi-select-header');
    const listElement = this.element.querySelectorAll('li');

    // then
    assert.equal(buttonElement.textContent.trim(), this.title);
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
        @selected={{selected}}
        @onSelect={{onSelect}}
        @title={{title}}
        @id={{id}}
        @emptyMessage={{emptyMessage}}
        @options={{options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    await click('button');

    
    // then
    const buttonElement = this.element.querySelector('.pix-multi-select-header');
    const listElement = this.element.querySelectorAll('li');
    assert.equal(buttonElement.textContent.trim(), this.title);

    assert.equal(listElement.length, 1);
    assert.equal(listElement.item(0).textContent.trim(), 'no result');
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
        @onSelect={{onSelect}}
        @title={{title}}
        @id={{id}}
        @selected={{selected}}
        @emptyMessage={{emptyMessage}}
        @options={{options}} as |option|
      >
        {{option.label}}
      </PixMultiSelect>
    `);

    await click('button');
    
    // then
    const checkboxElement = this.element.querySelectorAll('input[type=checkbox]');
    assert.equal(checkboxElement.length, 3);
    assert.equal(checkboxElement.item(0).checked, false);
    assert.equal(checkboxElement.item(1).checked, true);
    assert.equal(checkboxElement.item(2).checked, false);
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
        @onSelect={{onSelect}}
        @title={{title}}
        @id={{id}}
        @selected={{selected}}
        @emptyMessage={{emptyMessage}}
        @options={{options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    // when
    this.set('selected', []);
    await click('button');
    
    // then
    const checkboxElement = this.element.querySelectorAll('input[type=checkbox]');
    assert.equal(checkboxElement.item(0).checked, false);
    assert.equal(checkboxElement.item(1).checked, false);
    assert.equal(checkboxElement.item(2).checked, false);
  });

  test('it should trigger onSelect function when an item is selected', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;

    this.title = 'MultiSelectTest';
    this.emptyMessage = 'no result';
    this.id = 'id-MultiSelectTest';
    this.onSelect = sinon.spy();

    await render(hbs`
    <PixMultiSelect
      @onSelect={{onSelect}}
      @title={{title}}
      @id={{id}}
      @emptyMessage={{emptyMessage}}
      @options={{options}} as |option|>
      {{option.label}}
    </PixMultiSelect>
  `);

    // when
    await click('button');
    const firstCheckbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
    await click(firstCheckbox);

    // then
    assert.equal(firstCheckbox.checked, true);
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

    await render(hbs`
      <PixMultiSelect
        @onSelect={{onSelect}}
        @title={{title}}
        @id={{id}}
        @emptyMessage={{emptyMessage}}
        @options={{options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    // when
    await click('button');
    const firstCheckbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
    await click(firstCheckbox);

    // then
    assert.ok(this.onSelect.calledWith, ['2']);
  });

  module('When it is a searchable multiselect', function() {
    test('it should renders searchable PixMultiSelect multi select list', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = []
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @options={{options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      const labelElement = this.element.querySelector('.pix-multi-select-header');
      const inputElement = this.element.querySelector('.pix-multi-select-header__search-input');
      const listElement = this.element.querySelectorAll('li');

      // then
      assert.equal(labelElement.textContent.trim(), this.title);
      assert.equal(inputElement.placeholder, this.placeholder);
      assert.equal(listElement.length, 3);
    });

    test('it should renders filtered given case insensitive', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = []
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @options={{options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillIn('input', 'tomate');

      // when
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');

      // then
      assert.equal(listElement.length, 1);
      assert.equal(listElement.item(0).textContent.trim(), 'Tomate');
    });

    test('it should renders no result given case sensitive', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = []
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.strictSearch = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @strictSearch={{strictSearch}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @options={{options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillIn('input', 'tomate');

      // then
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.length, 1);
      assert.equal(listElement.item(0).textContent.trim(), 'no result');
    });

    test('it should display list PixMultiSelect on focus', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.selected = []
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.showOptionsOnInput = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @showOptionsOnInput={{showOptionsOnInput}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @options={{options}} as |option|>
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
      this.selected = []
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.showOptionsOnInput = false;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @showOptionsOnInput={{showOptionsOnInput}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @options={{options}} as |option|>
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
      this.selected = []
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';
      this.defaultSelected = ['3'];

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @selected={{defaultSelected}}
          @options={{options}} as |option|>
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
      this.selected = []
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @options={{options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);
    
      // when
      await click('input[type=text]')
      const thirdCheckbox = this.element.querySelectorAll('input[type=checkbox]').item(2);
      await click(thirdCheckbox);

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
      this.selected = []
      this.onSelect = (selected) => this.set('selected', selected);
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @options={{options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);
    
      // when
      await fillIn('input', 'Oi')
      const checkbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
      await click(checkbox);
      await fillIn('input', 'o')

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
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @options={{options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);
    
      // when
      await fillIn('input', 'Oi')
      const checkbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
      await click(checkbox);
      await fillIn('input', '')
    
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
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @showOptionsOnInput={{true}}
          @options={{options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);
    
      // when
      await click('input[type=text]')
      
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.item(0).textContent.trim(), 'Tomate');

      const checkbox = this.element.querySelectorAll('input[type=checkbox]').item(2);
      await click(checkbox);
    
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
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      await render(hbs`
        <PixMultiSelect
          @isSearchable={{isSearchable}}
          @selected={{selected}}
          @onSelect={{onSelect}}
          @title={{title}}
          @placeholder={{placeholder}}
          @id={{id}}
          @emptyMessage={{emptyMessage}}
          @options={{options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);
    
      // when
      await fillIn('input', 'Oi')
      const checkbox = this.element.querySelectorAll('input[type=checkbox]').item(0);
      await click(checkbox);
      
      await blur('input');

      await fillIn('input', '');
    
      // then
      const listElement = this.element.querySelectorAll('.pix-multi-select-list__item');
      assert.equal(listElement.length, 3);
      assert.equal(listElement.item(0).textContent.trim(), 'Oignon');
      assert.equal(listElement.item(1).textContent.trim(), 'Salade');
      assert.equal(listElement.item(2).textContent.trim(), 'Tomate');
    });
  });
});
