import Component from '@glimmer/component';

export default class PixBannerComponent extends Component {
  get displayAction() {
    return this.args.actionLabel && this.args.actionUrl;
  }

  get isExternalLink() {
    return this.args.actionUrl.includes('/')
  }
}
