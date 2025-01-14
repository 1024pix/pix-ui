import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | pix-app-layout', function (hooks) {
  setupRenderingTest(hooks);
  ['orga', 'primary', 'certif'].forEach(function (variant) {
    test(`it add the correct className from ${variant}`, async function (assert) {
      // when
      this.variant = variant;
      const screen = await render(
        hbs`<PixAppLayout @variant={{this.variant}}><:main>Hello</:main></PixAppLayout>`,
      );
      // then
      assert.strictEqual(
        screen.getByText(/Hello/).getAttribute('class'),
        `pix-app-layout pix-app-layout--${variant}`,
      );
    });
  });
});
