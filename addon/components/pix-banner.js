import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
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
  [TYPE_INFO]: 'info',
  [TYPE_ERROR]: 'error',
  [TYPE_WARNING]: 'warning',
  [TYPE_COMMUNICATION]: 'campaign',
  [TYPE_COMMUNICATION_ORGA]: 'campaign',
  [TYPE_COMMUNICATION_CERTIF]: 'campaign',
};

export default class PixBanner extends Component {
  @tracked isBannerVisible = true;
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

  get canCloseBanner() {
    return this.args.canCloseBanner;
  }

  get displayBanner() {
    return this.isBannerVisible;
  }

  @action
  async closeBanner(params) {
    if (this.args.onCloseBannerTriggerAction) {
      await this.args.onCloseBannerTriggerAction(params);
    }
    this.isBannerVisible = false;
  }
}
