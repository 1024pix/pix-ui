import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render } from '@1024pix/ember-testing-library';

module('Integration | Component | PixLabel', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders PixLabel with for and content', async function (assert) {
    // given
    const label = 'Bonjour Pix !';
    this.set('label', label);

    // when
    const screen = await render(
      hbs`<PixLabel @for='linkableElement'>{{this.label}}</PixLabel><input id='linkableElement' />`,
    );

    // then
    assert.ok(screen.getByLabelText(label));
  });

  test('it renders PixLabel with additional information', async function (assert) {
    // given
    const label = 'Bonjour Pix !';
    this.set('label', label);
    const subLabel = 'some explaination';
    this.set('subLabel', subLabel);

    // when
    const screen = await render(
      hbs`<PixLabel @for='linkableElement' @subLabel={{this.subLabel}}>{{this.label}}</PixLabel><input
  id='linkableElement'
/>`,
    );

    // then
    assert.ok(screen.getByLabelText([label, subLabel].join(' ')));
  });

  test('it renders PixLabel with requiredLabel', async function (assert) {
    // given
    const label = 'Bonjour Pix !';
    this.set('label', label);
    this.set('requiredLabel', 'this field is required');

    // when
    const screen = await render(
      hbs`<PixLabel
  @for='linkableElement'
  @requiredLabel={{this.requiredLabel}}
>{{this.label}}</PixLabel><input id='linkableElement' />`,
    );

    // then
    assert.ok(screen.getByLabelText(['*', label].join(' ')));
  });

  test('it still accessible when hidden label', async function (assert) {
    // given
    const label = 'Bonjour Pix !';
    this.set('label', label);

    // when
    const screen = await render(
      hbs`<PixLabel @for='linkableElement' @screenReaderOnly={{true}}>{{this.label}}</PixLabel><input
  id='linkableElement'
/>`,
    );

    // then
    assert.ok(screen.getByLabelText(label));
  });
});
