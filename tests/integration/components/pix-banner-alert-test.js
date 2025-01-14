import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | PixBannerAlert', function (hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-banner-alert';

  test('it renders the default PixBannerAlert', async function (assert) {
    // when
    await render(hbs`<PixBannerAlert>
  Mon texte
</PixBannerAlert>`);

    // then
    assert.contains('Mon texte');
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(
      componentElement.classList.toString().trim(),
      'pix-banner-alert pix-banner-alert--information',
    );
  });

  test('it renders the PixBannerAlert with type warning', async function (assert) {
    // when
    await render(hbs`<PixBannerAlert @type='warning'>
  Mon texte
</PixBannerAlert>`);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(
      componentElement.classList.toString().trim(),
      'pix-banner-alert pix-banner-alert--warning',
    );
  });

  test('it renders the PixBannerAlert with type error', async function (assert) {
    // when
    await render(hbs`<PixBannerAlert @type='error'>
  Mon texte
</PixBannerAlert>`);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(
      componentElement.classList.toString().trim(),
      'pix-banner-alert pix-banner-alert--error',
    );
  });

  test('it renders the PixBannerAlert with external url', async function (assert) {
    // given
    this.set('actionUrl', 'www.test.fr/');
    this.set('actionLabel', 'Explorer');

    //when
    await render(
      hbs`<PixBannerAlert @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />`,
    );

    // then
    assert.contains('Explorer');
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line qunit/no-assert-equal
    assert.equal(this.element.querySelector('a').getAttribute('href'), 'www.test.fr/');
  });

  test('it renders the PixBannerAlert with internal link', async function (assert) {
    // given

    this.set('actionUrl', 'campaign.participants');
    this.set('actionLabel', 'Explorer');

    //when
    await render(
      hbs`<PixBannerAlert @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />`,
    );

    // then
    assert.contains('Explorer');
  });
  test('it renders the PixBannerAlert with close icon', async function (assert) {
    // given
    this.set('canCloseBanner', true);

    //when
    const screen =
      await render(hbs`<PixBannerAlert @type='warning' @canCloseBanner={{this.canCloseBanner}}>
  Mon texte
</PixBannerAlert>`);

    // then
    await click(screen.getByRole('button', { name: /Fermer/ }));
    assert.notOk(screen.queryByText('Mon texte'));
  });
});
