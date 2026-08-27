import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | PixStepper', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders as an accessible list with all steps', async function (assert) {
    // given
    this.set('steps', [
      { title: 'Informations', subtitle: 'Renseignez vos informations' },
      { title: 'Confirmation', subtitle: 'Vérifiez vos données' },
      { title: 'Validation', subtitle: 'Finalisez votre inscription' },
    ]);
    this.set('currentStep', 1);

    // when
    const screen = await render(
      hbs`<PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />`,
    );

    // then
    assert.dom(screen.getByRole('list')).exists();
    const items = screen.getAllByRole('listitem');
    assert.strictEqual(items.length, 3);
    assert.dom(screen.getByText('Informations')).exists();
    assert.dom(screen.getByText('Confirmation')).exists();
    assert.dom(screen.getByText('Validation')).exists();
  });

  module('accessibility', function () {
    test('it has a translated aria-label with current step and total', async function (assert) {
      // given
      this.set('steps', [{ title: 'Étape 1' }, { title: 'Étape 2' }, { title: 'Étape 3' }]);
      this.set('currentStep', 2);
      this.set('texts', { ariaLabel: 'Étape 2 sur 3' });

      // when
      const screen = await render(
        hbs`<PixStepper @steps={{this.steps}} @texts={{this.texts}} @currentStep={{this.currentStep}} />`,
      );

      // then
      assert.dom(screen.getByRole('list', { name: this.texts.ariaLabel })).exists();
    });
  });

  module('current step', function () {
    test('it marks the first step as current when @currentStep is 1', async function (assert) {
      // given
      this.set('steps', [{ title: 'Étape 1' }, { title: 'Étape 2' }, { title: 'Étape 3' }]);
      this.set('currentStep', 1);

      // when
      await render(hbs`<PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />`);

      // then
      const steps = this.element.querySelectorAll('.pix-step');
      assert.dom(steps[0]).hasClass('pix-step--current');
      assert.dom(steps[1]).doesNotHaveClass('pix-step--current');
      assert.dom(steps[2]).doesNotHaveClass('pix-step--current');
    });

    test('it marks the second step as current when @currentStep is 2', async function (assert) {
      // given
      this.set('steps', [{ title: 'Étape 1' }, { title: 'Étape 2' }, { title: 'Étape 3' }]);
      this.set('currentStep', 2);

      // when
      await render(hbs`<PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />`);

      // then
      const steps = this.element.querySelectorAll('.pix-step');
      assert.dom(steps[0]).doesNotHaveClass('pix-step--current');
      assert.dom(steps[1]).hasClass('pix-step--current');
      assert.dom(steps[2]).doesNotHaveClass('pix-step--current');
    });

    test('it marks the last step as current when @currentStep equals step count', async function (assert) {
      // given
      this.set('steps', [{ title: 'Étape 1' }, { title: 'Étape 2' }, { title: 'Étape 3' }]);
      this.set('currentStep', 3);

      // when
      await render(hbs`<PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />`);

      // then
      const steps = this.element.querySelectorAll('.pix-step');
      assert.dom(steps[0]).doesNotHaveClass('pix-step--current');
      assert.dom(steps[1]).doesNotHaveClass('pix-step--current');
      assert.dom(steps[2]).hasClass('pix-step--current');
    });
  });

  module('CSS classes', function () {
    test('it has default class for 3 steps or less', async function (assert) {
      // given
      this.set('steps', [{ title: 'Étape 1' }, { title: 'Étape 2' }, { title: 'Étape 3' }]);
      this.set('currentStep', 1);

      // when
      await render(hbs`<PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />`);

      // then
      assert.dom('.pix-stepper').exists();
      assert.dom('.pix-stepper').doesNotHaveClass('pix-stepper--long');
    });

    test('it adds long modifier class for more than 3 steps', async function (assert) {
      // given
      this.set('steps', [
        { title: 'Étape 1' },
        { title: 'Étape 2' },
        { title: 'Étape 3' },
        { title: 'Étape 4' },
      ]);
      this.set('currentStep', 1);

      // when
      await render(hbs`<PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />`);

      // then
      assert.dom('.pix-stepper').hasClass('pix-stepper--long');
    });
  });

  module('edge cases', function () {
    test('it renders with a single step', async function (assert) {
      // given
      this.set('steps', [{ title: 'Unique' }]);
      this.set('currentStep', 1);

      // when
      const screen = await render(
        hbs`<PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />`,
      );

      // then
      const items = screen.getAllByRole('listitem');
      assert.strictEqual(items.length, 1);
      assert.dom(screen.getByText('Unique')).exists();
      assert.dom(items[0]).hasClass('pix-step--current');
    });
  });
});
