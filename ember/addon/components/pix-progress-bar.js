import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class PixProgressBar extends Component {
  get id() {
    return guidFor(this);
  }

  get value() {
    if (Number(this.args.value) <= 0) return 0;
    if (Number(this.args.value) > 100) return 100;
    if (!this.args.value) {
      throw new Error('ERROR in PixProgressBar component, @value param is not provided.');
    }
    return Number(this.args.value);
  }

  get percentageValue() {
    return Number(this.value / 100).toLocaleString(navigator.language, { style: 'percent' });
  }

  get label() {
    const thereIsNoLabel = !this.args.label || !this.args.label.trim();

    if (thereIsNoLabel && !this.args.isDecorative) {
      throw new Error('ERROR in PixProgressBar component, @label param is not provided.');
    }
    return this.args.label;
  }

  get themeMode() {
    const availableMode = ['dark', 'light'];

    const themeMode =
      this.args.themeMode && availableMode.includes(this.args.themeMode)
        ? this.args.themeMode
        : 'light';

    return `progress-bar--theme-${themeMode}`;
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

    return `progress-bar--content-${color}`;
  }
}
