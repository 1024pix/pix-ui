import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';


module('Integration | Component | filter-banner', function(hooks) {
  setupRenderingTest(hooks);

  const COMPONENT_SELECTOR = '.pix-filter-banner';

  test('it renders the default PixFilterBanner', async function(assert) {
    // when
    await render(hbs`
      <PixFilterBanner>
        content
      </PixFilterBanner>
    `);
    const componentElement = this.element.querySelector(COMPONENT_SELECTOR);

    // then
    assert.equal(componentElement.textContent.trim(), 'content');
  });

  test('it renders the PixFilterBanner with title', async function(assert) {
    // when
    await render(hbs`
      <PixFilterBanner @title="Titre de la bannière">
        content
      </PixFilterBanner>
    `);
    const componentElement = this.element.querySelector('.pix-filter-banner__title');

    // then
    assert.equal(componentElement.textContent.trim(), 'Titre de la bannière');
  });

  test('it renders the PixFilterBanner with details', async function(assert) {
    // when
    await render(hbs`
      <PixFilterBanner @details="5 participants filtrés">
        content
      </PixFilterBanner>
    `);
    const componentElement = this.element.querySelector('.pix-filter-banner__details');

    // then
    assert.equal(componentElement.textContent.trim(), '5 participants filtrés');
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
    const button = this.element.querySelector('button');
    assert.equal(button.textContent.trim(), this.clearFiltersLabel);
  });

  test('it should trigger onClearFilters when button clicked', async function(assert) {
    // given
    this.clearFiltersLabel = 'some label';
    this.onClearFilters = sinon.spy();
    
    //when
    await render(hbs`
      <PixFilterBanner @clearFiltersLabel={{clearFiltersLabel}} @onClearFilters={{onClearFilters}}>
        content
      </PixFilterBanner>
    `);
    await click('button');
    
    // then
    assert.ok(this.onClearFilters.calledOnce, 'the callback should be called once');
  });
});
