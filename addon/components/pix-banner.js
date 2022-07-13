import Component from '@glimmer/component';
const TYPE_INFO = 'information';
const TYPE_ERROR = 'error';
const TYPE_WARNING = 'warning';
const TYPE_COMMUNICATION = 'communication';
const TYPE_COMMUNICATION_ORGA = 'communication-orga';
const TYPE_COMMUNICATION_CERTIF = 'communication-certif';

const types = [
  TYPE_INFO,
  TYPE_ERROR,
  TYPE_WARNING,
  TYPE_COMMUNICATION,
  TYPE_COMMUNICATION_ORGA,
  TYPE_COMMUNICATION_CERTIF,
];

const icons = {
  [TYPE_INFO]: 'circle-info',
  [TYPE_ERROR]: 'triangle-exclamation',
  [TYPE_WARNING]: 'circle-exclamation',
  [TYPE_COMMUNICATION]: 'bullhorn',
  [TYPE_COMMUNICATION_ORGA]: 'bullhorn',
  [TYPE_COMMUNICATION_CERTIF]: 'bullhorn',
};

export default class PixBanner extends Component {
  get type() {
    return types.includes(this.args.type) ? this.args.type : TYPE_INFO;
  }

  get icon() {
    return icons[this.type];
  }

  get displayAction() {
    return this.args.actionLabel && this.args.actionUrl;
  }

  get isExternalLink() {
    return this.args.actionUrl.includes('/');
  }
}
