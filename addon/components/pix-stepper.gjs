import { warn } from '@ember/debug';
import { fn } from '@ember/helper';
import Component from '@glimmer/component';

import PixStep from './pix-step';

export default class PixStepperComponent extends Component {
  constructor(...args) {
    super(...args);
    warn(
      'PixStepper: @texts attribute is mandatory for accessibility.',
      Boolean(this.args.texts?.ariaLabel),
      {
        id: 'pix-ui.stepper-component.texts.mandatory',
      },
    );
  }

  get cssClass() {
    const classes = ['pix-stepper'];

    if (this.args.steps.length > 3) {
      classes.push('pix-stepper--long');
    }

    return classes.join(' ');
  }

  get stepsWithState() {
    const { onStepClick, canNavigateTo, steps, currentStep } = this.args;
    const currentStepIndex = currentStep - 1;

    return steps.map((step, index) => {
      const stepNumber = index + 1;
      const isClickable = onStepClick ? (canNavigateTo ? canNavigateTo(stepNumber) : true) : false;

      return { ...step, stepNumber, isCurrent: index === currentStepIndex, isClickable };
    });
  }

  <template>
    <ol class={{this.cssClass}} role="list" ...attributes aria-label={{@texts.ariaLabel}}>
      {{#each this.stepsWithState as |step index|}}
        <PixStep
          @index={{index}}
          @title={{step.title}}
          @subtitle={{step.subtitle}}
          @isCurrent={{step.isCurrent}}
          @isClickable={{step.isClickable}}
          @onClick={{if step.isClickable (fn @onStepClick step.stepNumber)}}
        />
      {{/each}}
    </ol>
  </template>
}
