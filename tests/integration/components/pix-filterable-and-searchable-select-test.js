import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click } from '@ember/test-helpers';
import { render, clickByName, fillByLabel } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | PixFilterableAndSearchableSelect', function (hooks) {
  setupRenderingTest(hooks);

  this.options = [
    { value: '1', label: 'Mache', category: 'Kebab' },
    { value: '2', label: 'Tomate', category: 'Hamburger' },
  ];

  this.selectLabel = 'select Label';
  this.placeholder = 'selectPlaceholder';
  this.categoriesId = 'filter id';
  this.categoriesLabel = 'filterLabel';
  this.categoriesPlaceholder = 'filter Placeholder';
  this.onChange = sinon.stub();

  test('it displays the categories', async function (assert) {
    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @placeholder={{this.placeholder}}
      @options={{this.options}}
      @onChange={{this.onChange}}
      @categoriesId={{this.categoriesId}}
      @categoriesLabel={{this.categoriesLabel}}
      @categoriesPlaceholder={{this.categoriesPlaceholder}}
    />
  `);

    await click(screen.getByText(this.categoriesPlaceholder));
    await screen.findByRole('menu');
    const items = await screen.queryAllByRole('menuitem');

    const categories = items.map((item) => {
      return item.innerText;
    });

    // then
    assert.deepEqual(categories, ['Kebab', 'Hamburger']);
  });

  test('it displays the select options', async function (assert) {
    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @placeholder={{this.placeholder}}
      @options={{this.options}}
      @onChange={{this.onChange}}
      @categoriesId={{this.categoriesId}}
      @categoriesLabel={{this.categoriesLabel}}
      @categoriesPlaceholder={{this.categoriesPlaceholder}}
    />
  `);

    await clickByName(this.selectLabel);
    await screen.findByRole('listbox');
    const options = await screen.queryAllByRole('option');

    const labels = options.map((option) => {
      return option.innerText;
    });

    // then
    assert.deepEqual(labels, ['selectPlaceholder', 'Mache', 'Tomate']);
  });

  test('it displays once each category', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Oignon', category: 'Kebab' },
    ];

    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @placeholder={{this.placeholder}}
      @options={{this.options}}
      @onChange={{this.onChange}}
      @categoriesId={{this.categoriesId}}
      @categoriesLabel={{this.categoriesLabel}}
      @categoriesPlaceholder={{this.categoriesPlaceholder}}
    />
  `);

    await click(screen.getByText(this.categoriesPlaceholder));
    await screen.findByRole('menu');

    const items = await screen.queryAllByRole('menuitem');

    const categories = items.map((item) => {
      return item.innerText;
    });

    // then
    assert.deepEqual(categories, ['Kebab']);
  });

  test('it displays only options with the correct category', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Tomate', category: 'Hamburger' },
    ];

    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @placeholder={{this.placeholder}}
      @options={{this.options}}
      @onChange={{this.onChange}}
      @categoriesId={{this.categoriesId}}
      @categoriesLabel={{this.categoriesLabel}}
      @categoriesPlaceholder={{this.categoriesPlaceholder}}
    />
  `);

    await click(screen.getByText(this.categoriesPlaceholder));
    await screen.findByRole('menu');

    await click(screen.getByRole('checkbox', { name: 'Kebab' }));
    await click(screen.getByRole('button', { name: this.selectLabel }));

    // then
    assert.dom(screen.getByText('Mache')).exists();
    assert.equal(screen.queryByText('Tomate'), null);
  });

  test('it displays options corresponding to the selected categories', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Tomate', category: 'Hamburger' },
      { value: '3', label: 'Saumon', category: 'Sushi' },
    ];

    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @placeholder={{this.placeholder}}
      @options={{this.options}}
      @onChange={{this.onChange}}
      @categoriesId={{this.categoriesId}}
      @categoriesLabel={{this.categoriesLabel}}
      @categoriesPlaceholder={{this.categoriesPlaceholder}}
    />
  `);

    await click(screen.getByText(this.categoriesPlaceholder));
    await screen.findByRole('menu');

    await click(screen.getByRole('checkbox', { name: 'Hamburger' }));
    await click(screen.getByRole('checkbox', { name: 'Sushi' }));
    await click(screen.getByRole('button', { name: this.selectLabel }));
    await screen.findByRole('listbox');

    const options = await screen.queryAllByRole('option');

    const labels = options.map((option) => {
      return option.innerText;
    });

    // then
    assert.deepEqual(labels, ['selectPlaceholder', 'Tomate', 'Saumon']);
  });

  test('it call onChange when a option is selected', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Tomate', category: 'Hamburger' },
    ];

    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @placeholder={{this.placeholder}}
      @options={{this.options}}
      @onChange={{this.onChange}}
      @categoriesId={{this.categoriesId}}
      @categoriesLabel={{this.categoriesLabel}}
      @categoriesPlaceholder={{this.categoriesPlaceholder}}
    />
  `);

    await click(screen.getByRole('button', { name: this.selectLabel }));
    await screen.findByRole('listbox');
    await click(screen.getByRole('option', { name: 'Tomate' }));

    // then
    sinon.assert.calledWith(this.onChange, '2');
    assert.ok(true);
  });

  test('it displays options which match the text searched', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Tomate', category: 'Hamburger' },
    ];
    this.searchLabel = 'Recherche';

    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @placeholder={{this.placeholder}}
      @options={{this.options}}
      @onChange={{this.onChange}}
      @categoriesId={{this.categoriesId}}
      @categoriesLabel={{this.categoriesLabel}}
      @categoriesPlaceholder={{this.categoriesPlaceholder}}
      @searchLabel={{this.searchLabel}}
      @isSearchable={{true}}
    />
  `);

    await click(screen.getByRole('button', { name: this.selectLabel }));
    await screen.findByRole('listbox');
    await fillByLabel(this.searchLabel, 'Tom');

    const items = await screen.queryAllByRole('option');

    const options = items.map((item) => {
      return item.innerText;
    });

    // then
    assert.deepEqual(options, ['Tomate']);
  });

  test('it displays the selected option', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Tomate', category: 'Hamburger' },
    ];
    this.searchLabel = 'Recherche';

    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @placeholder={{this.placeholder}}
      @options={{this.options}}
      @value={{'2'}}
      @onChange={{this.onChange}}
      @categoriesId={{this.categoriesId}}
      @categoriesLabel={{this.categoriesLabel}}
      @categoriesPlaceholder={{this.categoriesPlaceholder}}
      @searchLabel={{this.searchLabel}}
      @isSearchable={{true}}
    />
  `);

    await click(screen.getByRole('button', { name: this.selectLabel }));
    await screen.findByRole('listbox');

    const option = await screen.findByRole('option', { selected: true });

    // then
    assert.deepEqual(option.innerText, 'Tomate');
  });
  module('Label and subLabel', function () {
    test('it displays the label', async function (assert) {
      this.options = [
        { value: '1', label: 'Mache', category: 'Kebab' },
        { value: '2', label: 'Tomate', category: 'Hamburger' },
      ];
      this.label = 'Label de mon big composant trop compliqué';

      // given & when
      const screen = await render(hbs`
      <PixFilterableAndSearchableSelect
        @selectLabel={{this.selectLabel}}
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @value={{'2'}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesLabel={{this.categoriesLabel}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
        @label={{this.label}}
      />
    `);

      const label = await screen.getByLabelText(this.label);

      // then
      assert.dom(label).exists();
    });

    test('it give the focus on the first child when clicking on the label', async function (assert) {
      this.options = [
        { value: '1', label: 'Mache', category: 'Kebab' },
        { value: '2', label: 'Tomate', category: 'Hamburger' },
      ];
      this.label = 'Label de mon big composant trop compliqué';

      // given & when
      const screen = await render(hbs`
      <PixFilterableAndSearchableSelect
        @selectLabel={{this.selectLabel}}
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @value={{'2'}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesLabel={{this.categoriesLabel}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
        @label={{this.label}}
      />
    `);

      const label = await screen.getByText(this.label);

      await click(label);

      // then
      assert.dom(screen.getByRole('button', { name: this.categoriesPlaceholder })).isFocused();
    });

    test('it display the subLabel', async function (assert) {
      this.options = [
        { value: '1', label: 'Mache', category: 'Kebab' },
        { value: '2', label: 'Tomate', category: 'Hamburger' },
      ];
      this.label = 'Label de mon big composant trop compliqué';
      this.subLabel = 'Mon subLabel';

      // given & when
      const screen = await render(hbs`
      <PixFilterableAndSearchableSelect
        @label={{this.label}}
        @subLabel={{this.subLabel}}
        @selectLabel={{this.selectLabel}}
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @value={{'2'}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesLabel={{this.categoriesLabel}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
      />
    `);

      // then
      assert.dom(screen.getByText('Mon subLabel')).exists();
    });

    test.only('should display the asterix when the composant ids required', async function (assert) {
      this.options = [
        { value: '1', label: 'Mache', category: 'Kebab' },
        { value: '2', label: 'Tomate', category: 'Hamburger' },
      ];
      this.label = 'Label de mon big composant trop compliqué';
      this.selectLabel = 'Label de mon composant select';
      this.requiredText = 'Sélectionner un aliment';

      // given & when
      const screen = await render(hbs`
      <PixFilterableAndSearchableSelect
        @label={{this.label}}
        @selectLabel={{this.selectLabel}}
        @placeholder={{this.placeholder}}
        @options={{this.options}}
        @value={{'2'}}
        @onChange={{this.onChange}}
        @categoriesId={{this.categoriesId}}
        @categoriesLabel={{this.categoriesLabel}}
        @categoriesPlaceholder={{this.categoriesPlaceholder}}
        @searchLabel={{this.searchLabel}}
        @isSearchable={{true}}
        @requiredText={{requiredText}}
      />
    `);

      // then
      assert.dom(screen.getByLabelText('* Label de mon big composant trop compliqué')).exists();
    });
  });
});
