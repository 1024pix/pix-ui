import { warn } from '@ember/debug';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class PixProgressBar extends Component {
  constructor(...args) {
    super(...args);
    warn('PixProgressBar: you need to provide a locale', this.args.locale, {
      id: 'pix-progress-bar.locale.required',
    });

    warn(
      'PixProgressBar: you need to provide a number value between 0 and 1',
      this.args.value >= 0 && this.args.value <= 1,
      {
        id: 'pix-progress-bar.value.type.incorrect',
      },
    );

    this.id = guidFor(this);
  }

  get percentageValue() {
    return Number(this.clampValue).toLocaleString(this.args.locale, { style: 'percent' });
  }

  get label() {
    const hasLabel = this.args.label && this.args.label.trim().length > 0;

    warn('PixProgressBar: you need to provide a valid label', hasLabel || this.args.isDecorative, {
      id: 'pix-progress-bar.label.required',
    });

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

  get clampValue() {
    return Math.max(Math.min(this.args.value, 1), 0);
  }

  <template>
    <div
      class="progress-bar {{this.themeMode}} {{this.colorClass}}"
      aria-hidden={{if @isDecorative "true"}}
      ...attributes
    >
      {{#unless @hidePercentage}}
        <div class="progress-bar__text" role="presentation">{{this.percentageValue}}</div>
      {{/unless}}
      <label for={{this.id}} class="screen-reader-only">{{@label}}</label>
      <progress
        class="progress-bar__bar"
        id={{this.id}}
        max="1"
        min="0"
        value={{this.clampValue}}
      >{{this.percentageValue}}</progress>
      {{#if @subtitle}}
        <p class="progress-bar__sub-title">{{@subtitle}}</p>
      {{/if}}
    </div>
  </template>
}
