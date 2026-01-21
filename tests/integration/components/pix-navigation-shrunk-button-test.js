import { render, within } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | pix-navigation-shrunk-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an EmberJS link', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixNavigationShrunkButton @route='hello'>Je suis dans un tooltip !</PixNavigationShrunkButton>`,
    );

    // then
    const link = screen.getByRole('link');
    assert.strictEqual(link.getAttribute('href'), '/hello-world');
  });

  test('it renders an icon', async function (assert) {
    // when
    const screen = await render(
      hbs`<PixNavigationShrunkButton @route='hello' @icon='power'>Je suis dans un tooltip !</PixNavigationShrunkButton>`,
    );

    // then
    const link = screen.getByRole('link');
    assert.ok(within(link).getByRole('img', { hidden: true }));
  });
});
