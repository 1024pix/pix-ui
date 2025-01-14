import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class PixIndicatorCard extends Component {
  id = guidFor(this);
  iconId = 'icon-' + this.id;
  tooltipId = 'tooltip-' + this.id;

  get color() {
    const { color } = this.args;
    if (!color) return `indicator-card__icon-wrapper--grey`;
    return `indicator-card__icon-wrapper--${color}`;
  }
}
