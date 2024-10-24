import EmberObject from '@ember/object';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { warn } from '@ember/debug';

export default class ToastService extends Service {
  @tracked content = [];

  /**
   * Creates and returns a new toast notification.
   * @param{string} message content to display
   * @param{string} ariaLabel aria label of the toast icon
   * @param{'error' | 'information' | 'success' | 'warning'} type type of toast notification
   * @returns {EmberObject | void}
   */
  addNotification({ message, ariaLabel, type }) {
    const isToastValid = Boolean(message && ariaLabel);

    warn('Mandatory attributes are missing: message and ariaLabel', isToastValid, {
      id: 'pix-ui.toast.not-message-or-ariaLabel',
    });

    if (!isToastValid) return;

    const toast = EmberObject.create({
      ariaLabel,
      message,
      type: type || 'success',
    });

    this.content = [...this.content, toast];

    return toast;
  }

  /**
   * Creates and returns a new error toast notification.
   * @param{string} message content to display
   * @param{string} ariaLabel aria label of the toast icon
   * @returns {EmberObject | void}
   */
  sendErrorNotification({ message, ariaLabel }) {
    return this.addNotification({
      ariaLabel,
      message,
      type: 'error',
    });
  }

  /**
   * Creates and returns a new success toast notification.
   * @param{string} message content to display
   * @param{string} ariaLabel aria label of the toast icon
   * @returns {EmberObject | void}
   */
  sendSuccessNotification({ message, ariaLabel }) {
    return this.addNotification({
      ariaLabel,
      message,
      type: 'success',
    });
  }

  /**
   * Creates and returns a new information toast notification.
   * @param{string} message content to display
   * @param{string} ariaLabel aria label of the toast icon
   * @returns {EmberObject | void}
   */
  sendInformationNotification({ message, ariaLabel }) {
    return this.addNotification({
      ariaLabel,
      message,
      type: 'information',
    });
  }

  /**
   * Creates and returns a new warning toast notification.
   * @param{string} message content to display
   * @param{string} ariaLabel aria label of the toast icon
   * @returns {EmberObject | void}
   */
  sendWarningNotification({ message, ariaLabel }) {
    return this.addNotification({
      ariaLabel,
      message,
      type: 'warning',
    });
  }

  /**
   * Remove toast notification from content list
   * @param{{message: string, ariaLabel: string, type: string}} toast toast to remove
   * @returns {EmberObject | void}
   */
  removeNotification(toast) {
    if (!toast) return;
    console.log(toast);
    const toastIndex = this.content.findIndex(
      (value) =>
        toast.ariaLabel === value.ariaLabel &&
        toast.message === value.message &&
        toast.type === value.type,
    );

    if (toastIndex < 0) return;

    this.content.splice(toastIndex, 1);
    this.content = [...this.content];
  }
}
