import Component from '@glimmer/component';

const TYPE_SUCCESS = 'success';
const TYPE_ERROR = 'error';
const TYPE_INFORMATION = 'information';
const TYPE_WARNING = 'warning';

export default class PixToast extends Component {
  get type() {
    const error = console.warn('ERROR in PixToast component, you need to provide a type.');
    const correctTypes = [TYPE_SUCCESS, TYPE_ERROR, TYPE_INFORMATION, TYPE_WARNING];
    return correctTypes.includes(this.args.type) ? this.args.type : error;
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
}
