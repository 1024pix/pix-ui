import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | progress-gauge', function (hooks) {
  setupRenderingTest(hooks);

  const MARKER_SELECTOR = '.progress-gauge__marker';
  const PROGRESS_GAUGE_SELECTOR = '.progress-gauge';

  module('Attributes @value', function () {
    test('it renders the progress gauge with correct width', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' />`);

      // then
      const componentElement = this.element.querySelector(MARKER_SELECTOR);
      assert.equal(componentElement.style.width, '50%');
    });

    test('it renders the progress tooltip with correct information', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @tooltipText='50%' />`);

      // then
      assert.contains('50%');
    });

    test('it should not renders the progress tooltip if no tooltipText', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' />`);

      // then
      const componentElement = this.element.querySelector('.progress-gauge__tooltip');
      assert.notOk(componentElement);
    });

    test('it renders the progress gauge with correct width never exceed 100%', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='110' />`);

      // then
      const markerComponent = this.element.querySelector(MARKER_SELECTOR);
      assert.equal(markerComponent.style.width, '100%');
    });

    test('it renders the progress gauge with correct width never under 0%', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='-1' />`);

      // then
      const markerComponent = this.element.querySelector(MARKER_SELECTOR);
      assert.equal(markerComponent.style.width, '0%');
    });
  });

  module('Attributes @isArrowLeft', function () {
    test('it renders the progress gauge with default tootlip', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.false(componentElement.classList.contains('progress-gauge--tooltip-left'));
    });

    test('it renders the progress gauge with tootlip left class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @isArrowLeft='true' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--tooltip-left'));
    });
  });

  module('Attributes @color', function () {
    test('it renders the progress gauge by default with yellow class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--yellow'));
    });

    test('it renders the progress gauge with yellow class when color not exists', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @color='vert-lychen' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--yellow'));
    });

    test('it renders the progress gauge with yellow class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @color='yellow' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--yellow'));
    });

    test('it renders the progress gauge with white class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @color='white' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--white'));
    });
  });

  module('Attibutes @subtitle', function () {
    test('it does not render the progress gauge sub-title', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' />`);

      // then
      const componentElement = this.element.querySelector('.progress-gauge__sub-title');
      assert.false(!!componentElement);
    });

    test('it renders the progress gauge sub-title', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @subtitle='toto' />`);

      // then
      const componentElement = this.element.querySelector('.progress-gauge__sub-title');
      assert.equal(componentElement.textContent.trim(), 'toto');
    });
  });
});
