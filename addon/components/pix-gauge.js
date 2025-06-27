import { warn } from '@ember/debug';
import Component from '@glimmer/component';

import { formatNumber } from '../translations';

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

  get maxLevelPourcentage() {
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

  formatNumber = (str) => formatNumber(this.args.locale ?? 'fr', Number(str).toFixed(1));
}
