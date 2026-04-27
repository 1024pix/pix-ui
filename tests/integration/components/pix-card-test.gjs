import { render } from '@1024pix/ember-testing-library';
import PixCard from '@1024pix/pix-ui/components/pix-card';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | PixCard', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the title', async function (assert) {
    // when
    const screen = await render(<template><PixCard @title="Parcours Combiné IA" /></template>);

    // then
    assert.dom(screen.getByRole('heading', { level: 3 })).hasText('Parcours Combiné IA');
  });

  module('@variant', function (hooks) {
    let warnStub;

    hooks.beforeEach(function () {
      warnStub = sinon.stub(console, 'warn');
    });

    hooks.afterEach(function () {
      warnStub.restore();
    });

    test('it renders PixCard with primary variant', async function (assert) {
      // when
      await render(
        <template>
          <PixCard><:description>coucou</:description></PixCard>
        </template>,
      );
      const blockElement = this.element.querySelector('.pix-card-wrapper');

      // then
      assert.contains('coucou');
      assert.deepEqual(Array.from(blockElement.classList), [
        'pix-block',
        'pix-block--orga',
        'pix-card-wrapper',
      ]);
    });

    test('it should warn when variant is not supported', async function (assert) {
      // when
      await render(
        <template>
          <PixCard @variant="PIX APP"><:description>coucou</:description></PixCard>
        </template>,
      );

      // then
      assert.ok(
        warnStub.firstCall.calledWithExactly(
          'WARNING: PixCard: @variant "PIX APP" should be primary, admin, orga, certif',
        ),
      );
    });
  });

  module('when @subtitle is provided', function () {
    test('it renders the subtitle', async function (assert) {
      // when
      const screen = await render(
        <template><PixCard @title="Mon titre" @subtitle="Autres" /></template>,
      );

      // then
      assert.dom(screen.getByText('Autres')).exists();
    });
  });

  module('when @image is provided', function () {
    test('it renders the image', async function (assert) {
      // when
      const screen = await render(
        <template><PixCard @title="Mon titre" @image="https://example.com/image.svg" /></template>,
      );
      // then
      assert
        .dom(screen.getByRole('presentation', { hidden: true }))
        .hasAttribute('src', 'https://example.com/image.svg');
    });
  });

  module('when @image is not provided', function () {
    test('it does not render an image', async function (assert) {
      // when
      const screen = await render(<template><PixCard @title="Mon titre" /></template>);

      // then
      assert.dom(screen.queryByRole('img', { hidden: true })).doesNotExist();
    });
  });

  module('when the :tag named block is provided', function () {
    test('it renders the tag block', async function (assert) {
      // when
      const screen = await render(
        <template>
          <PixCard @title="Mon titre">
            <:tag>Parcours</:tag>
          </PixCard>
        </template>,
      );

      // then
      assert.dom(screen.getByText('Parcours')).exists();
    });
  });

  module('when the :description named block is provided', function () {
    test('it renders the description', async function (assert) {
      // when
      const screen = await render(
        <template>
          <PixCard @title="Mon titre">
            <:description>Lorem ipsum dolor sit amet.</:description>
          </PixCard>
        </template>,
      );

      // then
      assert.dom(screen.getByText('Lorem ipsum dolor sit amet.')).exists();
    });
  });

  module('when the :footer named block is provided', function () {
    test('it renders the footer', async function (assert) {
      // when
      const screen = await render(
        <template>
          <PixCard @title="Mon titre">
            <:footer>Informations complémentaires</:footer>
          </PixCard>
        </template>,
      );

      // then
      assert.dom(screen.getByText('Informations complémentaires')).exists();
    });
  });
});
