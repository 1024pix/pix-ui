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
      'top-left',
      'top-right',
      'right',
      'left',
      'bottom',
      'bottom-left',
      'bottom-right',
    ].forEach(function(position) {
      test(`it can render ${position}`, async function(assert) {
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

  module('tooltip light display', function() {

    const LIGHT_CLASS = 'pix-tooltip__content--light';

    test('it can render in dark mode', async function(assert) {
      // when
      await render(hbs`
        <PixTooltip>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();

      // then
      assert.equal(tooltipContentClasses.includes(LIGHT_CLASS), false);
    });

    test('it can render in light mode', async function(assert) {
      // when
      await render(hbs`
        <PixTooltip @isLight={{true}}>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

      // then
      assert.ok(tooltipContentElement.classList.toString().includes(LIGHT_CLASS));
    });
  });

  module('tooltip inline display', function() {

    const INLINE_CLASS = 'pix-tooltip__content--inline';

    test('it can render in multiple lines', async function(assert) {
      // when
      await render(hbs`
        <PixTooltip>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();

      // then
      assert.equal(tooltipContentClasses.includes(INLINE_CLASS), false);
    });

    test('it can render inline', async function(assert) {
      // when
      await render(hbs`
        <PixTooltip @isInline={{true}}>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

      // then
      assert.ok(tooltipContentElement.classList.toString().includes(INLINE_CLASS));
    });
  });

  module('tooltip wide display', function() {

    const WIDE_CLASS = 'pix-tooltip__content--wide';

    test('it can render not widely', async function(assert) {
      // when
      await render(hbs`
        <PixTooltip>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();

      // then
      assert.equal(tooltipContentClasses.includes(WIDE_CLASS), false);
    });

    test('it can render widely', async function(assert) {
      // when
      await render(hbs`
        <PixTooltip @isWide={{true}}>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

      // then
      assert.ok(tooltipContentElement.classList.toString().includes(WIDE_CLASS));
    });
  });
});
