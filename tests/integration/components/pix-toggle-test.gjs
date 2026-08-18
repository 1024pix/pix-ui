import { render } from '@1024pix/ember-testing-library';
import PixToggle from '@1024pix/pix-ui/components/pix-toggle';
import { on } from '@ember/modifier';
import { click, focus, settled } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import userEvent from '@testing-library/user-event';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Integration | Component | toggle', function (hooks) {
  setupRenderingTest(hooks);

  test('it changes state when the user activates it', async function (assert) {
    // given
    const screen = await render(
      <template>
        <PixToggle>Recevoir la newsletter</PixToggle>
      </template>,
    );
    const toggle = screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: false });

    // when
    await click(toggle);

    // then
    assert.ok(screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: true }));
  });

  test('it changes state when the user deactivates it', async function (assert) {
    // given
    const screen = await render(
      <template>
        <PixToggle @checked={{true}}>Recevoir la newsletter</PixToggle>
      </template>,
    );
    const toggle = screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: true });

    // when
    await click(toggle);

    // then
    assert.ok(screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: false }));
  });

  module('when the user presses the space bar', function () {
    test('it changes state', async function (assert) {
      // given
      const screen = await render(
        <template>
          <PixToggle>Recevoir la newsletter</PixToggle>
        </template>,
      );
      const toggle = screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: false });
      await focus(toggle);

      // when
      await userEvent.keyboard('[Space]');

      // then
      assert.ok(screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: true }));
    });
  });

  test('it notifies the consumer when the user changes its state', async function (assert) {
    // given
    const onChange = sinon.stub();
    const screen = await render(
      <template>
        <PixToggle {{on "change" onChange}}>Recevoir la newsletter</PixToggle>
      </template>,
    );

    // when
    await click(screen.getByRole('switch', { name: 'Recevoir la newsletter' }));

    // then
    assert.true(onChange.calledOnce);
  });

  module('label', function () {
    module('when the user clicks on the label', function () {
      test('it changes state', async function (assert) {
        // given
        const screen = await render(
          <template>
            <PixToggle>Recevoir la newsletter</PixToggle>
          </template>,
        );
        screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: false });

        // when
        await click(screen.getByText('Recevoir la newsletter'));

        // then
        assert.ok(screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: true }));
      });
    });

    module('when the consumer provides no visible label', function () {
      test('it can be named and operated', async function (assert) {
        // given
        const screen = await render(
          <template><PixToggle aria-label="Recevoir la newsletter" /></template>,
        );
        const toggle = screen.getByRole('switch', {
          name: 'Recevoir la newsletter',
          checked: false,
        });

        // when
        await click(toggle);

        // then
        assert.ok(screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: true }));
      });
    });
  });

  module('@checked', function () {
    class Consumer {
      @tracked isChecked;

      constructor(isChecked) {
        this.isChecked = isChecked;
      }
    }

    test('it turns on when the consumer turns it on', async function (assert) {
      // given
      const consumer = new Consumer(false);
      const screen = await render(
        <template>
          <PixToggle @checked={{consumer.isChecked}}>Recevoir la newsletter</PixToggle>
        </template>,
      );
      screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: false });

      // when
      consumer.isChecked = true;
      await settled();

      // then
      assert.ok(screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: true }));
    });

    test('it turns off when the consumer turns it off', async function (assert) {
      // given
      const consumer = new Consumer(true);
      const screen = await render(
        <template>
          <PixToggle @checked={{consumer.isChecked}}>Recevoir la newsletter</PixToggle>
        </template>,
      );
      screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: true });

      // when
      consumer.isChecked = false;
      await settled();

      // then
      assert.ok(screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: false }));
    });
  });

  module('@id', function () {
    test('it gives the switch the id provided by the consumer', async function (assert) {
      // given & when
      const screen = await render(
        <template>
          <PixToggle @id="newsletter-toggle">Recevoir la newsletter</PixToggle>
        </template>,
      );

      // then
      assert
        .dom(screen.getByRole('switch', { name: 'Recevoir la newsletter' }))
        .hasAttribute('id', 'newsletter-toggle');
    });

    module('when no id is set by the consumer', function () {
      test('it activates only the switch whose label the user clicks', async function (assert) {
        // given
        const screen = await render(
          <template>
            <PixToggle>Recevoir la newsletter</PixToggle>
            <PixToggle>Recevoir les actualités</PixToggle>
          </template>,
        );

        // when
        await click(screen.getByText('Recevoir les actualités'));

        // then
        assert.ok(screen.getByRole('switch', { name: 'Recevoir les actualités', checked: true }));
        assert.ok(screen.queryByRole('switch', { name: 'Recevoir la newsletter', checked: false }));
      });
    });
  });

  module('@class', function () {
    test('it applies the given class to the whole component', async function (assert) {
      // given & when
      const screen = await render(
        <template>
          <PixToggle @class="newsletter-toggle">Recevoir la newsletter</PixToggle>
        </template>,
      );

      // then
      const toggle = screen.getByRole('switch', { name: 'Recevoir la newsletter' });
      const styledElement = this.element.querySelector('.newsletter-toggle');

      assert.true(styledElement.contains(toggle));
      assert.dom(styledElement).hasText('Recevoir la newsletter');
    });
  });

  module('@isDisabled', function () {
    test('it does not change state when the user activates it', async function (assert) {
      // given
      const screen = await render(
        <template>
          <PixToggle @checked={{true}} @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
        </template>,
      );
      const toggle = screen.getByRole('switch', { name: 'Recevoir la newsletter' });

      // when
      await click(toggle);

      // then
      assert.true(toggle.checked);
    });

    test('it exposes the disabled state to assistive technologies', async function (assert) {
      // given & when
      const screen = await render(
        <template>
          <PixToggle @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
        </template>,
      );

      // then
      assert.strictEqual(
        screen.getByRole('switch', { name: 'Recevoir la newsletter' }).ariaDisabled,
        'true',
      );
    });

    test('it does not change state when the user activates the label', async function (assert) {
      // given
      const screen = await render(
        <template>
          <PixToggle @checked={{true}} @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
        </template>,
      );
      const toggle = screen.getByRole('switch', { name: 'Recevoir la newsletter' });

      // when
      await click(screen.getByText('Recevoir la newsletter'));

      // then
      assert.true(toggle.checked);
    });

    test('it stays reachable with the keyboard', async function (assert) {
      // given
      const screen = await render(
        <template>
          <PixToggle @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
        </template>,
      );
      const toggle = screen.getByRole('switch', { name: 'Recevoir la newsletter' });

      // when
      await focus(toggle);

      // then
      assert.dom(toggle).isFocused();
    });

    test('it does not change state when the user presses the space bar', async function (assert) {
      // given
      const screen = await render(
        <template>
          <PixToggle @checked={{true}} @isDisabled={{true}}>Recevoir la newsletter</PixToggle>
        </template>,
      );
      const toggle = screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: true });
      await focus(toggle);

      // when
      await userEvent.keyboard('[Space]');

      // then
      assert.ok(screen.getByRole('switch', { name: 'Recevoir la newsletter', checked: true }));
    });

    test('it does not notify the consumer when the user tries to change its state', async function (assert) {
      // given
      const onChange = sinon.stub();
      const screen = await render(
        <template>
          <PixToggle @checked={{true}} @isDisabled={{true}} {{on "change" onChange}}>
            Recevoir la newsletter
          </PixToggle>
        </template>,
      );

      // when
      await click(screen.getByRole('switch', { name: 'Recevoir la newsletter' }));

      // then
      assert.false(onChange.called);
    });
  });

  module('@size', function () {
    test('it renders a bigger switch when the size is large', async function (assert) {
      // given & when
      const screen = await render(
        <template>
          <PixToggle @size="large" aria-label="Recevoir la newsletter" />
          <PixToggle aria-label="Recevoir les actualités" />
        </template>,
      );

      // then
      const large = screen.getByRole('switch', { name: 'Recevoir la newsletter' });
      const regular = screen.getByRole('switch', { name: 'Recevoir les actualités' });

      assert.true(large.getBoundingClientRect().width > regular.getBoundingClientRect().width);
    });
  });
});
