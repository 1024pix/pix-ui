import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | input', function (hooks) {
  setupRenderingTest(hooks);

  const DEFAULT_OPTIONS = [
    { value: 'Figues', label: 'Figues' },
    { value: 'Bananes', label: 'Bananes' },
    { value: 'Noix', label: 'Noix' },
  ];

  module('default pix-input', () => {
    test('it renders', async function (assert) {
      // given / when
      await render(hbs`<PixInput />`);

      // then
      const inputElement = this.element.querySelector('input');
      assert.ok(inputElement);
    });

    test('it should trigger onChange function when an item is selected', async function (assert) {
      // given
      this.onChange = sinon.spy();

      // when
      await render(hbs`<PixInput onChange={{onChange}} />`);
      await fillIn('input', '2');

      // then
      assert.ok(this.onChange.calledOnce);
    });
  });

  module('with searchableOptions', () => {
    test('it should be binded datalist element', async function (assert) {
      // given
      this.searchableOptions = DEFAULT_OPTIONS;

      // when
      await render(hbs`<PixInput @searchableOptions={{searchableOptions}} />`);

      // then
      const input = this.element.querySelector('input');
      const datalist = this.element.querySelector('datalist');
      const inputDefaultListAttribute = input.attributes.getNamedItem('list').value;
      assert.equal(datalist.id, inputDefaultListAttribute);
    });

    test('it should be searchable with given options', async function (assert) {
      // given
      this.searchableOptions = DEFAULT_OPTIONS;

      // when
      await render(hbs`<PixInput @searchableOptions={{searchableOptions}} />`);

      // then
      const options = this.element.querySelectorAll('option');
      assert.equal(options.length, 3);
      assert.equal(options.item(1).label, 'Bananes');
    });

    test('it should be possible to select an option', async function (assert) {
      // given
      this.searchableOptions = DEFAULT_OPTIONS;

      // when
      await render(hbs`<PixInput @searchableOptions={{searchableOptions}} />`);
      await fillIn('input', 'Noix');

      // then
      const input = this.element.querySelector('input');
      console.log(input);
      assert.equal(input.value, 'Noix');
    });

    test('it should have a green border when a valid option is selected', async function (assert) {
      // given
      this.searchableOptions = DEFAULT_OPTIONS;

      // when
      await render(hbs`<PixInput @searchableOptions={{searchableOptions}} />`);
      await fillIn('input', 'noix');

      // then
      assert.dom('.pix-input__has-a-valid-option-as-value').exists();
    });
  });
});
