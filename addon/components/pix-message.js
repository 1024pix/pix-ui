import Component from '@glimmer/component';

const TYPE_INFO = 'info';
const TYPE_SUCCESS = 'success';
const TYPE_WARNING = 'warning';
const TYPE_ALERT = 'alert';

export default class PixMessage extends Component {
  get type() {
    const correctTypes = [TYPE_INFO, TYPE_SUCCESS, TYPE_WARNING, TYPE_ALERT];
    return correctTypes.includes(this.args.type) ? this.args.type : 'info';
  }

  get iconClass() {
    const classes = {
      [TYPE_INFO]: 'info-circle',
      [TYPE_SUCCESS]: 'check-circle',
      [TYPE_WARNING]: 'exclamation-circle',
      [TYPE_ALERT]: 'exclamation-triangle',
    };
    return classes[this.type];
  }
}
