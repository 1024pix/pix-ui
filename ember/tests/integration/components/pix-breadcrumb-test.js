import { render, within } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | pix-breadcrumb', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.setupRouter();
  });

  test('it renders breadcrumb with correct links', async function (assert) {
    // given
    const links = [
      {
        route: 'hello',
        label: 'Une poule sur un mur',
      },
      {
        route: 'bye',
        label: 'Qui picote du pain dur',
        model: 'bye',
      },
      {
        route: null,
        label: 'Picoti, picota',
      },
    ];

    this.set('links', links);

    // when
    const screen = await render(
      hbs`<PixBreadcrumb @links={{this.links}} aria-label='Breadcrumb' />`,
    );
    const breadcrumb = screen.getByRole('navigation', { name: 'Breadcrumb' });

    // then
    const firstCrumb = within(breadcrumb).getByRole('link', { name: 'Une poule sur un mur' });
    const secondCrumb = within(breadcrumb).getByRole('link', { name: 'Qui picote du pain dur' });
    assert.strictEqual(firstCrumb.getAttribute('href'), '/hello-world');
    assert.strictEqual(secondCrumb.getAttribute('href'), '/bye/bye');
    assert.ok(within(breadcrumb).getByRole('paragraph', { text: 'Picoti, picota' }));
  });
});
