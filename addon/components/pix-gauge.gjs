import { warn } from '@ember/debug';
import Component from '@glimmer/component';
import { eq } from 'ember-truth-helpers';

export default class PixGauge extends Component {
  get label() {
    warn('PixGauge: @label must be defined', !this.args.label, {
      id: 'pix-ui.gauge.label.not-defined',
    });
    return this.args.label;
  }

  get reachedLevel() {
    warn(
      'PixGauge: @reachedLevel must be between 0 and 8',
      this.args.reachedLevel <= 8 || this.args.reachedLevel >= 0,
      {
        id: 'pix-ui.gauge.reachedLevel.not-defined',
      },
    );
    return this.args.reachedLevel;
  }

  get maxLevel() {
    warn(
      'PixGauge: @maxLevel must be between 1 and 8',
      this.args.maxLevel <= 8 || this.args.maxLevel >= 1,
      {
        id: 'pix-ui.gauge.maxLevel.not-defined',
      },
    );
    return this.args.maxLevel;
  }

  get hideValues() {
    return this.args.hideValues ?? false;
  }

  get maxLevelPercentage() {
    return this.maxLevel / 8;
  }
  get viewBox() {
    if (this.args.isSmall) {
      return '0 22 200 32';
    }
    return '0 0 100% 70';
  }

  get reachedLevelPercentage() {
    return this.reachedLevel / 8;
  }

  get whiteAndPurpleGaugeRx() {
    return this.args.isSmall ? 12 : 20;
  }

  get whiteAndPurpleGaugesHeight() {
    return this.args.isSmall ? 24 : 40;
  }

  // background
  get greyGaugeRx() {
    return this.args.isSmall ? 16 : 24;
  }

  get backgroundHeight() {
    return this.args.isSmall ? 32 : 48;
  }

  get statsFontHeight() {
    return this.args.isSmall ? 18 : 26;
  }

  get gaugeWidths() {
    let reachedLevelWidth = this.gaugeWidthCSS(this.reachedLevelPercentage);
    let maxLevelWidth = this.gaugeWidthCSS(this.maxLevelPercentage);

    const levelDifference = Math.round((this.maxLevel - this.reachedLevel) * 10) / 10;

    const isMaxLevelInteger = this.maxLevel % 1 === 0;
    const spacingRem = isMaxLevelInteger ? 1.75 : 2.625;

    const isSpaceBetweenLevelsNarrow = this.args.isSmall
      ? levelDifference < 1.5
      : levelDifference < 0.5;

    if (!this.hideValues && levelDifference !== 0 && isSpaceBetweenLevelsNarrow) {
      if (this.maxLevel >= 7.5) {
        reachedLevelWidth = this.gaugeWidthCSS(this.maxLevelPercentage, `- ${spacingRem}rem`);
      } else {
        maxLevelWidth = this.gaugeWidthCSS(this.reachedLevelPercentage, `+ ${spacingRem}rem`);
      }
    }

    const reachedLevelMinWidth = `3rem`;
    const maxLevelMinWidth = `${reachedLevelMinWidth} + ${spacingRem}rem`;

    return {
      reachedLevel: this.gaugeAdaptativeWidthCSS(reachedLevelMinWidth, reachedLevelWidth),
      maxLevel: this.gaugeAdaptativeWidthCSS(maxLevelMinWidth, maxLevelWidth),
    };
  }

  gaugeWidthCSS = (levelPercentage, spacing = '') =>
    `calc(calc(100% - 8px) * ${levelPercentage} ${spacing})`;

  gaugeAdaptativeWidthCSS = (width, minWidth) => `max(${minWidth}, ${width})`;

  isLevelActive = (index) => {
    if (this.reachedLevel === 0 && index === 0) return true;
    const step = 8 / this.args.stepLabels.length;
    return index * step < this.reachedLevel && this.reachedLevel <= (index + 1) * step;
  };

  stepLabelX = (index) => {
    const stepStart = 1 / this.args.stepLabels.length;
    return `${stepStart * index + (1 / 2) * stepStart}`;
  };

  stepLineX = (index) => {
    const stepStart = 1 / this.args.stepLabels.length;
    return `${stepStart * index}`;
  };

  formatNumber = (str) => {
    const num = Number(str);
    const oneDigitNum = num.toFixed(1);
    if (oneDigitNum.toString().endsWith('0')) {
      return Math.ceil(oneDigitNum);
    }
    return oneDigitNum;
  };

  <template>
    <svg
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={{this.viewBox}}
      version="1.1"
      preserveAspectRatio="none"
      class="result-level-gauge {{if @isSmall 'result-level-gauge__small'}}"
      role="progressbar"
      aria-valuenow={{this.formatNumber this.reachedLevel}}
      aria-valuemin={{0}}
      aria-valuemax={{this.formatNumber this.maxLevel}}
      aria-valuetext={{this.label}}
      aria-label={{this.label}}
    >
      <title {{this.label}}></title>

      {{! gauge grey background}}
      <rect
        y={{22}}
        width="100%"
        height={{this.backgroundHeight}}
        rx={{this.greyGaugeRx}}
        class="result-level-gauge__background"
      />

      <g transform="translate(4, 0)">
        {{! template-lint-disable no-inline-styles style-concatenation }}
        {{! gauge white max level}}
        <rect
          y={{26}}
          width={{this.gaugeWidths.maxLevel}}
          height={{this.whiteAndPurpleGaugesHeight}}
          rx={{this.whiteAndPurpleGaugeRx}}
          class="result-level-gauge__max-bar"
        />
        {{#unless this.hideValues}}
          <g style="transform: translate({{this.gaugeWidths.maxLevel}})">
            <text
              y={{this.statsFontHeight}}
              x="0"
              dx={{-10}}
              dy={{26}}
              class="result-level-gauge__max-value"
              aria-hidden={{this.hideValues}}
            >{{this.formatNumber @maxLevel}}</text>
          </g>
        {{/unless}}
        {{! mean purple level }}
        <rect
          y={{26}}
          width={{this.gaugeWidths.reachedLevel}}
          height={{this.whiteAndPurpleGaugesHeight}}
          rx={{this.whiteAndPurpleGaugeRx}}
          class="result-level-gauge__mean-bar"
        />
        {{#unless this.hideValues}}
          <g style="transform: translate({{this.gaugeWidths.reachedLevel}})">
            <text
              y={{this.statsFontHeight}}
              x="0"
              dx={{-10}}
              dy={{26}}
              class="result-level-gauge__mean-value"
              aria-hidden={{this.hideValues}}
            >{{this.formatNumber @reachedLevel}}</text>
          </g>
        {{/unless}}
        {{! level labels }}
        {{#unless @isSmall}}
          {{#each @stepLabels as |stepLabel index|}}
            <g style="transform: translate(calc(calc(100% - 8px) * {{this.stepLabelX index}}))">
              <text
                y={{15}}
                class="result-level-gauge__rank
                  {{if (this.isLevelActive index) 'result-level-gauge__rank--active'}}"
              >{{stepLabel}}</text>
            </g>
            {{#unless (eq index 0)}}
              <g style="transform: translate(calc(100% * {{this.stepLineX index}}))">
                <line
                  x1="0"
                  y1={{7}}
                  x2="0"
                  y2="74.6641"
                  stroke-width={{2}}
                  stroke-linecap="round"
                  stroke-dasharray="2 8"
                  class="result-level-gauge__separator"
                  role="separator"
                />
              </g>
            {{/unless}}
          {{/each}}
        {{/unless}}
      </g>
    </svg>
  </template>
}
