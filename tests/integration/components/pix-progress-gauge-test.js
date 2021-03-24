import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | progress-gauge', function(hooks) {
  setupRenderingTest(hooks);

  module('Attributes @value', function() {
    test('it renders the progress gauge with correct width', async function(assert) {
      // when
      await render(hbs`<PixProgressGauge @value="50"/>`);
  
      const componentElement = this.element.querySelector('.progress-gauge__marker');
  
      // then
      assert.equal(componentElement.style.width, '50%');
    });
  
    test('it renders the progress tooltip with correct information', async function(assert) {
      // when
      await render(hbs`<PixProgressGauge @value="50" @tooltipText="50%"/>`);
  
      const componentElement = this.element.querySelector('.progress-gauge__tooltip');
  
      // then
      assert.equal(componentElement.textContent.trim(), '50%');
    });

    test('it should not renders the progress tooltip if no tooltipText', async function(assert) {
      // when
      await render(hbs`<PixProgressGauge @value="50" />`);
  
      const componentElement = this.element.querySelector('.progress-gauge__tooltip');
  
      // then
      assert.notOk(componentElement);
    });
  
    test('it renders the progress gauge with correct width never exceed 100%', async function(assert) {
      // when
      await render(hbs`<PixProgressGauge @value="110"/>`);
  
      const markerComponent = this.element.querySelector('.progress-gauge__marker');
  
      // then
      assert.equal(markerComponent.style.width, '100%');
    });

    test('it renders the progress gauge with correct width never under 0%', async function(assert) {
      // when
      await render(hbs`<PixProgressGauge @value="-1"/>`);
  
      const markerComponent = this.element.querySelector('.progress-gauge__marker');
  
      // then
      assert.equal(markerComponent.style.width, '0%');
    });  
  });
  

  module('Attributes @isArrowLeft', function() {
    test('it renders the progress gauge with default tootlip', async function(assert) {
      // when
      await render(hbs`<PixProgressGauge @value="50" />`);
  
      const componentElement = this.element.querySelector('.progress-gauge');
  
      // then
      assert.equal(componentElement.classList.contains('progress-gauge--tooltip-left'), false);
    });
    
    test('it renders the progress gauge with tootlip left class', async function(assert) {
      // when
      await render(hbs`
        <PixProgressGauge
          @value="50"
          @isArrowLeft="true"/>
      `);
  
      const componentElement = this.element.querySelector('.progress-gauge');
  
      // then
      assert.equal(componentElement.classList.contains('progress-gauge--tooltip-left'), true);
    });
  });

  module('Attributes @color', function() {
    test('it renders the progress gauge by default with yellow class', async function(assert) {
      // when
      await render(hbs`<PixProgressGauge @value="50" />`);

      const componentElement = this.element.querySelector('.progress-gauge');

      // then
      assert.equal(componentElement.classList.contains('progress-gauge--yellow'), true);
    });

    test('it renders the progress gauge with yellow class when color not exists', async function(assert) {
      // when
      await render(hbs`
        <PixProgressGauge
          @value="50"
          @color="vert-lychen" />
      `);

      const componentElement = this.element.querySelector('.progress-gauge');

      // then
      assert.equal(componentElement.classList.contains('progress-gauge--yellow'), true);
    });
 
    test('it renders the progress gauge with yellow class', async function(assert) {
      // when
      await render(hbs`
        <PixProgressGauge
          @value="50"
          @color="yellow"/>
      `);

      const componentElement = this.element.querySelector('.progress-gauge');

      // then
      assert.equal(componentElement.classList.contains('progress-gauge--yellow'), true);
    });
    
    test('it renders the progress gauge with white class', async function(assert) {
      // when
      await render(hbs`
        <PixProgressGauge
          @value="50"
          @color="white"/>
      `);

      const componentElement = this.element.querySelector('.progress-gauge');

      // then
      assert.equal(componentElement.classList.contains('progress-gauge--white'), true);
    });
  });

  module('Attibutes @subtitle', function () {
    test('it does not render the progress gauge sub-title', async function(assert) {
      // when
      await render(hbs`
        <PixProgressGauge
          @value="50" />
      `);
  
      const componentElement = this.element.querySelector('.progress-gauge__sub-title');
  
      // then
      assert.equal(!!componentElement, false);
    });
  
    test('it renders the progress gauge sub-title', async function(assert) {
      // when
      await render(hbs`
        <PixProgressGauge
          @value="50"
          @subtitle="toto"/>
      `);
  
      const componentElement = this.element.querySelector('.progress-gauge__sub-title');
  
      // then
      assert.equal(componentElement.textContent.trim(), 'toto');
    });
  });
});
