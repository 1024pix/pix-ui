import { warn } from '@ember/debug';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

export default class PixProgressBar extends Component {
  constructor(...args) {
    super(...args);

    warn(
      'PixProgressBar: you need to provide a number value between 0 and 1',
      this.args.value >= 0 && this.args.value <= 1,
      {
        id: 'pix-progress-bar.value.type.incorrect',
      },
    );

    warn('PixProgressBar: you need to provide a valid label', this.args.label, {
      id: 'pix-progress-bar.label.required',
    });

    this.id = guidFor(this);
  }

  get themeMode() {
    const availableMode = ['dark', 'light'];

    const themeMode =
      this.args.themeMode && availableMode.includes(this.args.themeMode)
        ? this.args.themeMode
        : 'light';

    return `pix-progress-bar--theme-${themeMode}`;
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

    return `pix-progress-bar--content-${color}`;
  }

  <template>
    <div class="pix-progress-bar {{this.themeMode}} {{this.colorClass}}" ...attributes>
      {{#unless @hidePercentage}}
        <div class="pix-progress-bar__text" role="presentation">{{@percentageValue}}</div>
      {{/unless}}
      <label for={{this.id}} class="screen-reader-only">{{@label}}</label>
      <progress
        class="pix-progress-bar__bar"
        id={{this.id}}
        max="1"
        min="0"
        value={{@value}}
      >{{@percentageValue}}</progress>
      {{#if @subtitle}}
        <p class="pix-progress-bar__sub-title">{{@subtitle}}</p>
      {{/if}}
    </div>
  </template>
}
