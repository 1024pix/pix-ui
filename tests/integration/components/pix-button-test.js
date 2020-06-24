import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | PixButton', function(hooks) {
  setupRenderingTest(hooks);

  test('it should render button with @type attribute', async function(assert) {
    this.set('type', 'outlined')
    this.set('onClick', () => {})

    await render(hbs`<PixButton @type={{type}} @onClick={{onClick}} />`);

    const pixButtonElement = this.element.querySelector('.pix-button');
    assert.ok(pixButtonElement.classList.contains('pix-button--type-outlined'));
  });

  test('it should render button with @size attribute', async function(assert) {
    this.set('size', 'large')
    this.set('onClick', () => {})

    await render(hbs`<PixButton @size={{size}} @onClick={{onClick}} />`);

    const pixButtonElement = this.element.querySelector('.pix-button');
    assert.ok(pixButtonElement.classList.contains('pix-button--size-large'));
  });

  test('it should render button with @color attribute', async function(assert) {
    this.set('color', 'red')
    this.set('onClick', () => {})

    await render(hbs`<PixButton @color={{color}} @onClick={{onClick}} />`);

    const pixButtonElement = this.element.querySelector('.pix-button');
    assert.ok(pixButtonElement.classList.contains('pix-button--color-red'));
  });

  test('it should render button with @color attribute', async function(assert) {
    this.set('color', 'red')
    this.set('onClick', () => {})

    await render(hbs`<PixButton @color={{color}} @onClick={{onClick}} />`);

    const pixButtonElement = this.element.querySelector('.pix-button');
    assert.ok(pixButtonElement.classList.contains('pix-button--color-red'));
  });

  test('it should render button with @rounded attribute', async function(assert) {
    this.set('rounded', true)
    this.set('onClick', () => {})

    await render(hbs`<PixButton @rounded={{rounded}} @onClick={{onClick}} />`);

    const pixButtonElement = this.element.querySelector('.pix-button');
    assert.ok(pixButtonElement.classList.contains('pix-button--rounded'));
  });

  test('it should render button with multiples attributes', async function(assert) {
    this.set('type', 'outlined')
    this.set('rounded', true)
    this.set('color', 'red')
    this.set('size', 'large')
    this.set('onClick', () => {})

    await render(hbs`<PixButton @type={{type}} @color={{color}} @size={{size}} @rounded={{rounded}} @onClick={{onClick}} />`);

    const pixButtonElement = this.element.querySelector('.pix-button');
    assert.ok(pixButtonElement.classList.contains('pix-button--rounded'));
    assert.ok(pixButtonElement.classList.contains('pix-button--type-outlined'));
    assert.ok(pixButtonElement.classList.contains('pix-button--size-large'));
    assert.ok(pixButtonElement.classList.contains('pix-button--color-red'));
  });
});
