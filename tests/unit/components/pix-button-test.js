import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';
import createGlimmerComponent from '../../helpers/create-glimmer-component';


module('Unit | Component | pix-button', function(hooks) {
  setupTest(hooks);

  module('#enableTriggerAction', function(){

    test('it should return true if button type is button', function(assert){
      // given
      const componentParams = { type: 'button' };
      const component = createGlimmerComponent('component:pix-button', componentParams);

      // when
      const result = component.enableTriggerAction;

      // then
      assert.equal(result, true);
    })

    test('it should return true if button type is submit and triggerAction is defined', function(assert){
      // given
      const componentParams = { type: 'submit', triggerAction: sinon.stub() };
      const component = createGlimmerComponent('component:pix-button', componentParams);

      // when
      const result = component.enableTriggerAction;

      // then
      assert.equal(result, true);
    })

    test('it should return false if button type is submit and triggerAction is not defined', function(assert){
      // given
      const componentParams = { type: 'submit' };
      const component = createGlimmerComponent('component:pix-button', componentParams);

      // when
      const result = component.enableTriggerAction;

      // then
      assert.equal(result, false);
    })
  })
});
