import Component from '@glimmer/component';

const TYPE_INFO = 'info';
const TYPE_SUCCESS = 'success';
const TYPE_WARNING = 'warning';
const TYPE_ALERT = 'alert';
const TYPE_ERROR = 'error';

export default class PixMessage extends Component {
  get type() {
    const correctTypes = [TYPE_INFO, TYPE_SUCCESS, TYPE_WARNING, TYPE_ALERT, TYPE_ERROR];
    if (this.args.type === 'alert') {
      console.warn(
        'ERROR in PixMessage component, "alert" type is deprecated. Use "error" type instead.',
      );
    }
    return correctTypes.includes(this.args.type) ? this.args.type : 'info';
  }

  get iconClass() {
    const classes = {
      [TYPE_INFO]: 'circle-info',
      [TYPE_SUCCESS]: 'circle-check',
      [TYPE_WARNING]: 'circle-exclamation',
      [TYPE_ALERT]: 'triangle-exclamation',
      [TYPE_ERROR]: 'triangle-exclamation',
    };
    return classes[this.type];
  }
}
