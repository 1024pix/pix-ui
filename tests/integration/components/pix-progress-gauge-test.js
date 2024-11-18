import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | progress-gauge', function (hooks) {
  setupRenderingTest(hooks);

  const PROGRESS_GAUGE_SELECTOR = '.progress-gauge';

  module('Attributes @value', function () {
    test('it should throw an error if there is no value', async function (assert) {
      // given & when
      const componentParams = { value: undefined };
      const component = createGlimmerComponent('pix-progress-gauge', componentParams);

      // then
      const expectedError = new Error(
        'ERROR in PixProgressGauge component, @value param is not provided.',
      );
      assert.throws(function () {
        component.value;
      }, expectedError);
    });

    test('it renders the value with percentage', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressGauge @value='50' />`);

      const localizedPercentage = Number(50 / 100).toLocaleString(navigator.language, {
        style: 'percent',
      });

      // then
      assert.strictEqual(screen.getByRole('presentation').innerText, localizedPercentage);
    });

    test('it renders the progress gauge with correct width never exceed 100%', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressGauge @value='110' />`);

      // then
      const progressbar = screen.getByRole('progressbar');
      assert.strictEqual(progressbar.value, 100);
    });

    test('it renders the progress gauge with correct width never under 0%', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressGauge @value='-20' />`);

      // then
      const progressbar = screen.getByRole('progressbar');
      assert.strictEqual(progressbar.value, 0);
    });
  });

  module('Attributes @label', function () {
    test('it should throw an error if there is no label', async function (assert) {
      // given & when
      const componentParams = { label: null };
      const component = createGlimmerComponent('pix-progress-gauge', componentParams);

      // then
      const expectedError = new Error(
        'ERROR in PixProgressGauge component, @label param is not provided.',
      );
      assert.throws(function () {
        component.label;
      }, expectedError);
    });

    test('it should not throw an error if there is no label and if @isDecorative is true', async function (assert) {
      // given & when
      const componentParams = { label: null, isDecorative: true };
      const component = createGlimmerComponent('pix-progress-gauge', componentParams);

      // then
      component.label;
      assert.ok(true);
    });
  });

  module('Attributes @color', function () {
    test('it renders the progress gauge by default with primary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--content-primary'));
    });

    test('it renders the progress gauge with primary class when color not exists', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @color='vert-lychen' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--content-primary'));
    });

    test('it renders the progress gauge with tertiary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @color='tertiary' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--content-tertiary'));
    });

    test('it renders the progress gauge with success class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @color='success' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--content-success'));
    });

    test('it renders the progress gauge with primary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @color='primary' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--content-primary'));
    });
  });

  module('Attributes @themeMode', function () {
    test('it renders the progress gauge by default with light mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--theme-light'));
    });

    test('it renders the progress gauge with light mode when value not exists', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @themeMode='darken-light' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--theme-light'));
    });

    test('it renders the progress gauge with light mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @themeMode='light' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--theme-light'));
    });

    test('it renders the progress gauge with dark mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressGauge @value='50' @themeMode='dark' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_GAUGE_SELECTOR);
      assert.true(componentElement.classList.contains('progress-gauge--theme-dark'));
    });
  });

  module('Attributes @subtitle', function () {
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
      assert.strictEqual(componentElement.textContent.trim(), 'toto');
    });
  });

  module('Attributes @hidePercentage', function () {
    test('it renders the progress gauge percentage by default', async function (assert) {
      // when
      const screen = await render(hbs`<PixProgressGauge @value='50' />`);

      const localizedPercentage = Number(50 / 100).toLocaleString(navigator.language, {
        style: 'percent',
      });

      // then
      assert.dom(screen.getByRole('presentation', { hidden: true })).hasText(localizedPercentage);
    });

    test('it renders the progress gauge percentage when attribute is false', async function (assert) {
      // when
      const screen = await render(hbs`<PixProgressGauge @value='50' @hidePercentage={{false}} />`);
      const localizedPercentage = Number(50 / 100).toLocaleString(navigator.language, {
        style: 'percent',
      });

      // then

      assert.dom(screen.getByRole('presentation', { hidden: true })).hasText(localizedPercentage);
    });

    test('it does not render the progress gauge percentage when attribute is true', async function (assert) {
      // when
      await render(hbs`<PixProgressGauge @value='50' @hidePercentage={{true}} />`);

      // then
      assert.dom('.progress-gauge__text').doesNotExist();
    });
  });

  module('Attributes @isDecorative', () => {
    test('it sets gauge aria-hidden to "true"', async function (assert) {
      // when
      await render(hbs`<PixProgressGauge @value='50' @isDecorative='true' />`);

      // then
      assert.dom('.progress-gauge').hasAria('hidden', 'true');
    });
  });
});
