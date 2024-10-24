import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import ToastService from '@1024pix/pix-ui/services/pix-toast';
import sinon from 'sinon';
import EmberDebug from '@ember/debug';

module('Unit | Service | toast', function (hooks) {
  setupTest(hooks);

  let toastService;

  hooks.beforeEach(function () {
    toastService = new ToastService();
    sinon.stub(EmberDebug, 'warn');
  });

  hooks.afterEach(function () {
    sinon.restore();
  });

  module('#addNotification', function () {
    test('it adds a new toast object in content array', function (assert) {
      // given
      const notification = {
        ariaLabel: 'icon test label',
        message: 'test success message',
        type: 'success',
      };

      // when
      toastService.addNotification(notification);

      // then
      assert.strictEqual(toastService.content.length, 1);
      assert.deepEqual(toastService.content, [notification]);
    });

    module("when there is no 'ariaLabel' or 'message' in the parameters", function () {
      test("it calls 'EmberDebug.warn' method and does not insert invalid notification", function (assert) {
        // given
        const invalidNotification = {
          type: 'error',
        };
        // when
        toastService.addNotification(invalidNotification);

        // then
        sinon.assert.calledWith(
          EmberDebug.warn,
          'Mandatory attributes are missing: message and ariaLabel',
          true,
          {
            id: 'pix-ui.toast.not-message-or-ariaLabel',
          },
        );
        assert.ok(EmberDebug.warn.calledOnce);
        assert.strictEqual(toastService.content.length, 0);
      });
    });
  });

  module('#sendErrorNotification', function () {
    test("it adds a new toast object with type 'error' in content array", function (assert) {
      // given
      const notification = {
        ariaLabel: 'icon test label',
        message: 'test success message',
      };

      // when
      toastService.sendErrorNotification(notification);

      // then
      const expectedContent = { ...notification, type: 'error' };
      assert.strictEqual(toastService.content.length, 1);
      assert.deepEqual(toastService.content, [expectedContent]);
    });
  });

  module('#sendSuccessNotification', function () {
    test("it adds a new toast object with type 'success' in content array", function (assert) {
      // given
      const notification = {
        ariaLabel: 'icon test label',
        message: 'test success message',
      };

      // when
      toastService.sendSuccessNotification(notification);

      // then
      const expectedContent = { ...notification, type: 'success' };
      assert.strictEqual(toastService.content.length, 1);
      assert.deepEqual(toastService.content, [expectedContent]);
    });
  });

  module('#sendInformationNotification', function () {
    test("it adds a new toast object with type 'information' in content array", function (assert) {
      // given
      const notification = {
        ariaLabel: 'icon test label',
        message: 'test success message',
      };

      // when
      toastService.sendInformationNotification(notification);

      // then
      const expectedContent = { ...notification, type: 'information' };
      assert.strictEqual(toastService.content.length, 1);
      assert.deepEqual(toastService.content, [expectedContent]);
    });
  });

  module('#sendWarningNotification', function () {
    test("it adds a new toast object with type 'warning' in content array", function (assert) {
      // given
      const notification = {
        ariaLabel: 'icon test label',
        message: 'test success message',
      };

      // when
      toastService.sendWarningNotification(notification);

      // then
      const expectedContent = { ...notification, type: 'warning' };
      assert.strictEqual(toastService.content.length, 1);
      assert.deepEqual(toastService.content, [expectedContent]);
    });
  });

  module('#removeNotification', function () {
    test('it removes correct toast notification from content array', function (assert) {
      // given
      const ariaLabel = 'ariaLabel';
      const message = 'message';

      const notificationToBeRemove = {
        ariaLabel,
        message,
        type: 'success',
      };
      const errorNotification = {
        ariaLabel,
        message,
        type: 'error',
      };
      const informationNotification = {
        ariaLabel,
        message,
        type: 'information',
      };
      const warningNotification = {
        ariaLabel,
        message,
        type: 'error',
      };

      toastService.addNotification(notificationToBeRemove);
      toastService.addNotification(errorNotification);
      toastService.addNotification(informationNotification);
      toastService.addNotification(warningNotification);

      // when
      toastService.removeNotification(notificationToBeRemove);

      // then
      assert.strictEqual(toastService.content.length, 3);
      assert.deepEqual(toastService.content, [
        errorNotification,
        informationNotification,
        warningNotification,
      ]);
    });

    module('when toast notification does not exist', function () {
      test('it does nothing', function (assert) {
        // given
        const ariaLabel = 'ariaLabel';
        const message = 'message';

        const notExistingNotification = {
          ariaLabel,
          message,
          type: 'success',
        };
        const errorNotification = {
          ariaLabel,
          message,
          type: 'error',
        };

        toastService.addNotification(errorNotification);

        // when
        toastService.removeNotification(notExistingNotification);

        // then
        assert.strictEqual(toastService.content.length, 1);
        assert.deepEqual(toastService.content, [errorNotification]);
      });
    });

    module('when toast notification in parameter is undefined', function () {
      test('it does nothing', function (assert) {
        // given
        const ariaLabel = 'ariaLabel';
        const message = 'message';

        const errorNotification = {
          ariaLabel,
          message,
          type: 'error',
        };

        toastService.addNotification(errorNotification);

        // when
        toastService.removeNotification(undefined);

        // then
        assert.strictEqual(toastService.content.length, 1);
        assert.deepEqual(toastService.content, [errorNotification]);
      });
    });
  });
});
