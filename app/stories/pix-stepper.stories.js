import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Navigation/Stepper',
  tags: ['new'],
  argTypes: {
    steps: {
      name: 'steps',
      description:
        'Liste des étapes du stepper. Chaque étape est un objet avec les propriétés `title` et `subtitle`.',
      type: { name: 'array', required: true },
      table: {
        type: { summary: 'Array<{ title: string, subtitle?: string }>' },
      },
    },
    currentStep: {
      name: 'currentStep',
      description: "Numéro de l'étape courante (commence à 1)",
      type: { name: 'number', required: true },
      control: { type: 'number', min: 1 },
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} />`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  steps: [
    { title: 'Informations', subtitle: 'Renseignez vos informations' },
    { title: 'Confirmation', subtitle: 'Vérifiez vos données' },
    { title: 'Validation', subtitle: 'Finalisez votre inscription' },
  ],
  currentStep: 1,
};

export const secondStep = Template.bind({});
secondStep.args = {
  steps: [
    { title: 'Informations', subtitle: 'Renseignez vos informations' },
    { title: 'Confirmation', subtitle: 'Vérifiez vos données' },
    { title: 'Validation', subtitle: 'Finalisez votre inscription' },
  ],
  currentStep: 2,
};

export const longStepper = Template.bind({});
longStepper.args = {
  steps: [
    { title: 'Étape 1', subtitle: 'Description de la première étape' },
    { title: 'Étape 2', subtitle: 'Description de la deuxième étape' },
    { title: 'Étape 3', subtitle: 'Description de la troisième étape' },
    { title: 'Étape 4', subtitle: 'Description de la quatrième étape' },
    { title: 'Étape 5', subtitle: 'Description de la cinquième étape' },
  ],
  currentStep: 3,
};

export const withoutSubtitle = Template.bind({});
withoutSubtitle.args = {
  steps: [{ title: 'Étape 1' }, { title: 'Étape 2' }, { title: 'Étape 3' }],
  currentStep: 2,
};
