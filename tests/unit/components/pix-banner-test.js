import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createGlimmerComponent from '../../helpers/create-glimmer-component';
import sinon from 'sinon';

module('Unit | Component | PixBanner', function (hooks) {
  setupTest(hooks);

  module('#closeBanner', function () {
    module('when onCloseBannerTriggerAction is set', function () {
      test('it should call the custom action', async function (assert) {
        // given
        const params = Symbol();
        const onCloseBannerTriggerAction = sinon.stub();
        const componentParams = { canCloseBanner: true, onCloseBannerTriggerAction };
        const component = createGlimmerComponent('component:pix-banner', componentParams);

        // when
        await component.closeBanner(params);

        // then
        sinon.assert.calledWith(onCloseBannerTriggerAction, params);
        assert.ok(true);
      });
    });
  });
});
