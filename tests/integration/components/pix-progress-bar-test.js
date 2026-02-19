import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | PixProgressBar', function (hooks) {
  setupRenderingTest(hooks);

  const PROGRESS_BAR_SELECTOR = '.progress-bar';

  module('Attributes @value', function () {
    test('it renders the value with percentage', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressBar @value={{0.5}} @locale='fr' />`);

      const localizedPercentage = Number(0.5).toLocaleString('fr', {
        style: 'percent',
      });

      // then
      assert.strictEqual(screen.getByRole('presentation').innerText, localizedPercentage);
    });

    test('it renders the progress bar with correct width never exceed 100%', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressBar @value={{1.1}} @locale='fr' />`);

      // then
      const progressbar = screen.getByRole('progressbar');
      assert.strictEqual(progressbar.value, 1);
    });

    test('it renders the progress bar with correct width never under 0%', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressBar @value={{-0.2}} @locale='fr' />`);

      // then
      const progressbar = screen.getByRole('progressbar');
      assert.strictEqual(progressbar.value, 0);
    });
  });

  module('Attributes @color', function () {
    test('it renders the progress bar by default with primary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-primary'));
    });

    test('it renders the progress bar with primary class when color not exists', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @color='vert-lychen' @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-primary'));
    });

    test('it renders the progress bar with tertiary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @color='tertiary' @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-tertiary'));
    });

    test('it renders the progress bar with success class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @color='success' @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-success'));
    });

    test('it renders the progress bar with primary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @color='primary' @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--content-primary'));
    });
  });

  module('Attributes @themeMode', function () {
    test('it renders the progress bar by default with light mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--theme-light'));
    });

    test('it renders the progress bar with light mode when value not exists', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @themeMode='darken-light' @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--theme-light'));
    });

    test('it renders the progress bar with light mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @themeMode='light' @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--theme-light'));
    });

    test('it renders the progress bar with dark mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @themeMode='dark' @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('progress-bar--theme-dark'));
    });
  });

  module('Attributes @subtitle', function () {
    test('it does not render the progress bar sub-title', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector('.progress-bar__sub-title');
      assert.false(!!componentElement);
    });

    test('it renders the progress bar sub-title', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @subtitle='toto' @locale='fr' />`);

      // then
      const componentElement = this.element.querySelector('.progress-bar__sub-title');
      assert.strictEqual(componentElement.textContent.trim(), 'toto');
    });
  });

  module('Attributes @hidePercentage', function () {
    test('it renders the progress bar percentage by default', async function (assert) {
      // when
      const screen = await render(hbs`<PixProgressBar @value={{0.5}} @locale='fr' />`);

      const localizedPercentage = Number(50 / 100).toLocaleString('fr', {
        style: 'percent',
      });

      // then
      assert.dom(screen.getByRole('presentation', { hidden: true })).hasText(localizedPercentage);
    });

    test('it renders the progress bar percentage when attribute is false', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixProgressBar @value={{0.5}} @hidePercentage={{false}} @locale='fr' />`,
      );
      const localizedPercentage = Number(50 / 100).toLocaleString('fr', {
        style: 'percent',
      });

      // then

      assert.dom(screen.getByRole('presentation', { hidden: true })).hasText(localizedPercentage);
    });

    test('it does not render the progress bar percentage when attribute is true', async function (assert) {
      // when
      await render(hbs`<PixProgressBar @value={{0.5}} @hidePercentage={{true}} @locale='fr' />`);

      // then
      assert.dom('.progress-bar__text').doesNotExist();
    });
  });

  module('Attributes @isDecorative', () => {
    test('it sets progress bar aria-hidden to "true"', async function (assert) {
      // when
      await render(hbs`<PixProgressBar @value={{0.5}} @isDecorative='true' @locale='fr' />`);

      // then
      assert.dom('.progress-bar').hasAria('hidden', 'true');
    });
  });
});
