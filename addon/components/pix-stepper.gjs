import Component from '@glimmer/component';
import { eq } from 'ember-truth-helpers';

import { formatMessage } from '../translations';
import PixStep from './pix-step';

export default class PixStepperComponent extends Component {
  get cssClass() {
    const classes = ['pix-stepper'];

    if (this.args.steps.length > 3) {
      classes.push('pix-stepper--long');
    }

    return classes.join(' ');
  }

  get currentStepIndex() {
    return this.args.currentStep - 1;
  }

  get ariaLabel() {
    return formatMessage(this.args.locale ?? 'fr', 'stepper.ariaLabel', {
      current: this.args.currentStep,
      total: this.args.steps.length,
    });
  }

  <template>
    <ol class={{this.cssClass}} role="list" aria-label={{this.ariaLabel}} ...attributes>
      {{#each @steps as |step index|}}
        <PixStep
          @index={{index}}
          @title={{step.title}}
          @subtitle={{step.subtitle}}
          @isCurrent={{eq index this.currentStepIndex}}
        />
      {{/each}}
    </ol>
  </template>
}
