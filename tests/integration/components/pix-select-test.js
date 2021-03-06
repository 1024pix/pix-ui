import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | select', function (hooks) {
  setupRenderingTest(hooks);

  const DEFAULT_OPTIONS = [
    { value: '1', label: 'Salade' },
    { value: '2', label: 'Tomate' },
    { value: '3', label: 'Oignon' },
  ]
  const DEFAULT_ON_CHANGE = () => {};
  const SEARCHABLE_SELECT_SELECTOR = '.pix-select input';

  test('it renders the PixSelect with given options', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.onChange = DEFAULT_ON_CHANGE;

    // when
    await render(hbs`
      <PixSelect
        @options={{options}}
        @onChange={{onChange}}
      />
    `);

    // then
    const options = this.element.querySelectorAll('option');
    assert.equal(options.length, 3);
    assert.equal(options.item(0).value, '1');
    assert.equal(options.item(0).text, 'Salade');
  });

  test('it renders the PixSelect with empty label option', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.onChange = DEFAULT_ON_CHANGE;

    // when
    await render(hbs`
      <PixSelect
        @options={{options}}
        @onChange={{onChange}}
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
    this.options = DEFAULT_OPTIONS;
    this.onChange = DEFAULT_ON_CHANGE;

    // when
    await render(hbs`
      <PixSelect
        @options={{options}}
        @onChange={{onChange}}
        @selectedOption="2"
      />
    `);

    // then
    const options = this.element.querySelectorAll('option');
    assert.equal(options.item(1).defaultSelected, true);
  });

  test('it should trigger onChange function when an item is selected', async function (assert) {
    // given
    this.options = DEFAULT_OPTIONS;
    this.onChange = sinon.spy();
  
    await render(hbs`
      <PixSelect
        @options={{options}}
        @onChange={{onChange}}
      />
    `);

    // when
    await fillIn('select', '2')

    // then
    assert.ok(this.onChange.calledOnce, "the callback should be called once");
  });

  module('searchable PixSelect', function() {
    test('it should be binded datalist element', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.isSearchable = true;

      // when
      await render(hbs`<PixSelect @options={{options}} @isSearchable={{isSearchable}} />`);

      // then
      const input = this.element.querySelector(SEARCHABLE_SELECT_SELECTOR);
      const datalist = this.element.querySelector('datalist');
      const inputDefaultListAttribute = input.attributes.getNamedItem('list').value;
      assert.equal(datalist.id, inputDefaultListAttribute);
    });

    test('it should be searchable with given options', async function (assert) {
      // given
      this.options = DEFAULT_OPTIONS;
      this.isSearchable = true;

      // when
      await render(hbs`<PixSelect @options={{options}} @isSearchable={{isSearchable}} />`);

      // then
      const options = this.element.querySelectorAll('option');
      assert.equal(options.length, 3);
      assert.equal(options.item(1).label, 'Tomate');
    });

    module('green validation', function () {

      test('it should not have a green border', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;
        this.isSearchable = true;
  
        // when
        await render(hbs`<PixSelect @options={{options}} @isSearchable={{isSearchable}} />`);
        await fillIn(SEARCHABLE_SELECT_SELECTOR, 'tomate');
  
        // then
        assert.dom('.pix-select--is-valid').doesNotExist();
      });

      test('it should have a green border when a valid option is selected and isGreenValidationActive argument is given', async function (assert) {
        // given
        this.options = DEFAULT_OPTIONS;
        this.isSearchable = true;
        this.isValidationActive = true;

        // when
        await render(hbs`
          <PixSelect
            @options={{options}}
            @isSearchable={{isSearchable}}
            @isValidationActive={{isValidationActive}}
          />`);
        await fillIn(SEARCHABLE_SELECT_SELECTOR, 'tomate');
  
        // then
        assert.dom('.pix-select--is-valid').exists();
      });
    });

  });
});
