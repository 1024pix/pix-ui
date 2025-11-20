import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import userEvent from '@testing-library/user-event';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';
import PixToggleButton from '@1024pix/pix-ui/components/pix-toggle-button';

module('Integration | Component | PixToggleButton', function (hooks) {
  setupRenderingTest(hooks);

  const label = 'Mon bouton toggle';
  const viewAText = 'Oui';
  const viewBText = 'Non';

  test('it renders PixToggleButton', async function (assert) {
    // given & when
    const screen = await render(
      <template>
        <PixToggleButton>
          <:label>{{label}}</:label>
          <:viewA>{{viewAText}}</:viewA>
          <:viewB>{{viewBText}}</:viewB>
        </PixToggleButton>
      </template>,
    );

    assert.dom(screen.getByText(label)).exists();
    assert.dom(screen.getByText(viewAText)).exists();
    assert.dom(screen.getByText(viewBText)).exists();
  });

  test('it calls onChange when change', async function (assert) {
    // given & when
    const onChange = sinon.spy();

    const screen = await render(
      <template>
        <PixToggleButton @onChange={{onChange}}>
          <:label>{{label}}</:label>
          <:viewA>{{viewAText}}</:viewA>
          <:viewB>{{viewBText}}</:viewB>
        </PixToggleButton>
      </template>,
    );

    assert.true(screen.getByLabelText('Oui').checked);

    await click(screen.getByRole('radio', { name: 'Non' }));

    // then
    assert.false(screen.getByLabelText('Oui').checked);
    assert.true(screen.getByLabelText('Non').checked);
    sinon.assert.calledWith(onChange, true);
  });

  test('it calls onChange when Enter is pressed', async function (assert) {
    // given & when
    const onChange = sinon.spy();

    const screen = await render(
      <template>
        <PixToggleButton @onChange={{onChange}}>
          <:label>{{label}}</:label>
          <:viewA>{{viewAText}}</:viewA>
          <:viewB>{{viewBText}}</:viewB>
        </PixToggleButton>
      </template>,
    );

    await click(screen.getByRole('radio', { name: 'Non' }));
    await userEvent.keyboard('[Enter]');

    // then
    assert.false(screen.getByLabelText('Oui').checked);
    assert.true(screen.getByLabelText('Non').checked);
    sinon.assert.calledWith(onChange, true);
  });

  test('it calls onChange when Space is pressed', async function (assert) {
    // given & when
    const onChange = sinon.spy();

    const screen = await render(
      <template>
        <PixToggleButton @onChange={{onChange}}>
          <:label>{{label}}</:label>
          <:viewA>{{viewAText}}</:viewA>
          <:viewB>{{viewBText}}</:viewB>
        </PixToggleButton>
      </template>,
    );

    await click(screen.getByRole('radio', { name: 'Non' }));
    await userEvent.keyboard('[Space]');

    // then
    assert.false(screen.getByLabelText('Oui').checked);
    assert.true(screen.getByLabelText('Non').checked);
    sinon.assert.calledWith(onChange, true);
  });
});
