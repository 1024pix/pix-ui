import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import userEvent from '@testing-library/user-event';

module('Integration | Component | pix-tooltip', function (hooks) {
  setupRenderingTest(hooks);

  const TOOLTIP_SELECTOR = '.pix-tooltip__content';
  const text = 'Un texte à afficher au survol du contenu de la tooltip';

  test('it renders the tooltip text', async function (assert) {
    // given
    this.set('text', text);

    // when
    await render(hbs`
      <PixTooltip>
        <:triggerElement>
          template block text
        </:triggerElement>

        <:tooltip>
          {{this.text}}
        </:tooltip>
      </PixTooltip>
    `);

    // then
    assert.contains(text);
  });

  test('it renders only the inner data if there is no tooltip text', async function (assert) {
    // when
    await render(hbs`
      <PixTooltip>
        <:triggerElement>
          template block text
        </:triggerElement>
      </PixTooltip>
    `);

    // then
    const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
    assert.contains('template block text');
    assert.notOk(tooltipContentElement);
  });

  test('it renders only the inner data if hide is true', async function (assert) {
    // when
    await render(hbs`
      <PixTooltip @hide={{true}}>
        <:triggerElement>
          template block text
        </:triggerElement>
        <:tooltip></:tooltip>
      </PixTooltip>
    `);

    // then
    const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
    assert.contains('template block text');
    assert.notOk(tooltipContentElement);
  });

  test('it dismissed tooltip on escape keyup', async function (assert) {
    // given
    const screen = await render(hbs`
      <PixTooltip>
        <:triggerElement>
          template block text
        </:triggerElement>
        <:tooltip></:tooltip>
      </PixTooltip>
    `);

    // when
    await screen.getByText('template block text').focus();

    await userEvent.keyboard('[Escape]');

    // then
    assert.contains('template block text');
    assert.dom('.pix-tooltip__content').isNotVisible();
  });

  module('tooltip position', function () {
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
    ].forEach(function (position) {
      test(`it can render ${position}`, async function (assert) {
        // given
        this.set('text', text);
        this.set('position', position);

        // when
        await render(hbs`
          <PixTooltip @position={{this.position}}>
            <:tooltip>
              {{this.text}}
            </:tooltip>
          </PixTooltip>
        `);

        // then
        const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
        assert.ok(
          tooltipContentElement.classList.toString().includes(TOOLTIP_POSITION_SELECTOR + position)
        );
      });
    });
  });

  module('tooltip light display', function () {
    const LIGHT_CLASS = 'pix-tooltip__content--light';

    test('it can render in dark mode', async function (assert) {
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
      `);

      // then
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();
      assert.false(tooltipContentClasses.includes(LIGHT_CLASS));
    });

    test('it can render in light mode', async function (assert) {
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip @isLight={{true}}>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
      `);

      // then
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      assert.ok(tooltipContentElement.classList.toString().includes(LIGHT_CLASS));
    });
  });

  module('tooltip inline display', function () {
    const INLINE_CLASS = 'pix-tooltip__content--inline';

    test('it can render in multiple lines', async function (assert) {
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
      `);
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();

      // then
      assert.false(tooltipContentClasses.includes(INLINE_CLASS));
    });

    test('it can render inline', async function (assert) {
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip @isInline={{true}}>
          <:tooltip>
           {{this.text}}
          </:tooltip>
        </PixTooltip>
      `);

      // then
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      assert.ok(tooltipContentElement.classList.toString().includes(INLINE_CLASS));
    });
  });

  module('tooltip wide display', function () {
    const WIDE_CLASS = 'pix-tooltip__content--wide';

    test('it can render not widely', async function (assert) {
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
      `);

      // then
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      const tooltipContentClasses = tooltipContentElement.classList.toString().trim();
      assert.false(tooltipContentClasses.includes(WIDE_CLASS));
    });

    test('it can render widely', async function (assert) {
      // given
      this.set('text', text);

      // when
      await render(hbs`
        <PixTooltip @isWide={{true}}>
          <:tooltip>
            {{this.text}}
          </:tooltip>
        </PixTooltip>
      `);

      // then
      const tooltipContentElement = this.element.querySelector(TOOLTIP_SELECTOR);
      assert.ok(tooltipContentElement.classList.toString().includes(WIDE_CLASS));
    });
  });
});
