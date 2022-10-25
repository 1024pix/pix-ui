import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PixTooltip extends Component {
  @tracked isVisible = false;

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
  showTooltip() {
    this.isVisible = true;
  }

  @action
  hideTooltip() {
    this.isVisible = false;
  }

  @action
  hideTooltipOnMouseOut(event) {
    const isFocused = event.target.contains(document.activeElement);

    if (isFocused) {
      return;
    }

    this.hideTooltip(event);
  }
}
