import Component from '@glimmer/component';

export default class PixActionButton extends Component {
  text = 'pix-action-button';

  get icon() {
    const defaultIcon = 'plus';
    return this.args.icon ? this.args.icon : defaultIcon;
  }
}
