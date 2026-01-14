import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | pix-app-layout', function (hooks) {
  setupRenderingTest(hooks);
  ['orga', 'default', 'certif', 'admin', 'modulix'].forEach(function (variant) {
    test(`it add the correct className from ${variant}`, async function (assert) {
      // when
      this.variant = variant;
      await render(
        hbs`<PixAppLayout @variant={{this.variant}}><:main>Hello</:main></PixAppLayout>`,
      );
      // then
      assert.strictEqual(
        this.element.querySelector('.pix-app-layout').classList.value,
        `pix-app-layout pix-app-layout--${variant}`,
      );
    });
  });

  module('when variant is admin', function () {
    test(`should canNavigationBeShrunk from shrinkNavigationService set to true`, async function (assert) {
      // given
      const shrinkNavigationService = this.owner.lookup('service:shrinkNavigationService');

      // when
      this.variant = 'admin';
      await render(
        hbs`<PixAppLayout @variant={{this.variant}}><:main>Hello</:main></PixAppLayout>`,
      );

      // then
      assert.true(shrinkNavigationService.canNavigationBeShrunk);
    });
  });
});
