import { module, test } from 'qunit';
import Color from 'color';
import getAccessibleContrastedColor from '@1024pix/pix-ui/utils/accessible-contrasted-color-generator';

module('Unit | Utils | Accessible Contrasted Color Generator', function () {
  test('It return a light background color from a dark foreground color', function (assert) {
    // given
    const color = Color('#176C4D');
    // when
    const newColor = getAccessibleContrastedColor('#176C4D');
    // then
    const contrast = color.contrast(Color(newColor));
    assert.ok(contrast >= 4.5);
  });

  test('It return a dark background color from a light foreground color', function (assert) {
    // given
    const color = Color('#edfbf6');
    // when
    const newColor = getAccessibleContrastedColor('#edfbf6');
    // then
    const contrast = color.contrast(Color(newColor));
    assert.ok(contrast >= 4.5);
  });

  // See this link to have explaination about this edge case : https://github.com/Qix-/color/issues/53#issue-57856520
  test('It should lighten the black color', function (assert) {
    // given
    const color = Color('#000');
    // when
    const newColor = getAccessibleContrastedColor('#000');
    const contrast = color.contrast(Color(newColor));
    // then
    assert.ok(contrast >= 4.5);
  });

  test("It return the white hexadecimal when the contrast of 4.5 can't be reached", function (assert) {
    // when
    const color = getAccessibleContrastedColor('#808080');
    // then
    assert.strictEqual(color.toLowerCase(), '#ffffff');
  });
});
