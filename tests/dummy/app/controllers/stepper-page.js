import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class StepperPage extends Controller {
  steps = [
    { title: 'Étape 1', subtitle: "Ceci est l'étape 1" },
    { title: 'Étape 2', subtitle: "Ceci est l'étape 2" },
    { title: 'Étape 3', subtitle: "Ceci est l'étape 3" },
    { title: 'Étape 4', subtitle: "Ceci est l'étape 4" },
  ];

  @tracked currentStep = 3;

  get canNavigateTo() {
    const current = this.currentStep;
    return (stepNumber) => stepNumber < current;
  }

  @action
  goToStep(stepNumber) {
    this.currentStep = stepNumber;
  }
}
