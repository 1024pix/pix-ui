import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn, focus } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import sinon from 'sinon';

module('Integration | Component | multi-select', function(hooks) {
  setupRenderingTest(hooks);

  const DEFAULT_OPTIONS = [
    { value: '1', label: 'Salade' },
    { value: '2', label: 'Tomate' },
    { value: '3', label: 'Oignon' },
  ];
  const DEFAULT_ON_SELECT = () => {};
  
  test('it renders PixMultiSelect with list', async function(assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.onSelect = DEFAULT_ON_SELECT;
      this.emptyMessage = 'no result';
      this.title = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';

    // when
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

    const buttonElement = this.element.querySelector('.pix-multi-select-header');
    const listElement = this.element.querySelectorAll('li');

    // then
    assert.equal(buttonElement.textContent.trim(), this.title);
    assert.equal(listElement.length, 3);
  });

  test('it renders the PixMultiSelect with empty message', async function(assert) {
    // given
    this.options = [];
    this.onSelect = DEFAULT_ON_SELECT;
    this.emptyMessage = 'no result';
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';

    // when
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

    const buttonElement = this.element.querySelector('.pix-multi-select-header');
    const listElement = this.element.querySelectorAll('li');

    // then
    assert.equal(buttonElement.textContent.trim(), this.title);
    
    assert.equal(listElement.length, 1);
    assert.equal(listElement.item(0).textContent.trim(), 'no result');
  });

  test('it renders the PixMultiSelect with default checked', async function(assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.onSelect = DEFAULT_ON_SELECT;
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
        @options={{options}} as |option|>
        {{option.label}}
      </PixMultiSelect>
    `);

    const checkboxElement = this.element.querySelectorAll('input[type=checkbox]');

    // then
    assert.equal(checkboxElement.length, 3);
    
    assert.equal(checkboxElement.item(0).checked, false);
    assert.equal(checkboxElement.item(1).checked, true);
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
  const firstCheckbox = this.element.querySelectorAll('input[type=checkbox]').item(0);

  await click(firstCheckbox);

  // then
  assert.equal(firstCheckbox.checked, true);
  assert.ok(this.onSelect.calledOnce, "the callback should be called once");
  assert.ok(this.onSelect.calledWith, ['1']);
  });

  test('it should unselect item and return selected item of the updated list', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;

    this.title = 'MultiSelectTest';
    this.emptyMessage = 'no result';
    this.selected= ['1','2'];
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
    const firstCheckbox = this.element.querySelectorAll('input[type=checkbox]').item(0);

    await click(firstCheckbox);

    // then
    assert.ok(this.onSelect.calledWith, ['2']);
  });

  test('it should renders searchable PixMultiSelect multi select list', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.onSelect = DEFAULT_ON_SELECT;
    this.emptyMessage = 'no result';
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';
    this.isSearchable = true;
    this.placeholder = 'Placeholder test';

    await render(hbs`
      <PixMultiSelect
        @isSearchable={{isSearchable}}
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
    this.onSelect = DEFAULT_ON_SELECT;
    this.emptyMessage = 'no result';
    this.title = 'MultiSelectTest';
    this.id = 'id-MultiSelectTest';
    this.isSearchable = true;
    this.placeholder = 'Placeholder test';

    await render(hbs`
      <PixMultiSelect
        @isSearchable={{isSearchable}}
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
    this.onSelect = DEFAULT_ON_SELECT;
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
    assert.equal(listElement.item(0).textContent.trim(), 'no result');
  });

  test('it should display list PixMultiSelect on focus', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.onSelect = DEFAULT_ON_SELECT;
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

    // when
    const listElement = this.element.querySelector('ul');

    // then
    assert.equal(listElement.className.trim(), 'pix-multi-select-list');
  });

  test('it should not display list PixMultiSelect on focus', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.onSelect = DEFAULT_ON_SELECT;
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

    // when
    const listElement = this.element.querySelector('ul');

    // then
    assert.equal(listElement.className, 'pix-multi-select-list pix-multi-select-list--hidden');
  });
});
