import Component from '@glimmer/component';

export default class PixTooltip extends Component {
  get position() {
    const correctsPosition = ['top', 'right', 'bottom', 'left'];
    return correctsPosition.includes(this.args.position) ? this.args.position : 'top';
  }

  get inlineClass() {
    const inlineInString = this.args.inline ? this.args.inline.toString() : '';
    return inlineInString == 'true' ? 'pix-tooltip__content--no-wrap' : '';
  }
}

