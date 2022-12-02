import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByName, clickByText, fillByLabel } from '@1024pix/ember-testing-library';
import { triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dropdown', function (hooks) {
  setupRenderingTest(hooks);

  this.options = Array.from({ length: 40 }, (_, index) => ({
    value: `${index + 1}`,
    label: `${index + 1}abc`,
  }));

  test('it renders PixDropdown with proper labels', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @placeholder='Choisissez une option'
  @label='Mon menu déroulant'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);

    // then
    assert.dom(screen.getByText('Choisissez une option')).exists();
    assert.dom(screen.getByLabelText('Mon menu déroulant')).exists();
    assert.dom(screen.getByLabelText('Ouvrir le menu déroulant')).exists();
    assert.dom(screen.queryByLabelText('Réduire le menu déroulant')).doesNotExist();
    assert.dom(screen.queryByLabelText('Supprimer la sélection')).doesNotExist();
  });

  test('it should be possible to make pix dropdown required', async function (assert) {
    // given & when
    const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @label='Mon menu déroulant'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
  @requiredLabel='Champ obligatoire'
/>`);

    // then
    assert.dom(screen.getByLabelText('* Mon menu déroulant')).exists();
  });

  module('selection', () => {
    test('it allows to select an option and renders a clear button', async function (assert) {
      // given
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @placeholder='Choisissez une option'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');
      await clickByText('4abc');

      // then
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(screen.getAllByText('4abc').length, 2);
      assert.dom(screen.getByLabelText('Supprimer la sélection')).exists();
    });

    test('it pre-selects and clears selection', async function (assert) {
      // given
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @selectedOption='4'
  @options={{this.options}}
  @placeholder='Choisissez une option'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(screen.getAllByText('4abc').length, 2);

      // when
      await clickByName('Supprimer la sélection');

      // then
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(screen.getAllByText('4abc').length, 1);
    });
  });

  module('searchable', () => {
    test('it renders input when searchable and sets focus on input when expanding', async function (assert) {
      // given
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @isSearchable={{true}}
  @placeholder='Choisissez une option'
  @searchPlaceholder='Rechercher'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');

      // then
      assert.dom(screen.getByPlaceholderText('Rechercher')).exists();
      assert.dom(screen.getByPlaceholderText('Rechercher')).isFocused();
      assert.dom(screen.getByLabelText('Réduire le menu déroulant')).exists();
      assert.dom(screen.queryByLabelText('Ouvrir le menu déroulant')).doesNotExist();
    });

    test('it filters list', async function (assert) {
      // given
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @isSearchable={{true}}
  @placeholder='Choisissez une option'
  @searchPlaceholder='Rechercher'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');
      await fillByLabel('Rechercher', '4abc');

      // then
      assert.dom(screen.getByText('4abc')).exists();
      assert.dom(screen.queryByText('1abc')).doesNotExist();
    });
  });

  module('navigation', () => {
    test('it focuses on the first option when not searchable', async function (assert) {
      // given
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @placeholder='Choisissez une option'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');

      // then
      assert.dom(screen.getByText('1abc')).isFocused();
    });

    test('it allows to navigate through options using arrow keys', async function (assert) {
      // given
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @placeholder='Choisissez une option'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });

      // then
      assert.dom(screen.getByText('1abc')).isNotFocused();
      assert.dom(screen.getByText('2abc')).isNotFocused();
      assert.dom(screen.getByText('3abc')).isFocused();
    });

    test('it selects option which has focus on enter key and collapses dropdown', async function (assert) {
      // given
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @placeholder='Choisissez une option'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu--option:focus', 'keypress', { code: 'Enter' });

      // then
      assert.dom(screen.getByLabelText('Choisissez une option')).doesNotHaveClass('expanded');
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line qunit/no-assert-equal
      assert.equal(screen.getAllByText('4abc').length, 2);
    });

    test('it loops cyclically through list', async function (assert) {
      // given
      this.options = [
        { value: '1', label: '1abc' },
        { value: '2', label: '2abc' },
        { value: '10', label: '10abc' },
        { value: '20', label: '20abc' },
        { value: '3', label: '3abc' },
        { value: '30', label: '30abc' },
      ];
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @placeholder='Choisissez une option'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });

      // then
      assert.dom(screen.getByText('10abc')).isFocused();
    });

    test('it loops correctly through filtered list', async function (assert) {
      // given
      this.options = [
        { value: '1', label: '1abc' },
        { value: '2', label: '2abc' },
        { value: '10', label: '10abc' },
        { value: '20', label: '20abc' },
        { value: '3', label: '3abc' },
        { value: '30', label: '30abc' },
      ];
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @isSearchable={{true}}
  @placeholder='Choisissez une option'
  @searchPlaceholder='Rechercher'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');
      await fillByLabel('Rechercher', '1');
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });
      await triggerEvent('.pix-dropdown__menu', 'keyup', { code: 'ArrowDown' });

      // then
      assert.dom(screen.getByText('1abc')).isFocused();
    });
  });

  module('infinite scroll', () => {
    test('it should only show as many items as the page size', async function (assert) {
      // given
      this.options = [
        { value: '1', label: '1abc' },
        { value: '2', label: '2abc' },
        { value: '3', label: '3abc' },
        { value: '4', label: '4abc' },
        { value: '5', label: '5abc' },
        { value: '6', label: '6abc' },
      ];
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @placeholder='Choisissez une option'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
  @pageSize={{2}}
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');

      // then
      assert.dom(screen.queryByText('3abc')).doesNotExist();
      assert.dom(screen.queryByText('4abc')).doesNotExist();
      assert.dom(screen.queryByText('5abc')).doesNotExist();
      assert.dom(screen.queryByText('6abc')).doesNotExist();
    });

    test.skip('it should load next elements', async function (assert) {
      // given
      this.options = [
        { value: '1', label: '1abc' },
        { value: '2', label: '2abc' },
        { value: '3', label: '3abc' },
        { value: '4', label: '4abc' },
        { value: '5', label: '5abc' },
        { value: '6', label: '6abc' },
      ];
      const screen = await render(hbs`<PixDropdown
  @id='pix-dropdown'
  @options={{this.options}}
  @placeholder='Choisissez une option'
  @clearLabel='Supprimer la sélection'
  @expandLabel='Ouvrir le menu déroulant'
  @collapseLabel='Réduire le menu déroulant'
  @pageSize={{2}}
/>`);

      // when
      await clickByName('Ouvrir le menu déroulant');
      await triggerEvent('.pix-dropdown__menu', 'scroll');

      // then
      assert.dom(screen.getByText('3abc')).exists();
      assert.dom(screen.getByText('4abc')).exists();
      assert.dom(screen.queryByText('5abc')).doesNotExist();
      assert.dom(screen.queryByText('6abc')).doesNotExist();
    });
  });
});
