import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillByLabel } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | search-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixSearchInput with given id and label', async function (assert) {
    // given
    this.set('triggerFiltering', sinon.stub());

    // when
    const screen = await render(hbs`<PixSearchInput
  @id={{123}}
  @label='Mon super input qui filtre'
  @debounceTimeInMs='1000'
  @triggerFiltering={{this.triggerFiltering}}
/>`);

    // then
    const inputFound = screen.getByLabelText('Mon super input qui filtre');
    assert.dom(inputFound).exists();
    assert.strictEqual(inputFound.id, '123');
  });

  test('it triggers the filter when a text is searched', async function (assert) {
    // given
    const triggerFiltering = sinon.stub().resolves();
    this.set('triggerFiltering', triggerFiltering);

    // when
    await render(hbs`<PixSearchInput
  @id={{123}}
  @label='Champ de recherche de fruits'
  @debounceTimeInMs='0'
  @triggerFiltering={{this.triggerFiltering}}
/>`);
    await fillByLabel('Champ de recherche de fruits', 'Mangue');

    // then
    assert.ok(triggerFiltering.calledWith(123, 'Mangue'));
  });

  test("doesn't update value when input value is udpated", async function (assert) {
    // given
    this.set('triggerFiltering', sinon.stub());
    this.set('dynamicValue', 'init');
    const screen = await render(hbs`<PixSearchInput
  @id={{123}}
  @label='Champ de recherche de fruits'
  @debounceTimeInMs='0'
  @triggerFiltering={{this.triggerFiltering}}
  @value={{this.dynamicValue}}
/>`);

    // when
    await fillByLabel('Champ de recherche de fruits', 'Mangue');
    this.set('dynamicValue', 'dynamicValue');

    // then
    const inputFound = screen.getByLabelText('Champ de recherche de fruits');
    assert.dom(inputFound).exists();
    assert.strictEqual(inputFound.value, 'Mangue');
  });
});
