import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Pix Banner', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-banner';

  test('it renders the default PixBanner', async function(assert) {
    // when
    await render(hbs`
      <PixBanner>
        Mon texte
      </PixBanner>
    `);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(componentElement.textContent.trim(), 'Mon texte');
    assert.equal(componentElement.classList.toString().trim(), 'pix-banner pix-banner--information');
  });

  test('it renders the PixBanner with type warning', async function(assert) {
    // when
    await render(hbs`
      <PixBanner @type='warning'>
        Mon texte
      </PixBanner>
    `);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(componentElement.classList.toString().trim(), 'pix-banner pix-banner--warning');
  });

  test('it renders the PixBanner with type error', async function(assert) {
    // when
    await render(hbs`
      <PixBanner @type='error'>
        Mon texte
      </PixBanner>
    `);

    // then
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);
    assert.equal(componentElement.classList.toString().trim(), 'pix-banner pix-banner--error');
  });

  test('it renders the PixBanner with type communication', async function(assert) {
    // given

    this.set('type', 'communication');

    //when
    await render(hbs`
      <PixBanner @color={{this.color}} @type={{type}} />
    `);

    // then
    assert.dom('.pix-banner--communication').exists();
  });

  test('it renders the PixBanner with type communication-orga', async function(assert) {
    // given
  
    this.set('type', 'communication-orga');

    //when
    await render(hbs`
      <PixBanner @color={{this.color}} @type={{type}} />
    `);

    // then
    assert.dom('.pix-banner--communication-orga').exists();
  });

  test('it renders the PixBanner  with type communication-certif', async function(assert) {
    // given
  
    this.set('type', 'communication-certif');

    //when
    await render(hbs`
      <PixBanner @color={{this.color}} @type={{type}} />
    `);

    // then
    assert.dom('.pix-banner--communication-certif').exists();
  });

  test('it renders the PixBanner with external url', async function(assert) {
    // given
    this.set('actionUrl', 'www.test.fr/');
    this.set('actionLabel', 'Explorer');

    //when
    await render(hbs`
      <PixBanner @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />
    `);

    // then
    assert.equal(this.element.querySelector('a').textContent.trim(), 'Explorer');
    assert.equal(this.element.querySelector('a').getAttribute('href'), 'www.test.fr/');
  });

  test('it renders the PixBanner with internal link', async function(assert) {
    // given
  
    this.set('actionUrl', 'campaign.participants');
    this.set('actionLabel', 'Explorer');

    //when
    await render(hbs`
      <PixBanner @actionUrl={{this.actionUrl}} @actionLabel={{this.actionLabel}} />
    `);

    // then
    assert.equal(this.element.querySelector('a').textContent.trim(), 'Explorer');
  });
});
