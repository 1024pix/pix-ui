import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click } from '@ember/test-helpers';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | PixFilterableAndSearchableSelect', function (hooks) {
  setupRenderingTest(hooks);

  this.selectOptions = [
    { value: '1', label: 'Salade', category: 'Kebab' },
    { value: '2', label: 'Tomate', category: 'Hamburger' },
  ];

  this.selectLabel = 'select Label';
  this.selectPlaceholder = 'selectPlaceholder';
  this.selectOnChange = 'selectOnChange';
  this.multiSelectId = 'filter id';
  this.multiSelectLabel = 'filterLabel';
  this.multiSelectPlaceholder = 'filter Placeholder';

  test('it displays the options from the filter', async function (assert) {
    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @selectPlaceholder={{this.selectPlaceholder}}
      @selectOptions={{this.selectOptions}}
      @selectOnChange={{this.selectOnChange}}
      @multiSelectId={{this.multiSelectId}}
      @multiSelectLabel={{this.multiSelectLabel}}
      @multiSelectPlaceholder={{this.multiSelectPlaceholder}}
    />
  `);

    await click(screen.getByText(this.multiSelectPlaceholder));
    await screen.findByRole('menu');
    const items = await screen.queryAllByRole('menuitem');

    const categories = items.map((item) => {
      return item.innerText;
    });

    // then
    assert.deepEqual(categories, ['Kebab', 'Hamburger']);
  });

  test('it displays once each option', async function (assert) {
    this.selectOptions = [
      { value: '1', label: 'Salade', category: 'Kebab' },
      { value: '2', label: 'Oignon', category: 'Kebab' },
    ];

    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @selectPlaceholder={{this.selectPlaceholder}}
      @selectOptions={{this.selectOptions}}
      @selectOnChange={{this.selectOnChange}}
      @multiSelectId={{this.multiSelectId}}
      @multiSelectLabel={{this.multiSelectLabel}}
      @multiSelectPlaceholder={{this.multiSelectPlaceholder}}
    />
  `);

    await click(screen.getByText(this.multiSelectPlaceholder));
    await screen.findByRole('menu');

    const items = await screen.queryAllByRole('menuitem');

    const categories = items.map((item) => {
      return item.innerText;
    });

    // then
    assert.deepEqual(categories, ['Kebab']);
  });

  test.skip('it renders PixFilterableAndSearchableSelect', async function (assert) {
    // given & when
    const screen = await render(hbs`
    <PixFilterableAndSearchableSelect
      @selectLabel={{this.selectLabel}}
      @selectPlaceholder={{this.selectPlaceholder}}
      @selectOptions={{this.selectOptions}}
      @selectOnChange={{this.selectOnChange}}
      @multiSelectId={{this.multiSelectId}}
      @multiSelectLabel={{this.multiSelectLabel}}
      @multiSelectPlaceholder={{this.multiSelectPlaceholder}}
    />
  `);

    await click(screen.getByText(this.multiSelectPlaceholder));
    await click(screen.getByLabelText('Kebab'));
    await click(screen.getByRole('button', { name: this.selectLabel }));

    // then
    assert.dom(screen.getByText('Salade')).exists();
    assert.equal(screen.queryByText('Tomate'), null);
  });
});
