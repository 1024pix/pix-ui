import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class PixProgressGauge extends Component {
  get progressValue() {
    if (!this.args.value || this.args.value < 0) {
      return 0;
    }

    return this.args.value > 100 ? 100 : this.args.value;
  }

  get valueGaugeStyle() {
    return htmlSafe(`width: ${this.progressValue}%`);
  }

  get hasSubtitle() {
    return !!this.args.subtitle;
  }

  get progressGaugeClass() {
    const availableColor = ['yellow', 'white'];

    const color =
      this.args.color && availableColor.includes(this.args.color) ? this.args.color : `yellow`;

    return `progress-gauge--${color}`;
  }
}
