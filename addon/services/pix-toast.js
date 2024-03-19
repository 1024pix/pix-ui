import Service from '@ember/service';
import { A } from '@ember/array';
import EmberObject from '@ember/object';

export default class ToastService extends Service {
  content = A();
  addNotification(options) {
    if (!options.message) {
      throw new Error('No notification message provided');
    }

    const notification = EmberObject.create({
      message: options.message,
      type: options.type || 'success',
      onClick: options.onClick,
      htmlContent: options.htmlContent || false,
    });

    this.content.pushObject(notification);

    return notification;
  }

  sendErrorNotification(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'error',
    });
  }

  sendSuccessNotification(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'success',
    });
  }

  sendInformationNotification(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'information',
    });
  }

  sendWarningNotification(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'warning',
    });
  }

  removeNotification(notification) {
    if (!notification) {
      return;
    }

    notification.set('dismiss', true);
  }
}
