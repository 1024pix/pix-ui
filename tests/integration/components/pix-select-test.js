import { module, test } from 'qunit';
import { click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByName } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import fillInByLabel from '../../helpers/fill-in-by-label';

module('Integration | Component | select', function (hooks) {
  setupRenderingTest(hooks);

  this.options = [
    { value: '1', label: 'Salade' },
    { value: '2', label: 'Tomate' },
    { value: '3', label: 'Oignon' },
  ];
  const DEFAULT_ON_CHANGE = () => {};
  const SEARCHABLE_SELECT_SELECTOR = '.pix-select input';

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

  test('it renders the PixSelect with empty label option', async function (assert) {
    // given
    this.onChange = DEFAULT_ON_CHANGE;

    // when
    await render(hbs`
      <PixSelect
        @options={{this.options}}
        @onChange={{this.onChange}}
        @emptyOptionLabel="Empty label"
      />
    `);

    // then
    const options = this.element.querySelectorAll('option');
    assert.equal(options.length, 4);
    assert.equal(options.item(0).value, '');
    assert.equal(options.item(0).text, 'Empty label');
  });

  module('searchable PixSelect', function () {
    test('it should be binded datalist element', async function (assert) {
      // given
      this.isSearchable = true;

      // when
      await render(
        hbs`<PixSelect @options={{this.options}} @isSearchable={{this.isSearchable}} />`
      );

      // then
      const input = this.element.querySelector(SEARCHABLE_SELECT_SELECTOR);
      const datalist = this.element.querySelector('datalist');
      const inputDefaultListAttribute = input.attributes.getNamedItem('list').value;
      assert.equal(datalist.id, inputDefaultListAttribute);
    });

    test('it should be searchable with given options', async function (assert) {
      // given
      this.isSearchable = true;

      // when
      await render(
        hbs`<PixSelect @options={{this.options}} @isSearchable={{this.isSearchable}} />`
      );

      // then
      const options = this.element.querySelectorAll('option');
      assert.equal(options.length, 3);
      assert.equal(options.item(1).label, 'Tomate');
    });

    test('it should keep autocomplete off even if pix select receive the "auto-complete=on" attribute', async function (assert) {
      // given
      this.isSearchable = true;

      // when
      await render(
        hbs`<PixSelect @options={{this.options}} @isSearchable={{this.isSearchable}} autocomplete="on"/>`
      );

      // then
      const input = this.element.querySelector(SEARCHABLE_SELECT_SELECTOR);
      assert.equal(input.autocomplete, 'off');
    });

    module('green validation', function () {
      test('it should not have a green border', async function (assert) {
        // given
        this.isSearchable = true;

        // when
        await render(hbs`<PixSelect
          @id="an-id"
          @options={{this.options}}
          @isSearchable={{this.isSearchable}}
          @label="Mon select"
        />`);
        await fillInByLabel('Mon select', 'tomate');

        // then
        assert.dom('.pix-select--is-valid').doesNotExist();
      });

      test('it should have a green border when a valid option is selected and isGreenValidationActive argument is given', async function (assert) {
        // given
        this.isSearchable = true;
        this.isValidationActive = true;

        // when
        await render(hbs`
          <PixSelect
            @options={{this.options}}
            @isSearchable={{this.isSearchable}}
            @isValidationActive={{this.isValidationActive}}
            @id="select-id"
            @label="Mon select"
          />`);
        await fillInByLabel('Mon select', 'tomate');

        // then
        assert.dom('.pix-select--is-valid').exists();
      });
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
