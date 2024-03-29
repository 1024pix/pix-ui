import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@1024pix/ember-testing-library';
import { click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | filter-banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixFilterBanner', async function (assert) {
    // when
    await render(hbs`<PixFilterBanner>
  content
</PixFilterBanner>`);

    // then
    assert.contains('content');
  });

  test('it renders the PixFilterBanner with title', async function (assert) {
    // when
    await render(hbs`<PixFilterBanner @title='Titre de la bannière'>
  content
</PixFilterBanner>`);

    // then
    assert.contains('Titre de la bannière');
  });

  test('it renders the PixFilterBanner with details', async function (assert) {
    // when
    await render(hbs`<PixFilterBanner @details='5 participants filtrés'>
  content
</PixFilterBanner>`);

    // then
    assert.contains('5 participants filtrés');
  });

  module('clearFilterbutton', function () {
    test('it renders the PixFilterBanner with a clearFiltersLabel button', async function (assert) {
      //given
      this.clearFiltersLabel = 'Effacer les filtres';
      this.onClearFilters = sinon.spy();

      // when
      const screen = await render(hbs`<PixFilterBanner
  @clearFiltersLabel={{this.clearFiltersLabel}}
  @onClearFilters={{this.onClearFilters}}
>
  content
</PixFilterBanner>`);

      // then
      const button = screen.getByRole('button', { name: this.clearFiltersLabel });
      assert.dom(button).exists();
    });

    test('it renders the PixFilterBanner with a disabled clearFiltersLabel button', async function (assert) {
      //given
      this.clearFiltersLabel = 'Effacer les filtres';
      this.isClearFilterButtonDisabled = true;
      this.onClearFilters = sinon.spy();

      // when
      const screen = await render(hbs`<PixFilterBanner
  @clearFiltersLabel={{this.clearFiltersLabel}}
  @isClearFilterButtonDisabled={{this.isClearFilterButtonDisabled}}
>
  content
</PixFilterBanner>`);

      // then
      const button = screen.getByRole('button', { name: this.clearFiltersLabel, hidden: true });
      assert.dom(button).exists();
    });

    test('it should trigger onClearFilters when button clicked', async function (assert) {
      // given
      this.clearFiltersLabel = 'some label';
      this.onClearFilters = sinon.spy();

      //when
      const screen = await render(hbs`<PixFilterBanner
  @clearFiltersLabel={{this.clearFiltersLabel}}
  @onClearFilters={{this.onClearFilters}}
>
  content
</PixFilterBanner>`);
      await click(screen.getByRole('button', { name: this.clearFiltersLabel }));

      // then
      assert.ok(this.onClearFilters.calledOnce, 'the callback should be called once');
    });
  });
});
