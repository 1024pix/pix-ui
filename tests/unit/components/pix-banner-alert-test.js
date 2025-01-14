import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

import createGlimmerComponent from '../../helpers/create-glimmer-component';

module('Unit | Component | PixBannerAlert', function (hooks) {
  setupTest(hooks);

  module('#closeBanner', function () {
    module('when onCloseBannerTriggerAction is set', function () {
      test('it should call the custom action', async function (assert) {
        // given
        const params = Symbol();
        const onCloseBannerTriggerAction = sinon.stub();
        const componentParams = { canCloseBanner: true, onCloseBannerTriggerAction };
        const component = createGlimmerComponent('pix-banner-alert', componentParams);

        // when
        await component.closeBanner(params);

        // then
        sinon.assert.calledWith(onCloseBannerTriggerAction, params);
        assert.ok(true);
      });
    });
  });
});
