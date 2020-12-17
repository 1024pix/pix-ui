import Component from '@glimmer/component';

export default class PixBanner extends Component {
  get displayAction() {
    return this.args.actionLabel && this.args.actionUrl;
  }

  get isExternalLink() {
    return this.args.actionUrl.includes('/')
  }
}
