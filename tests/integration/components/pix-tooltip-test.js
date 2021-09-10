import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pix-tooltip', function(hooks) {
  setupRenderingTest(hooks);

  const TOOLTIP_SELECTOR = '.pix-tooltip span';
  const text = 'Un text à afficher au survol du contenu de la tooltip';

  test('it renders the tooltip text', async function(assert) {
    // given
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

  test('it renders only the inner data if there is no tooltip text', async function(assert) {
    // when
    await render(hbs`
      <PixTooltip>
        template block text
      </PixTooltip>
    `);
    const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

    // then
    assert.equal(this.element.textContent.trim(), 'template block text');
    assert.notOk(tooltipContentElement);
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
        this.set('text', text);
        this.set('position', position);

        // when
        await render(hbs`
          <PixTooltip @position={{this.position}} @text={{this.text}}></PixTooltip>
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
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip @text={{this.text}}>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();

      // then
      assert.equal(tooltipContentClasses.includes(LIGHT_CLASS), false);
    });

    test('it can render in light mode', async function(assert) {
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip @isLight={{true}} @text={{this.text}}>
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
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip @text={{this.text}}>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();

      // then
      assert.equal(tooltipContentClasses.includes(INLINE_CLASS), false);
    });

    test('it can render inline', async function(assert) {
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip @isInline={{true}} @text={{this.text}}>
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
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip @text={{this.text}}>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();

      // then
      assert.equal(tooltipContentClasses.includes(WIDE_CLASS), false);
    });

    test('it can render widely', async function(assert) {
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip @isWide={{true}} @text={{this.text}}>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

      // then
      assert.ok(tooltipContentElement.classList.toString().includes(WIDE_CLASS));
    });
  });

  module('tooltip unescape html', function() {
    const htmlText = '<b>Tooltip</b>'

    test('it renders escaped html', async function(assert) {
      // given
      this.set('text', htmlText);

      // when
      await render(hbs`
        <PixTooltip @text={{this.text}} @unescapeHtml={{false}}></PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

      // then
      const displayedText = decodeURI(tooltipContentElement.innerHTML.trim());
      assert.equal(displayedText, "&lt;b&gt;Tooltip&lt;/b&gt;");
    });

    test('it renders unescaped html', async function(assert) {
      // given
      this.set('text', htmlText);

      // when
      await render(hbs`
        <PixTooltip @text={{this.text}} @unescapeHtml={{true}}></PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);

      // then
      const displayedText = decodeURI(tooltipContentElement.innerHTML.trim());
      assert.equal(displayedText, "<b>Tooltip</b>");
    });
  });
});
