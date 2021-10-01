import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';


module('Unit | Component | pix-textarea', function(hooks) {
  setupTest(hooks);

  module('#label', function(){

    test('it should return label if id is defined', function(assert){
      // given
      const componentParams = { id: 'Textearea id', label: 'Textarea label' };
      const component = createGlimmerComponent('component:pix-textarea', componentParams);

      // when
      const result = component.label;

      // then
      assert.equal(result, 'Textarea label');
    })

    test('it should throw an error if id is undefined', function(assert){
      // given
      const componentParams = { label: 'Textarea label' };
      const component = createGlimmerComponent('component:pix-textarea', componentParams);

      // when & then
      const expectedError = new Error('ERROR in PixTextarea component, @id param is necessary when giving @label');
      assert.throws(
        function() { component.label },
        expectedError
      );
    })
  })
});
