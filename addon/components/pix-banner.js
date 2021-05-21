import Component from '@glimmer/component';
const TYPE_INFO = 'information';
const TYPE_ERROR = 'error';
const TYPE_WARNING = 'warning';
const TYPE_COMMUNICATION = 'communication';

const types = [TYPE_INFO, TYPE_ERROR, TYPE_WARNING, TYPE_COMMUNICATION];
const icons = {
  [TYPE_INFO]: 'info-circle',
  [TYPE_ERROR]: 'exclamation-triangle',
  [TYPE_WARNING]: 'exclamation-circle',
  [TYPE_COMMUNICATION]: 'bullhorn',
};

export default class PixBanner extends Component {
  get type() {
    return types.includes(this.args.type) ? this.args.type : TYPE_INFO;
  }
  
  get icon() {
    return icons[this.type];
  }

  get classNames() {
    let classes = types.includes(this.args.type) ? this.args.type : TYPE_INFO;
    if (this.args.color) classes += `--${this.args.color}`;
    return classes;
  }

  get displayAction() {
    return this.args.actionLabel && this.args.actionUrl;
  }

  get isExternalLink() {
    return this.args.actionUrl.includes('/')
  }
}
