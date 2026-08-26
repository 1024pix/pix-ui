import { warn } from '@ember/debug';
import Component from '@glimmer/component';
import { eq } from 'ember-truth-helpers';

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

  get currentStepIndex() {
    return this.args.currentStep - 1;
  }

  <template>
    <ol class={{this.cssClass}} role="list" ...attributes aria-label={{@texts.ariaLabel}}>
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
