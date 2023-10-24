import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { warn } from '@ember/debug';
const TYPE_SUCCESS = 'success';
const TYPE_ERROR = 'error';
const TYPE_INFORMATION = 'information';
const TYPE_WARNING = 'warning';

export default class PixToast extends Component {
  @service pixToast;

  get type() {
    const correctTypes = [TYPE_SUCCESS, TYPE_ERROR, TYPE_INFORMATION, TYPE_WARNING];
    warn('PixToast: you need to provide a type', correctTypes.includes(this.args.toast?.type), {
      id: 'pix-ui.toast.type.not-provided',
    });
    return this.args.toast?.type ?? 'success';
  }

  get iconClass() {
    const classes = {
      [TYPE_INFORMATION]: 'info',
      [TYPE_SUCCESS]: 'checkCircle',
      [TYPE_WARNING]: 'warning',
      [TYPE_ERROR]: 'error',
    };
    return classes[this.type];
  }

  @action
  removeNotification(event) {
    event.preventDefault();
    event.stopPropagation();
    this.pixToast.removeNotification(this.args.toast);
  }
}
