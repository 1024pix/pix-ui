import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillByLabel, clickByName } from '@1024pix/ember-testing-library';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
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

  module('common cases', function () {
    test('it renders PixMultiSelect with hidden list', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.values = [];
      this.onChange = () => {};
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';

      // when
      const screen = await render(hbs`
        <PixMultiSelect
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="multiSelectLabel"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // then
      assert.equal(screen.queryAllByRole('checkbox').length, 0);
    });

    test('it should updates selected items when @values is reset', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.values = ['2'];
      this.onChange = (values) => this.set('values', values);
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';

      const screen = await render(hbs`
        <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @values={{this.values}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      this.set('values', []);
      await clickByName('labelMultiSelect');

      await screen.findByRole('menu');
      // then
      const checkboxElement = screen.queryAllByRole('checkbox');
      assert.false(checkboxElement[0].checked);
      assert.false(checkboxElement[1].checked);
      assert.false(checkboxElement[2].checked);
    });

    module('onClick', function () {
      test('it renders PixMultiSelect list', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;
        this.values = [];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';

        // when
        const screen = await render(hbs`
          <PixMultiSelect
            @values={{this.values}}
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @label="labelMultiSelect"
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}} as |option|>
            {{option.label}}
          </PixMultiSelect>
        `);

        await clickByName('labelMultiSelect');

        await screen.findByRole('menu');

        // then
        assert.equal(screen.queryAllByRole('checkbox').length, 3);
      });

      test('it renders the PixMultiSelect with empty message', async function (assert) {
        // given
        this.options = [];
        this.values = [];
        this.onChange = () => {};
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';

        // when
        const screen = await render(hbs`
          <PixMultiSelect
            @values={{this.values}}
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @label="labelMultiSelect"
            @id={{this.id}}
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}} as |option|
          >
            {{option.label}}
          </PixMultiSelect>
        `);

        await clickByName('labelMultiSelect');

        await screen.findByRole('menu');
        // then
        assert.equal(screen.queryAllByRole('checkbox').length, 0);
        assert.contains('no result');
      });

      test('it renders the PixMultiSelect with default checked', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;
        this.onChange = () => {};
        this.values = ['2'];
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';

        // when
        const screen = await render(hbs`
          <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @values={{this.values}}
            @label="labelMultiSelect"
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}} as |option|
          >
            {{option.label}}
          </PixMultiSelect>
        `);

        await clickByName('labelMultiSelect');

        await userEvent.keyboard('[ArrowDown]');

        await screen.findByRole('menu');

        // then
        const checkboxElement = screen.queryAllByRole('checkbox');
        assert.equal(checkboxElement.length, 3);
        assert.false(checkboxElement[0].checked);
        assert.true(checkboxElement[1].checked);
        assert.false(checkboxElement[2].checked);
      });
    });

    module('display main text', function () {
      test('it should display selected labels on MultiSelect', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;
        this.onChange = () => {};
        this.values = ['2', '3'];
        this.emptyMessage = 'no result';
        this.placeholder = 'MultiSelectTest';
        this.id = 'id-MultiSelectTest';

        // when
        const screen = await render(hbs`
          <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @values={{this.values}}
            @label="labelMultiSelect"
            @emptyMessage={{this.emptyMessage}}
            @isSearchable={{true}}
            @options={{this.options}} as |option|
          >
            {{option.label}}
          </PixMultiSelect>
        `);
        // then
        const inputElement = screen.getByLabelText('labelMultiSelect');
        assert.equal(inputElement.placeholder, 'Tomate, Oignon');
      });
    });

    module('mandatory element', function () {
      test('it should throw an error if no id is provided', async function (assert) {
        // given
        const componentParams = {
          id: '   ',
          label: 'toto',
          placeholder: 'coucou',
          options: DEFAULT_OPTIONS,
        };
        const renderComponent = function () {
          createGlimmerComponent('component:pix-multi-select', componentParams);
        };

        // when & then
        const expectedError = new Error(
          'ERROR in PixMultiSelect component, @id param is necessary'
        );
        assert.throws(renderComponent, expectedError);
      });

      test('it should throw an error if no label is provided', async function (assert) {
        // given
        const componentParams = {
          id: 'toto',
          label: ' ',
          placeholder: 'coucou',
          options: DEFAULT_OPTIONS,
        };
        const renderComponent = function () {
          createGlimmerComponent('component:pix-multi-select', componentParams);
        };

        // when & then
        const expectedError = new Error(
          'ERROR in PixMultiSelect component, @label param is necessary'
        );
        assert.throws(renderComponent, expectedError);
      });

      test('it should throw an error if no placeholder is provided', async function (assert) {
        // given
        const componentParams = {
          id: 'toto',
          label: 'coucou',
          placeholder: ' ',
          options: DEFAULT_OPTIONS,
        };
        const renderComponent = function () {
          createGlimmerComponent('component:pix-multi-select', componentParams);
        };

        // when & then
        const expectedError = new Error(
          'ERROR in PixMultiSelect component, @placeholder param is necessary'
        );
        assert.throws(renderComponent, expectedError);
      });

      test('it should throw a combined error if no placeholder, label is provided', async function (assert) {
        // given
        const componentParams = {
          id: 'toto',
          label: ' ',
          placeholder: ' ',
          options: DEFAULT_OPTIONS,
        };
        const renderComponent = function () {
          createGlimmerComponent('component:pix-multi-select', componentParams);
        };

        // when & then
        const expectedError = new Error(
          'ERROR in PixMultiSelect component, @label, @placeholder params are necessary'
        );
        assert.throws(renderComponent, expectedError);
      });
    });

    module('onChange', function () {
      test('it should trigger onChange function when an item is selected', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;

        this.placeholder = 'MultiSelectTest';
        this.emptyMessage = 'no result';
        this.id = 'id-MultiSelectTest';
        this.onChange = sinon.spy();

        const screen = await render(hbs`
        <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

        // when
        await clickByName('labelMultiSelect');

        await screen.findByRole('menu');

        await clickByName('Salade');

        // then
        assert.true(screen.getByLabelText('Salade').checked);
        assert.ok(this.onChange.calledOnce, 'the callback should be called once');
        sinon.assert.calledWithMatch(this.onChange, ['1']);
      });

      test('it should unselect item and return selected item of the updated list', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;

        this.placeholder = 'MultiSelectTest';
        this.emptyMessage = 'no result';
        this.values = ['1', '2'];
        this.id = 'id-MultiSelectTest';
        this.onChange = sinon.spy();

        const screen = await render(hbs`
          <PixMultiSelect
            @onChange={{this.onChange}}
            @placeholder={{this.placeholder}}
            @id={{this.id}}
            @label="labelMultiSelect"
            @emptyMessage={{this.emptyMessage}}
            @options={{this.options}} as |option|>
            {{option.label}}
          </PixMultiSelect>
        `);

        // when
        await clickByName('labelMultiSelect');

        await screen.findByRole('menu');

        await clickByName('Salade');

        // then
        sinon.assert.calledWithMatch(this.onChange, ['1']);
        assert.ok(true);
      });
    });

    module('a11y', function () {
      test('it should display list, focus first element on arrow down press', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;

        this.placeholder = 'MultiSelectTest';
        this.emptyMessage = 'no result';
        this.id = 'id-MultiSelectTest';
        this.onChange = sinon.spy();

        const screen = await render(hbs`
        <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
        `);

        // when
        await screen.getByLabelText('labelMultiSelect').focus();

        await userEvent.keyboard('[ArrowDown]');

        await screen.findByRole('menu');

        fireEvent(screen.getByRole('menu'), new Event('transitionend'));

        const checkboxes = screen.queryAllByRole('checkbox');
        // then
        assert.equal(checkboxes.length, 3);
        assert.equal(document.activeElement, checkboxes[0]);
      });

      test('it should display list, focus last element on arrow up press', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;

        this.placeholder = 'MultiSelectTest';
        this.emptyMessage = 'no result';
        this.id = 'id-MultiSelectTest';
        this.onChange = sinon.spy();

        const screen = await render(hbs`
        <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
        `);

        // when
        await screen.getByLabelText('labelMultiSelect').focus();

        await userEvent.keyboard('[ArrowUp]');

        await screen.findByRole('menu');

        fireEvent(screen.getByRole('menu'), new Event('transitionend'));

        const checkboxes = screen.queryAllByRole('checkbox');
        // then
        assert.equal(checkboxes.length, 3);
        assert.equal(document.activeElement, checkboxes[2]);
      });

      test('it should focus first element on arrow down press', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;

        this.placeholder = 'MultiSelectTest';
        this.emptyMessage = 'no result';
        this.id = 'id-MultiSelectTest';
        this.onChange = sinon.spy();

        const screen = await render(hbs`
        <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
        `);

        // when
        await screen.getByLabelText('labelMultiSelect').focus();

        await userEvent.keyboard('[Enter]');

        await screen.findByRole('menu');

        await userEvent.keyboard('[ArrowDown]');

        const checkboxes = screen.queryAllByRole('checkbox');
        // then
        assert.equal(document.activeElement, checkboxes[0]);
      });

      test('it should focus last element on arrow up press', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;

        this.placeholder = 'MultiSelectTest';
        this.emptyMessage = 'no result';
        this.id = 'id-MultiSelectTest';
        this.onChange = sinon.spy();

        const screen = await render(hbs`
        <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
        `);

        // when
        await screen.getByLabelText('labelMultiSelect').focus();

        await userEvent.keyboard('[Enter]');

        await screen.findByRole('menu');

        await userEvent.keyboard('[ArrowUp]');

        const checkboxes = screen.queryAllByRole('checkbox');
        // then
        assert.equal(document.activeElement, checkboxes[2]);
      });

      test('it should call on select on enter press', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;

        this.placeholder = 'MultiSelectTest';
        this.emptyMessage = 'no result';
        this.id = 'id-MultiSelectTest';
        this.onChange = sinon.spy();

        const screen = await render(hbs`
        <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
        `);

        // when
        await screen.getByLabelText('labelMultiSelect').focus();

        await userEvent.keyboard('[ArrowDown]');

        await screen.findByRole('menu');

        fireEvent(screen.getByRole('menu'), new Event('transitionend'));

        await userEvent.keyboard('[Enter]');

        // then
        assert.throws(screen.getByRole('menu'));
        assert.ok(this.onChange.calledOnce, 'the callback should be called once');
        assert.equal(document.activeElement, screen.getByLabelText('labelMultiSelect'));
      });

      test('it should close menu on escape press, focus multiselect element', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;

        this.placeholder = 'MultiSelectTest';
        this.emptyMessage = 'no result';
        this.id = 'id-MultiSelectTest';
        this.onChange = sinon.spy();

        const screen = await render(hbs`
        <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
        `);

        // when
        screen.getByLabelText('labelMultiSelect').focus();

        await userEvent.keyboard('[ArrowDown]');

        await screen.findByRole('menu');

        await userEvent.keyboard('[Escape]');

        // then
        assert.equal(document.activeElement, screen.getByLabelText('labelMultiSelect'));
        assert.throws(screen.getByRole('menu'));
      });
    });
  });

  module('When it is a searchable multiselect', function () {
    test('it should renders searchable PixMultiSelect multi select list', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.values = [];
      this.onChange = () => {};
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;

      // when
      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
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

      assert.equal(screen.getByLabelText('label').placeholder, this.placeholder);
      assert.equal(screen.getAllByRole('checkbox').length, 3);
    });

    test('it should renders filtered given case insensitive', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.values = [];
      this.onChange = () => {};
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
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
      this.values = [];
      this.onChange = () => {};
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.strictSearch = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @strictSearch={{this.strictSearch}}
          @values={{this.values}}
          @onChange={{this.onChange}}
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
      this.values = [];
      this.onChange = () => {};
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.label = 'label';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
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
      this.values = ['3'];
      this.onChange = () => {};
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="label"
          @emptyMessage={{this.emptyMessage}}
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
      this.values = [];
      this.onChange = () => {};
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @label="labelMultiSelect"
          @id={{this.id}}
          @emptyMessage={{this.emptyMessage}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('labelMultiSelect', '');

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
      this.values = [];
      this.onChange = () => {};
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
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
      this.values = [];
      this.onChange = (values) => this.set('values', values);
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
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
      this.values = ['2'];
      this.onChange = () => {};
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.isSearchable = true;
      this.placeholder = 'Placeholder test';

      const screen = await render(hbs`
        <PixMultiSelect
          @isSearchable={{this.isSearchable}}
          @values={{this.values}}
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @showOptionsOnInput={{true}}
          @options={{this.options}} as |option|>
          {{option.label}}
        </PixMultiSelect>
      `);

      // when
      await fillByLabel('labelMultiSelect', '');

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

  module('custom class name', function () {
    test('it should use the added class name', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.onChange = () => {};
      this.values = ['2', '3'];
      this.emptyMessage = 'no result';
      this.placeholder = 'MultiSelectTest';
      this.id = 'id-MultiSelectTest';
      this.className = 'custom';

      // when
      await render(hbs`
        <PixMultiSelect
          @onChange={{this.onChange}}
          @placeholder={{this.placeholder}}
          @id={{this.id}}
          @values={{this.values}}
          @label="labelMultiSelect"
          @emptyMessage={{this.emptyMessage}}
          @isSearchable={{true}}
          @className = {{this.className}}
          @options={{this.options}} as |option|
        >
          {{option.label}}
        </PixMultiSelect>
      `);
      // then
      assert.dom('.custom').exists();
    });
  });
});
