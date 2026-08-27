import { fillByLabel, render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | PixSearchInput', function (hooks) {
  setupRenderingTest(hooks);
  let clock;

  hooks.beforeEach(function () {
    clock = sinon.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
  });

  hooks.afterEach(function () {
    clock.restore();
  });

  test('it renders the default PixSearchInput with given id and label', async function (assert) {
    // given
    this.set('triggerFiltering', sinon.stub());

    // when
    const screen = await render(hbs`<PixSearchInput
  @id='pix-123'
  @debounceTimeInMs='1000'
  @triggerFiltering={{this.triggerFiltering}}
><:label>Mon super input qui filtre</:label></PixSearchInput>`);

    // then
    const inputFound = screen.getByLabelText('Mon super input qui filtre');
    assert.dom(inputFound).exists();
    assert.strictEqual(inputFound.id, 'pix-123');
  });

  test('it triggers the filter when a text is searched', async function (assert) {
    // given
    const triggerFiltering = sinon.stub().resolves();
    this.set('triggerFiltering', triggerFiltering);

    // when
    await render(hbs`<PixSearchInput
  @id='pix-123'
  @debounceTimeInMs='0'
  @triggerFiltering={{this.triggerFiltering}}
><:label>Champ de recherche de fruits</:label></PixSearchInput>`);

    await fillByLabel('Champ de recherche de fruits', 'Mangue');
    clock.tick(0);

    // then
    assert.ok(triggerFiltering.calledWith('pix-123', 'Mangue'));
  });

  test('it does not call triggerFiltering until debounce time is elapsed', async function (assert) {
    // given
    const triggerFiltering = sinon.stub().resolves();
    this.set('triggerFiltering', triggerFiltering);

    // when
    await render(hbs`<PixSearchInput
  @id='pix-123'
  @debounceTimeInMs='200'
  @triggerFiltering={{this.triggerFiltering}}
><:label>Champ de recherche de fruits</:label></PixSearchInput>`);

    await fillByLabel('Champ de recherche de fruits', 'Man');
    clock.tick(150);
    // then
    assert.ok(triggerFiltering.notCalled);

    // when
    await fillByLabel('Champ de recherche de fruits', 'gue');
    clock.tick(150);
    // then
    assert.ok(triggerFiltering.notCalled);

    // when
    clock.tick(50);
    // then
    assert.ok(triggerFiltering.calledOnce);
  });

  test("doesn't update value when input value is udpated", async function (assert) {
    // given
    this.set('triggerFiltering', sinon.stub());
    this.set('dynamicValue', 'init');
    const screen = await render(hbs`<PixSearchInput
  @id='pix-123'
  @debounceTimeInMs='0'
  @triggerFiltering={{this.triggerFiltering}}
  @value={{this.dynamicValue}}
><:label>Champ de recherche de fruits</:label></PixSearchInput>`);

    // when
    await fillByLabel('Champ de recherche de fruits', 'Mangue');
    this.set('dynamicValue', 'dynamicValue');

    // then
    const inputFound = screen.getByLabelText('Champ de recherche de fruits');
    assert.dom(inputFound).exists();
    assert.strictEqual(inputFound.value, 'Mangue');
  });
});
