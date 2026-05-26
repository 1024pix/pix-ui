import { render, within } from '@1024pix/ember-testing-library';
import PixModalHeader from '@1024pix/pix-ui/components/pix-modal-header';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | modal-header', function (hooks) {
  setupRenderingTest(hooks);

  module('variants', function () {
    module('when variant is not provided', function () {
      test('it should apply default gradient header', async function (assert) {
        // given
        const title = 'Modal with no variant';

        // when
        await render(<template><PixModalHeader @id="modal-title--1" @title={{title}} /></template>);

        // then
        const header = this.element.querySelector('.pix-modal-header');

        assert.dom(header).hasClass('pix-modal-header--default');
      });
    });

    module('when variant is "default"', function () {
      test('it should apply default style', async function (assert) {
        // given
        const title = 'Modal with "default" variant';

        // when
        await render(<template><PixModalHeader @title={{title}} @variant="default" /></template>);

        // then
        const header = this.element.querySelector('.pix-modal-header');

        assert.dom(header).hasClass('pix-modal-header--default');
      });
    });

    module('when variant is "orga"', function () {
      test('it should apply orga style', async function (assert) {
        // given
        const title = 'Modal with "orga" variant';

        // when
        await render(<template><PixModalHeader @title={{title}} @variant="orga" /></template>);

        // then
        const header = this.element.querySelector('.pix-modal-header');

        assert.dom(header).hasClass('pix-modal-header--orga');
      });
    });

    module('when variant is "certif"', function () {
      test('it should apply certif style', async function (assert) {
        // given
        const title = 'Modal with "certif" variant';

        // when
        await render(<template><PixModalHeader @title={{title}} @variant="certif" /></template>);

        // then
        const header = this.element.querySelector('.pix-modal-header');

        assert.dom(header).hasClass('pix-modal-header--certif');
      });
    });
  });

  module('when @iconName is provided', function () {
    test('it should render icon in header', async function (assert) {
      // when
      await render(<template><PixModalHeader @title="Titre" @iconName="lightBulb" /></template>);

      // then
      const headerTitleSection = this.element.querySelector('.pix-modal-header__title-section');

      const icon = within(headerTitleSection).getByRole('img', { hidden: true });

      assert.true(icon.innerHTML.includes('lightBulb'));
    });
  });

  module('when @iconName is not provided', function () {
    test('it should not render icon', async function (assert) {
      // when
      await render(<template><PixModalHeader @title="Titre" /></template>);

      // then
      const headerTitleSection = this.element.querySelector('.pix-modal-header__title-section');

      const icon = within(headerTitleSection).queryByRole('img', { hidden: true });

      assert.dom(icon).doesNotExist();
    });
  });

  module('when @subtitle is provided', function () {
    test('it should render subtitle in header', async function (assert) {
      // when
      await render(<template><PixModalHeader @title="Titre" @subtitle="Sous titre" /></template>);

      // then
      const headerTitleSection = this.element.querySelector('.pix-modal-header__title-section');

      const subtitle = within(headerTitleSection).getByText('Sous titre');

      assert.dom(subtitle).exists();
    });
  });

  module('when @subtitle is not provided', function () {
    test('it should not render subtitle', async function (assert) {
      // when
      await render(<template><PixModalHeader @title="Titre" /></template>);

      // then
      const subtitleElement = this.element.querySelector('.pix-modal-headersubtitle');

      assert.dom(subtitleElement).doesNotExist();
    });
  });
});
