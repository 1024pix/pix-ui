import Component from '@glimmer/component';

export default class PixFilterBanner extends Component {
  get displayTitle() {
    return Boolean(this.args.title);
  }
}
