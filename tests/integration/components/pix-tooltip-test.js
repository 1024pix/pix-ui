import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-tooltip', function(hooks) {
  setupRenderingTest(hooks);

  const TOOLTIP_SELECTOR = '.pix-tooltip span';

  test('it renders the default tooltip', async function(assert) {
    // when
    await render(hbs`
      <PixTooltip>
        template block text
      </PixTooltip>
    `);
    const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

    // then
    assert.equal(this.element.textContent.trim(), 'template block text');
    assert.equal(tooltipContentElement.classList.toString().trim(), 'pix-tooltip__content pix-tooltip__content--top');
  });

  test('it renders the tooltip text', async function(assert) {
    // given
    const text = 'Un text à afficher au survol du contenu de la tooltip';
    this.set('text', text);

    // when
    await render(hbs`
      <PixTooltip @text={{this.text}}>
        template block text
      </PixTooltip>
    `);
    const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

    // then
    assert.equal(tooltipContentElement.innerHTML.trim(), text);
  });

  module('tooltip position', function() {

    const TOOLTIP_POSITION_SELECTOR = 'pix-tooltip__content--';

    [
      'top',
      'right',
      'left',
      'bottom',
    ].forEach(function(position) {
      test(`it can reder ${position}`, async function(assert) {
        // given
        this.set('position', position);

        // when
        await render(hbs`
          <PixTooltip @position={{this.position}}>
          </PixTooltip>
        `);
        const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

        // then
        assert.ok(tooltipContentElement.classList.toString().includes(TOOLTIP_POSITION_SELECTOR+position));
      });
    });
  });

  module('tooltip display', function() {

    const NO_WRAP_CLASS = 'pix-tooltip__content--no-wrap';

    test('it can render in multiple lines', async function(assert) {
      // when
      await render(hbs`
        <PixTooltip>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();

      // then
      assert.equal(tooltipContentClasses.includes(NO_WRAP_CLASS), false);
    });

    test('it can render inline', async function(assert) {
      // when
      await render(hbs`
        <PixTooltip @inline={{true}}>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

      // then
      assert.ok(tooltipContentElement.classList.toString().includes(NO_WRAP_CLASS));
    });
  });
});
