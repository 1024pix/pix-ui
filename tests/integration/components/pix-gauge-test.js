import { render } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | pix-gauge', function (hooks) {
  setupRenderingTest(hooks);

  module('Big mode', function () {
    test('it renders the correct visual for average and max levels', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixGauge
  @label='Niveau atteint de 1 sur un niveau maximum atteignable de 3'
  @reachedLevel={{1}}
  @maxLevel={{3}}
  @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
/>`,
      );

      const generalGauge = screen.getByRole('progressbar', {
        name: /Niveau atteint de 1 sur un niveau maximum atteignable de 3/,
      });
      const reachedLevelTextElement = screen.getByText('1');
      const maxLevelTextElement = screen.getByText('3');

      // then
      assert.ok(generalGauge);
      assert.ok(reachedLevelTextElement);
      assert.ok(maxLevelTextElement);
    });

    test('it does not render mean level bar when average level is between 0 and 0.25', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixGauge
  @label='Niveau atteint de ...
  sur un niveau maximum atteignable de ...'
  @reachedLevel={{0.57}}
  @maxLevel={{3}}
  @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
/>`,
      );
      // then
      assert.notOk(screen.queryByText('1'));
    });

    test('it renders the content of the labels and of the separators if isSmall prop is not filled in', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixGauge
  @label='Niveau atteint de ...
  sur un niveau maximum atteignable de ...'
  @reachedLevel={{1}}
  @maxLevel={{3}}
  @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
/>`,
      );
      // then
      assert.ok(screen.queryByText('Novice'));
      assert.ok(screen.queryByText('Intermédiaire'));
      assert.ok(screen.queryByText('Avancé'));
      assert.ok(screen.queryByText('Expert'));
    });

    test('it manages the locale passed as an argument', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixGauge
  @isSmall={{true}}
  @reachedLevel={{0.8}}
  @maxLevel={{3.2}}
  @stepLabels={{array 'novice' 'expert'}}
  @locale='en'
/>`,
      );

      // then
      assert.ok(screen.queryByText('0.8'));
      assert.ok(screen.queryByText('3.2'));
    });

    test('it hide values when hideValues is true', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixGauge
  @label='Niveau atteint de ...
  sur un niveau maximum atteignable de ...'
  @reachedLevel={{1}}
  @maxLevel={{3}}
  @hideValues={{true}}
  @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
/>`,
      );
      // then
      assert.notOk(screen.queryByLabelText('1'));
      assert.notOk(screen.queryByLabelText('3'));
    });
  });
  module('Small mode', function () {
    test('it renders the correct visual for average and max levels', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixGauge
  @label='Niveau atteint de 1 sur un niveau maximum atteignable de 3'
  @reachedLevel={{1}}
  @maxLevel={{3}}
  @stepLabels={{array 'Novice' 'Intermédiaire' 'Avancé' 'Expert'}}
/>`,
      );

      const generalGauge = screen.getByRole('progressbar', {
        name: /Niveau atteint de 1 sur un niveau maximum atteignable de 3/,
      });
      const reachedLevelTextElement = screen.getByText('1');
      const maxLevelTextElement = screen.getByText('3');

      // then
      assert.ok(generalGauge);
      assert.ok(reachedLevelTextElement);
      assert.ok(maxLevelTextElement);
    });

    test('it renders the mean level bar when average level is lesser than 0', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixGauge @isSmall={{true}} @reachedLevel={{0.75}} @maxLevel={{3}} />`,
      );

      // then
      assert.ok(screen.queryByText('0,8'));
    });

    test('it does not renders content of the labels and the separators if hideValues is true', async function (assert) {
      // when
      const screen = await render(
        hbs`<PixGauge
  @hideValues={{true}}
  @isSmall={{true}}
  @reachedLevel={{1}}
  @maxLevel={{3}}
  @stepLabels={{array 'novice' 'expert'}}
/>`,
      );
      // then
      assert.notOk(screen.queryByText('1'));
      assert.notOk(screen.queryByText('3'));
      assert.notOk(screen.queryByLabelText('novice'));
      assert.notOk(screen.queryByLabelText('expert'));
    });
  });
});
