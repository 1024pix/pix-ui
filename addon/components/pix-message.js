import Component from '@glimmer/component';

const TYPE_INFO = 'info';
const TYPE_SUCCESS = 'success';
const TYPE_WARNING = 'warning';
const TYPE_ERROR = 'error';

export default class PixMessage extends Component {
  get type() {
    const correctTypes = [TYPE_INFO, TYPE_SUCCESS, TYPE_WARNING, TYPE_ERROR];

    return correctTypes.includes(this.args.type) ? this.args.type : 'info';
  }

  get iconName() {
    const classes = {
      [TYPE_INFO]: 'info',
      [TYPE_SUCCESS]: 'checkCircle',
      [TYPE_WARNING]: 'warning',
      [TYPE_ERROR]: 'error',
    };
    return classes[this.type];
  }
}
