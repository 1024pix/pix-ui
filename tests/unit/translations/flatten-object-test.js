import { module, test } from 'qunit';
import { flattenObject } from '@1024pix/pix-ui/translations';

module('Unit | Translations', function () {
  module('#flattenObject', function () {
    test('it should deeply flatten an object using dot notation', function (assert) {
      // given
      const object = {
        nested1: {
          nested11: {
            nested111: 'nested111',
          },
          nested12: 'nested12',
        },
        nested2: {
          nested21: {
            nested211: 'nested211',
            nested212: 'nested212',
          },
        },
        nested3: 'nested3',
      };

      // when
      const result = flattenObject(object);

      // then
      assert.deepEqual(result, {
        'nested1.nested11.nested111': 'nested111',
        'nested1.nested12': 'nested12',
        'nested2.nested21.nested211': 'nested211',
        'nested2.nested21.nested212': 'nested212',
        nested3: 'nested3',
      });
    });
  });
});
