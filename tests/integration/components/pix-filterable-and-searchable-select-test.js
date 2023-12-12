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

  this.label = 'select Label';
  this.placeholder = 'selectPlaceholder';
  this.categoriesId = 'filter id';
  this.categoriesLabel = 'filterLabel';
  this.categoriesPlaceholder = 'Filtres';
  this.onChange = sinon.stub();

  test('it displays the categories', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @onChange={{this.onChange}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
/>`);

    await click(screen.getByText(`${this.categoriesPlaceholder} (0)`));
    const items = await screen.findAllByRole('menuitem');

    const categories = items.map((item) => {
      return item.innerText;
    });
    // then
    assert.deepEqual(categories, ['Kebab', 'Hamburger']);
  });

  test('it displays the select options', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
/>`);

    await clickByName(this.label);
    const options = await screen.findAllByRole('option');

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
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
/>`);

    await click(screen.getByText(`${this.categoriesPlaceholder} (0)`));

    const items = await screen.findAllByRole('menuitem');

    const categories = items.map((item) => {
      return item.innerText;
    });

    // then
    assert.deepEqual(categories, ['Kebab']);
  });

  test('it displays the number of category selected', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Tomate', category: 'Hamburger' },
      { value: '3', label: 'Saumon', category: 'Sushi' },
    ];

    // given & when
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @onChange={{this.onChange}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
/>`);

    await click(screen.getByText(`${this.categoriesPlaceholder} (0)`));
    await click(await screen.findByRole('checkbox', { name: 'Hamburger' }));
    await click(await screen.findByRole('checkbox', { name: 'Sushi' }));

    // then
    assert.dom(screen.getByText(`${this.categoriesPlaceholder} (2)`)).exists();
  });

  test('it displays only options with the correct category', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Tomate', category: 'Hamburger' },
    ];

    // given & when
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
/>`);

    await click(screen.getByText(`${this.categoriesPlaceholder} (0)`));

    await click(await screen.findByRole('checkbox', { name: 'Kebab' }));
    await click(await screen.findByRole('button', { name: this.label }));

    // then
    assert.dom(screen.getByText('Mache')).exists();
    assert.dom(screen.queryByText('Tomate')).doesNotExist();
  });

  test('it displays options corresponding to the selected categories', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Tomate', category: 'Hamburger' },
      { value: '3', label: 'Saumon', category: 'Sushi' },
    ];

    // given & when
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
/>`);

    await click(screen.getByText(`${this.categoriesPlaceholder} (0)`));

    await click(await screen.findByRole('checkbox', { name: 'Hamburger' }));
    await click(await screen.findByRole('checkbox', { name: 'Sushi' }));
    await click(await screen.findByRole('button', { name: this.label }));

    const options = await screen.findAllByRole('option');

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
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
/>`);

    await click(screen.getByRole('button', { name: this.label }));
    await click(await screen.findByRole('option', { name: 'Tomate' }));

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
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
  @searchLabel={{this.searchLabel}}
  @isSearchable={{true}}
/>`);

    await click(screen.getByRole('button', { name: this.label }));
    await fillByLabel(this.searchLabel, 'Tom');

    const items = await screen.findAllByRole('option');

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
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @value={{'2'}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
  @searchLabel={{this.searchLabel}}
  @isSearchable={{true}}
/>`);

    await click(screen.getByRole('button', { name: this.label }));
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
      const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @value={{'2'}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
/>`);

      const label = await screen.getByLabelText(this.label);

      // then
      assert.dom(label).exists();
    });

    test('it display the subLabel', async function (assert) {
      this.options = [
        { value: '1', label: 'Mache', category: 'Kebab' },
        { value: '2', label: 'Tomate', category: 'Hamburger' },
      ];
      this.label = 'Label de mon big composant trop compliqué';
      this.subLabel = 'Mon subLabel';

      // given & when
      const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @subLabel={{this.subLabel}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @value={{'2'}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
/>`);

      // then
      assert.dom(screen.getByText('Mon subLabel')).exists();
    });

    test('it displays the astérisque when the composant ids required', async function (assert) {
      this.options = [
        { value: '1', label: 'Mache', category: 'Kebab' },
        { value: '2', label: 'Tomate', category: 'Hamburger' },
      ];
      this.label = 'Label de mon big composant trop compliqué';
      this.requiredText = 'Sélectionner un aliment';

      // given & when
      const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @value={{'2'}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
  @searchLabel={{this.searchLabel}}
  @isSearchable={{true}}
  @requiredText={{this.requiredText}}
/>`);

      // then
      assert.dom(screen.getByLabelText('* Label de mon big composant trop compliqué')).exists();
    });
  });

  test('it displays error message', async function (assert) {
    this.options = [
      { value: '1', label: 'Mache', category: 'Kebab' },
      { value: '2', label: 'Tomate', category: 'Hamburger' },
    ];
    this.label = 'Label de mon big composant trop compliqué';
    this.requiredText = 'Sélectionner un aliment';
    this.errorMessage = 'Aliment non saisi. Veuillez en renseigner un !';

    // given & when
    const screen = await render(hbs`<PixFilterableAndSearchableSelect
  @label={{this.label}}
  @placeholder={{this.placeholder}}
  @options={{this.options}}
  @value={{'2'}}
  @onChange={{this.onChange}}
  @categoriesId={{this.categoriesId}}
  @categoriesLabel={{this.categoriesLabel}}
  @categoriesPlaceholder={{this.categoriesPlaceholder}}
  @searchLabel={{this.searchLabel}}
  @isSearchable={{true}}
  @requiredText={{this.requiredText}}
  @errorMessage={{this.errorMessage}}
/>`);

    // then
    assert.dom(screen.getByText(this.errorMessage)).exists();
  });
});
