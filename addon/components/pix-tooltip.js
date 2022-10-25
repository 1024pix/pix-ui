import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PixTooltip extends Component {
  get position() {
    const correctsPosition = [
      'top',
      'right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'top-left',
      'top-right',
    ];
    return correctsPosition.includes(this.args.position) ? this.args.position : 'top';
  }

  get display() {
    return typeof this.args.hide === 'undefined' || !this.args.hide;
  }

  @action
  showTooltip(event) {
    event.target.classList.add('pix-tooltip--visible');
  }

  @action
  hideTooltip(event) {
    event.target.classList.remove('pix-tooltip--visible');
  }

  @action
  hideTooltipOnMouseOut(event) {
    const isFocused = document.activeElement === event.target;

    if (isFocused) {
      return;
    }

    this.hideTooltip(event);
  }
}
