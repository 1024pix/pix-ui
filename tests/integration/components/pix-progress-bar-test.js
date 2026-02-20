import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | PixProgressBar', function (hooks) {
  setupRenderingTest(hooks);

  const PROGRESS_BAR_SELECTOR = '.pix-progress-bar';

  module('Attributes @value', function () {
    test('it renders the value with percentage', async function (assert) {
      // given & when
      const screen = await render(hbs`<PixProgressBar @value={{0.5}} @percentageValue='50%' />`);

      // then
      assert.strictEqual(screen.getByRole('presentation').innerText, '50%');
    });
  });

  module('Attributes @color', function () {
    test('it renders the progress bar by default with primary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('pix-progress-bar--content-primary'));
    });

    test('it renders the progress bar with primary class when color not exists', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @color='vert-lychen' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('pix-progress-bar--content-primary'));
    });

    test('it renders the progress bar with tertiary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @color='tertiary' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('pix-progress-bar--content-tertiary'));
    });

    test('it renders the progress bar with success class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @color='success' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('pix-progress-bar--content-success'));
    });

    test('it renders the progress bar with primary class', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @color='primary' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('pix-progress-bar--content-primary'));
    });
  });

  module('Attributes @themeMode', function () {
    test('it renders the progress bar by default with light mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('pix-progress-bar--theme-light'));
    });

    test('it renders the progress bar with light mode when value not exists', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @themeMode='darken-light' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('pix-progress-bar--theme-light'));
    });

    test('it renders the progress bar with light mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @themeMode='light' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('pix-progress-bar--theme-light'));
    });

    test('it renders the progress bar with dark mode', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @themeMode='dark' />`);

      // then
      const componentElement = this.element.querySelector(PROGRESS_BAR_SELECTOR);
      assert.true(componentElement.classList.contains('pix-progress-bar--theme-dark'));
    });
  });

  module('Attributes @subtitle', function () {
    test('it does not render the progress bar sub-title', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} />`);

      // then
      const componentElement = this.element.querySelector('.pix-progress-bar__sub-title');
      assert.false(!!componentElement);
    });

    test('it renders the progress bar sub-title', async function (assert) {
      // given & when
      await render(hbs`<PixProgressBar @value={{0.5}} @subtitle='toto' />`);

      // then
      const componentElement = this.element.querySelector('.pix-progress-bar__sub-title');
      assert.strictEqual(componentElement.textContent.trim(), 'toto');
    });
  });

  module('Attributes @hidePercentage', function () {
    test('it renders the progress bar percentage by default', async function (assert) {
      // when
      const screen = await render(hbs`<PixProgressBar @value={{0.5}} @percentageValue='50%' />`);

      // then
      assert.dom(screen.getByRole('presentation', { hidden: true })).hasText('50%');
    });

    test('it renders the progress bar percentage when attribute is false', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixProgressBar @value={{0.5}} @hidePercentage={{false}} @percentageValue='50%' />`,
      );

      // then

      assert.dom(screen.getByRole('presentation', { hidden: true })).hasText('50%');
    });

    test('it does not render the progress bar percentage when attribute is true', async function (assert) {
      // when
      await render(hbs`<PixProgressBar @value={{0.5}} @hidePercentage={{true}} />`);

      // then
      assert.dom('.pix-progress-bar__text').doesNotExist();
    });
  });
});
