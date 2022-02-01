import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, clickByName, clickByText, fillByLabel } from '@1024pix/ember-testing-library';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dropdown', function (hooks) {
  setupRenderingTest(hooks);

  this.options = Array.from({ length: 40 }, (_, index) => ({
    value: `${index + 1}`,
    label: `${index + 1}abc`,
  }));

  test('it renders PixDropdown with proper labels', async function (assert) {
    // given & when
    const screen = await render(hbs`
      <PixDropdown
        @id="pix-dropdown"
        @options={{this.options}}
        @placeholder="Choisissez une option"
        @label="Mon menu déroulant"
        @clearLabel="Supprimer la sélection"
        @expandLabel="Ouvrir le menu déroulant"
        @collapseLabel="Réduire le menu déroulant"
      />
    `);

    // then
    assert.dom(screen.getByText('Choisissez une option')).exists();
    assert.dom(screen.getByLabelText('Mon menu déroulant')).exists();
    assert.dom(screen.getByLabelText('Ouvrir le menu déroulant')).exists();
    assert.dom(screen.queryByLabelText('Réduire le menu déroulant')).doesNotExist();
    assert.dom(screen.queryByLabelText('Supprimer la sélection')).doesNotExist();
  });

  module('selection', () => {
    test('it allows to select an option and renders a clear button', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixDropdown
          @id="pix-dropdown"
          @options={{this.options}}
          @placeholder="Choisissez une option"
          @clearLabel="Supprimer la sélection"
          @expandLabel="Ouvrir le menu déroulant"
          @collapseLabel="Réduire le menu déroulant"
        />
      `);

      // when
      await clickByName('Ouvrir le menu déroulant');
      await clickByText('4abc');

      // then
      assert.equal(screen.getAllByText('4abc').length, 2);
      assert.dom(screen.getByLabelText('Supprimer la sélection')).exists();
    });

    test('it pre-selects and clears selection', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixDropdown
          @id="pix-dropdown"
          @selectedOption="4"
          @options={{this.options}}
          @placeholder="Choisissez une option"
          @clearLabel="Supprimer la sélection"
          @expandLabel="Ouvrir le menu déroulant"
          @collapseLabel="Réduire le menu déroulant"
        />
      `);
      assert.equal(screen.getAllByText('4abc').length, 2);

      // when
      await clickByName('Supprimer la sélection');

      // then
      assert.equal(screen.getAllByText('4abc').length, 1);
    });
  });

  module('searchable', () => {
    test('it renders input when searchable and sets focus on input when expanding', async function (assert) {
      // given
      const screen = await render(hbs`
        <PixDropdown
          @id="pix-dropdown"
          @options={{this.options}}
          @isSearchable={{true}}
          @placeholder="Choisissez une option"
          @searchPlaceholder="Rechercher"
          @clearLabel="Supprimer la sélection"
          @expandLabel="Ouvrir le menu déroulant"
          @collapseLabel="Réduire le menu déroulant"
        />
      `);

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
      const screen = await render(hbs`
        <PixDropdown
          @id="pix-dropdown"
          @options={{this.options}}
          @isSearchable={{true}}
          @placeholder="Choisissez une option"
          @searchPlaceholder="Rechercher"
          @clearLabel="Supprimer la sélection"
          @expandLabel="Ouvrir le menu déroulant"
          @collapseLabel="Réduire le menu déroulant"
        />
      `);

      // when
      await clickByName('Ouvrir le menu déroulant');
      await fillByLabel('Rechercher', '4abc');

      // then
      assert.dom(screen.getByText('4abc')).exists();
      assert.dom(screen.queryByText('1abc')).doesNotExist();
    });
  });
});
