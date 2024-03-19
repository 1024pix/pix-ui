import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
const TYPE_SUCCESS = 'success';
const TYPE_ERROR = 'error';
const TYPE_INFORMATION = 'information';
const TYPE_WARNING = 'warning';

export default class PixToast extends Component {
  @service toast;

  get type() {
    const correctTypes = [TYPE_SUCCESS, TYPE_ERROR, TYPE_INFORMATION, TYPE_WARNING];
    const isACorrectType = correctTypes.includes(this.args.type);
    if (!isACorrectType) {
      throw new Error('ERROR in PixToast component, you need to provide a type.');
    }
    return this.args.type;
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
    this.toast.removeNotification(this.toast);
  }
}
