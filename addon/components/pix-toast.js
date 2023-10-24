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
    warn('PixToast: you need to provide a type', [correctTypes].includes(this.args.type), {
      id: 'pix-ui.toast.type.not-provided',
    });
    return this.args.type ?? 'success';
  }

  get iconClass() {
    const classes = {
      [TYPE_SUCCESS]: 'circle-check',
      [TYPE_ERROR]: 'circle-exclamation',
      [TYPE_INFORMATION]: 'circle-info',
      [TYPE_WARNING]: 'triangle-exclamation',
    };
    return classes[this.type];
  }

  @action
  removeNotification(event) {
    event.preventDefault();
    event.stopPropagation();
    this.pixToast.removeNotification(this.pixToast.content);
  }
}
