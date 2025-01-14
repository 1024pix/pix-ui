import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Integration | Component | PixProgressBar', function (hooks) {
  setupRenderingTest(hooks);

  const PROGRESS_BAR_SELECTOR = '.progress-bar';

  module('Attributes @value', function () {
    test('it should throw an error if there is no value', async function (assert) {
      // given & when
      const componentParams = { value: undefined };
      const component = createGlimmerComponent('pix-progress-bar', componentParams);

      // then
      const expectedError = new Error(
        'ERROR in PixProgressBar component, @value param is not provided.',
      );
      assert.throws(function () {
        component.value;
      }, expectedError);
    });

    test('it renders the value with percentage', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressBar @value='50' />`);

      const localizedPercentage = Number(50 / 100).toLocaleString(navigator.language, {
        style: 'percent',
      });

      // then
      assert.strictEqual(screen.getByRole('presentation').innerText, localizedPercentage);
    });

    test('it renders the progress bar with correct width never exceed 100%', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressBar @value='110' />`);

      // then
      const progressbar = screen.getByRole('progressbar');
      assert.strictEqual(progressbar.value, 100);
    });

    test('it renders the progress bar with correct width never under 0%', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressBar @value='-20' />`);

      // then
      const progressbar = screen.getByRole('progressbar');
      assert.strictEqual(progressbar.value, 0);
    });
  });

  module('Attributes @label', function () {
    test('it should throw an error if there is no label', async function (assert) {
      // given & when
      const componentParams = { label: null };
      const component = createGlimmerComponent('pix-progress-bar', componentParams);

      // then
      const expectedError = new Error(
        'ERROR in PixProgressBar component, @label param is not provided.',
      );
      assert.throws(function () {
        component.label;
      }, expectedError);
    });

    test('it should not throw an error if there is no label and if @isDecorative is true', async function (assert) {
      // given & when
      const componentParams = { label: null, isDecorative: true };
      const component = createGlimmerComponent('pix-progress-bar', componentParams);

      // then
      component.label;
      assert.ok(true);
    });
  });

  module('Attributes @color', function () {
    test('it renders the progress bar by default with primary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-primary'));
    });

    test('it renders the progress bar with primary class when color not exists', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' @color='vert-lychen' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-primary'));
    });

    test('it renders the progress bar with tertiary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' @color='tertiary' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-tertiary'));
    });

    test('it renders the progress bar with success class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' @color='success' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-success'));
    });

    test('it renders the progress bar with primary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' @color='primary' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-primary'));
    });
  });

  module('Attributes @themeMode', function () {
    test('it renders the progress bar by default with light mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--theme-light'));
    });

    test('it renders the progress bar with light mode when value not exists', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' @themeMode='darken-light' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--theme-light'));
    });

    test('it renders the progress bar with light mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' @themeMode='light' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--theme-light'));
    });

    test('it renders the progress bar with dark mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' @themeMode='dark' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--theme-dark'));
    });
  });

  module('Attributes @subtitle', function () {
    test('it does not render the progress bar sub-title', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' />`);

      // then
      const componentElement = this.element.querySelector('.progress-bar__sub-title');
      assert.false(!!componentElement);
    });

    test('it renders the progress bar sub-title', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value='50' @subtitle='toto' />`);

      // then
      const componentElement = this.element.querySelector('.progress-bar__sub-title');
      assert.strictEqual(componentElement.textContent.trim(), 'toto');
    });
  });

  module('Attributes @hidePercentage', function () {
    test('it renders the progress bar percentage by default', async function (assert) {
      // when
      const screen = await render(hbs`<PixProgressBar @value='50' />`);

      const localizedPercentage = Number(50 / 100).toLocaleString(navigator.language, {
        style: 'percent',
      });

      // then
      assert.dom(screen.getByRole('presentation', { hidden: true })).hasText(localizedPercentage);
    });

    test('it renders the progress bar percentage when attribute is false', async function (assert) {
      // when
      const screen = await render(hbs`<PixProgressBar @value='50' @hidePercentage={{false}} />`);
      const localizedPercentage = Number(50 / 100).toLocaleString(navigator.language, {
        style: 'percent',
      });

      // then

      assert.dom(screen.getByRole('presentation', { hidden: true })).hasText(localizedPercentage);
    });

    test('it does not render the progress bar percentage when attribute is true', async function (assert) {
      // when
      await render(hbs`<PixProgressBar @value='50' @hidePercentage={{true}} />`);

      // then
      assert.dom('.progress-bar__text').doesNotExist();
    });
  });

  module('Attributes @isDecorative', () => {
    test('it sets progress bar aria-hidden to "true"', async function (assert) {
      // when
      await render(hbs`<PixProgressBar @value='50' @isDecorative='true' />`);

      // then
      assert.dom('.progress-bar').hasAria('hidden', 'true');
    });
  });
});
