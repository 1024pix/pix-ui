import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
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

  test('it renders the PixSelect with default value selected', async function (assert) {
    // given
    this.onChange = DEFAULT_ON_CHANGE;

    // when
    await render(hbs`
      <PixSelect
        @options={{this.options}}
        @onChange={{this.onChange}}
        @selectedOption="2"
      />
    `);

    // then
    const options = this.element.querySelectorAll('option');
    assert.true(options.item(1).selected);
    assert.false(options.item(0).selected);
    assert.false(options.item(2).selected);
  });

  test('it should trigger onChange function when an item is selected', async function (assert) {
    // given
    this.onChange = sinon.spy();

    await render(hbs`
      <PixSelect
        @id="an-id"
        @options={{this.options}}
        @onChange={{this.onChange}}
        @label="Mon select"
      />
    `);

    // when
    await fillInByLabel('Mon select', '2');

    // then
    assert.ok(this.onChange.calledOnce, 'the callback should be called once');
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
});
