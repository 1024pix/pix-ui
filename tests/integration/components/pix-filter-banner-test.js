import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import { clickByLabel } from '../../helpers/click-by-label';


module('Integration | Component | filter-banner', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the default PixFilterBanner', async function(assert) {
    // when
    await render(hbs`
      <PixFilterBanner>
        content
      </PixFilterBanner>
    `);

    // then
    assert.contains('content');
  });

  test('it renders the PixFilterBanner with title', async function(assert) {
    // when
    await render(hbs`
      <PixFilterBanner @title="Titre de la bannière">
        content
      </PixFilterBanner>
    `);

    // then
    assert.contains('Titre de la bannière');
  });

  test('it renders the PixFilterBanner with details', async function(assert) {
    // when
    await render(hbs`
      <PixFilterBanner @details="5 participants filtrés">
        content
      </PixFilterBanner>
    `);

    // then
    assert.contains('5 participants filtrés');
  });

  test('it renders the PixFilterBanner with a clearFiltersLabel button', async function(assert) {
    //given
    this.clearFiltersLabel = 'Effacer les filtres'
    this.onClearFilters = sinon.spy();

    // when
    await render(hbs`
      <PixFilterBanner @clearFiltersLabel={{clearFiltersLabel}} @onClearFilters={{onClearFilters}}>
        content
      </PixFilterBanner>
    `);
    
    // then
    assert.contains(this.clearFiltersLabel);
  });

  test('it should trigger onClearFilters when button clicked', async function(assert) {
    // given
    this.clearFiltersLabel = 'some label';
    this.onClearFilters = sinon.spy();
    
    //when
    await render(hbs`
      <PixFilterBanner
        @clearFiltersLabel={{clearFiltersLabel}}
        @onClearFilters={{onClearFilters}}
      >
        content
      </PixFilterBanner>
    `);
    await clickByLabel('some label');
    
    // then
    assert.ok(this.onClearFilters.calledOnce, 'the callback should be called once');
  });
});
