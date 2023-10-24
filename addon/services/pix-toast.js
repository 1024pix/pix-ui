import Service from '@ember/service';
import EmberObject from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ToastService extends Service {
  @tracked content = undefined;

  addNotification({ message, ariaLabel, type }) {
    if (!message || !ariaLabel) {
      throw new Error('Mandatory attributes are missing: message and ariaLabel');
    }

    const toast = EmberObject.create({
      ariaLabel,
      message,
      type: type || 'success',
    });

    this.content = toast;

    return toast;
  }

  sendErrorNotification({ message, ariaLabel }) {
    return this.addNotification({
      ariaLabel,
      message,
      type: 'error',
    });
  }

  sendSuccessNotification({ message, ariaLabel }) {
    return this.addNotification({
      ariaLabel,
      message,
      type: 'success',
    });
  }

  sendInformationNotification({ message, ariaLabel }) {
    return this.addNotification({
      ariaLabel,
      message,
      type: 'information',
    });
  }

  sendWarningNotification({ message, ariaLabel }) {
    return this.addNotification({
      ariaLabel,
      message,
      type: 'warning',
    });
  }

  removeNotification(toast) {
    if (!toast) {
      return;
    }

    this.content = undefined;
  }
}
