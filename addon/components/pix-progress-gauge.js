import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class PixProgressGauge extends Component {
  get id() {
    return guidFor(this);
  }

  get value() {
    if (Number(this.args.value) <= 0) return 0;
    if (Number(this.args.value) > 100) return 100;
    if (!this.args.value) {
      throw new Error('ERROR in PixProgressGauge component, @value param is not provided.');
    }
    return Number(this.args.value);
  }

  get percentageValue() {
    return Number(this.value / 100).toLocaleString(navigator.language, { style: 'percent' });
  }

  get label() {
    if (!this.args.label || !this.args.label.trim()) {
      throw new Error('ERROR in PixProgressGauge component, @label param is not provided.');
    }
    return this.args.label;
  }

  get themeMode() {
    const availableMode = ['dark', 'light'];

    const themeMode =
      this.args.themeMode && availableMode.includes(this.args.themeMode)
        ? this.args.themeMode
        : 'light';

    return `progress-gauge--theme-${themeMode}`;
  }

  get colorClass() {
    const availableColor = [
      'primary',
      'success',
      'tertiary',
      // deprecated color
      'blue',
      'green',
      'purple',
    ];

    const color =
      this.args.color && availableColor.includes(this.args.color) ? this.args.color : 'primary';

    return `progress-gauge--content-${color}`;
  }
}
