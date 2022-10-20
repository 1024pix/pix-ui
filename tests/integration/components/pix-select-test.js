import { module, test } from 'qunit';
import { click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByName } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';

module('Integration | Component | PixSelect', function (hooks) {
  setupRenderingTest(hooks);

  this.options = [
    {
      category: 'Kebab',
      options: [
        { value: '1', label: 'Salade' },
        { value: '2', label: 'Tomate' },
        { value: '3', label: 'Oignon' },
      ],
    },
  ];
  this.label = 'Mon menu déroulant';
  this.subLabel = 'Mon sous label';
  this.innerText = 'Choisissez une option';
  this.id = 'id-select-test';

  test('it renders Select', async function (assert) {
    // given & when
    const screen = await render(hbs`
      <PixSelect
        @id={{this.id}}
        @options={{this.options}}
        @innerText={{this.innerText}}
        @label={{this.label}}
        @subLabel={{this.subLabel}}
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
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
          />
        `);

      // then
      assert.dom(screen.queryByRole('option', { name: 'Oignon' })).doesNotExist();
    });

    test('it opens the dropdown', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
        />
        `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');
      // then
      assert.dom(screen.getByRole('option', { name: 'Oignon' })).exists();
    });
  });

  module('Category', function () {
    test('it does not render category when 1 category available', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
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
        {
          category: 'Fruit',
          options: [{ value: '2', label: 'Tomate' }],
        },
        {
          category: 'Autre',
          options: [
            { value: '1', label: 'Salade' },
            { value: '3', label: 'Oignon' },
          ],
        },
      ];
      const screen = await render(hbs`
        <PixSelect
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
        />
        `);

      // when
      await clickByName('Mon menu déroulant');

      await screen.findByRole('listbox');

      // then
      assert.dom(screen.getByRole('group', { name: 'Fruit' })).exists();
    });
  });

  module('onSelect', function () {
    test('it should trigger onSelect function when an item is selected', async function (assert) {
      // given
      this.onSelect = sinon.spy();

      const screen = await render(hbs`
        <PixSelect
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
          @subLabel={{this.subLabel}}
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

  module('a11y', function () {
    test('it should display list, focus first element on arrow down press', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixSelect
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
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
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
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
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
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
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
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
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
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
          @id={{this.id}}
          @options={{this.options}}
          @innerText={{this.innerText}}
          @label={{this.label}}
          @onSelect={{this.onSelect}}
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
});
