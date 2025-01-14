import { warn } from '@ember/debug';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ToastService extends Service {
  @tracked content = [];

  /**
   * Creates and returns a new toast notification.
   * @param{string} message content to display
   * @param{'error' | 'information' | 'success' | 'warning'} type type of toast notification
   * @returns {EmberObject | void}
   */
  addNotification({ message, type }) {
    const isToastValid = Boolean(message);

    warn('Message mandatory attribute is missing', isToastValid, {
      id: 'pix-ui.toast.not-message',
    });

    if (!isToastValid) return;

    const toast = {
      message,
      type: type || 'success',
    };

    if (this.exists(toast)) {
      this.removeNotification(toast);
    }

    this.content = [...this.content, toast];

    return toast;
  }

  /**
   * Check if toast already exist in content array
   * @param{{message: string, type: string}} toast
   * @returns {boolean}
   */
  exists(toast) {
    return Boolean(
      this.content.find((value) => toast.message === value.message && toast.type === value.type),
    );
  }

  /**
   * Creates and returns a new error toast notification.
   * @param{string} message content to display
   * @returns {EmberObject | void}
   */
  sendErrorNotification({ message }) {
    return this.addNotification({
      message,
      type: 'error',
    });
  }

  /**
   * Creates and returns a new success toast notification.
   * @param{string} message content to display
   * @returns {EmberObject | void}
   */
  sendSuccessNotification({ message }) {
    return this.addNotification({
      message,
      type: 'success',
    });
  }

  /**
   * Creates and returns a new information toast notification.
   * @param{string} message content to display
   * @returns {EmberObject | void}
   */
  sendInformationNotification({ message }) {
    return this.addNotification({
      message,
      type: 'information',
    });
  }

  /**
   * Creates and returns a new warning toast notification.
   * @param{string} message content to display
   * @returns {EmberObject | void}
   */
  sendWarningNotification({ message }) {
    return this.addNotification({
      message,
      type: 'warning',
    });
  }

  /**
   * Remove toast notification from content list
   * @param{{message: string, type: string}} toast toast to remove
   * @returns {EmberObject | void}
   */
  removeNotification(toast) {
    if (!toast) return;

    this.content = this.content.filter(
      (value) => toast.message !== value.message || toast.type !== value.type,
    );
  }
}
