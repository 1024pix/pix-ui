import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | icon-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it should trigger action if given one', async function (assert) {
    // when
    this.set('count', 1);
    this.set('triggerAction', () => {
      this.count = this.count + 1;
    });
    const screen = await render(
      hbs`<PixIconButton
  @triggerAction={{this.triggerAction}}
  @ariaLabel='action du bouton'
  @iconName='add'
/>`,
    );
    await click(screen.getByRole('button', { name: 'action du bouton' }));

    // then
    assert.strictEqual(this.count, 2);
  });

  test('it renders PixIconButton with disabled attribute', async function (assert) {
    // given
    this.set('triggerAction', () => {});

    //when
    const screen = await render(
      hbs`<PixIconButton
  @triggerAction={{this.triggerAction}}
  @iconName='add'
  disabled={{true}}
  @ariaLabel='action du bouton'
/>`,
    );

    // then
    assert.dom(screen.getByRole('button', { name: 'action du bouton' })).isDisabled();
  });

  module('When the attribute isDisabled is set to true', function () {
    test('it should display the button as disabled and prevent triggerAction', async function (assert) {
      // given
      this.set('count', 1);
      this.set('triggerAction', () => {
        this.count = this.count + 1;
      });

      // when
      const screen = await render(
        hbs`<PixIconButton
  @isDisabled={{true}}
  @triggerAction={{this.triggerAction}}
  @ariaLabel='action du bouton'
/>`,
      );

      const iconButton = screen.getByRole('button', {
        name: 'action du bouton',
      });

      // then
      await click(iconButton);
      assert.dom(iconButton).hasAria('disabled', 'true');
      assert.strictEqual(this.count, 1);
    });
  });

  module('when no variant is given', function () {
    test('it renders PixIconButton with the default design', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixIconButton @iconName='add' @ariaLabel='action du bouton' />`,
      );

      // then
      const pixIconButton = screen.getByRole('button', { name: 'action du bouton' });
      assert.dom(pixIconButton).doesNotHaveClass('pix-icon-button--secondary');
    });
  });

  module('when variant is secondary', function () {
    test('it renders PixIconButton with the secondary variant class', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixIconButton @iconName='add' @ariaLabel='action du bouton' @variant='secondary' />`,
      );

      // then
      const pixIconButton = screen.getByRole('button', { name: 'action du bouton' });
      assert.dom(pixIconButton).hasClass('pix-icon-button--secondary');
    });
  });
});
