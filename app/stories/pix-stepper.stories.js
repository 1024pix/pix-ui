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
    texts: {
      name: 'texts',
      description: 'object contenant les traductions du composant',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: JSON.stringify({
            ariaLabel: 'texte contenant la traduction pour la propriété ariaLabel',
          }),
        },
      },
    },
    onStepClick: {
      name: 'onStepClick',
      description:
        "Callback appelé avec le numéro de l'étape au clic. Active le mode navigation. Sans cette prop, le composant est non-interactif.",
      type: { name: 'function' },
      table: {
        type: { summary: '(stepNumber: number) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    canNavigateTo: {
      name: 'canNavigateTo',
      description:
        'Fonction optionnelle qui détermine si une étape est cliquable. Sans cette prop, toutes les étapes sont cliquables dès que `@onStepClick` est fourni.',
      type: { name: 'function' },
      table: {
        type: { summary: '(stepNumber: number) => boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixStepper @steps={{this.steps}} @currentStep={{this.currentStep}} @texts={{this.texts}} />`,
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
  texts: {
    ariaLabel: 'étape 1 sur 3',
  },
};

export const secondStep = Template.bind({});
secondStep.args = {
  steps: [
    { title: 'Informations', subtitle: 'Renseignez vos informations' },
    { title: 'Confirmation', subtitle: 'Vérifiez vos données' },
    { title: 'Validation', subtitle: 'Finalisez votre inscription' },
  ],
  currentStep: 2,
  texts: {
    ariaLabel: 'étape 2 sur 3',
  },
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
  texts: {
    ariaLabel: 'étape 3 sur 5',
  },
};

export const withoutSubtitle = Template.bind({});
withoutSubtitle.args = {
  steps: [{ title: 'Étape 1' }, { title: 'Étape 2' }, { title: 'Étape 3' }],
  currentStep: 2,
  texts: {
    ariaLabel: 'étape 2 sur 3',
  },
};

const NavigableTemplate = (args) => {
  return {
    template: hbs`<PixStepper
  @steps={{this.steps}}
  @currentStep={{this.currentStep}}
  @texts={{this.texts}}
  @onStepClick={{fn (mut this.currentStep)}}
/>`,
    context: args,
  };
};

export const navigable = NavigableTemplate.bind({});
navigable.args = {
  steps: [
    { title: 'Informations', subtitle: 'Renseignez vos informations' },
    { title: 'Confirmation', subtitle: 'Vérifiez vos données' },
    { title: 'Validation', subtitle: 'Finalisez votre inscription' },
    { title: 'Finalisation', subtitle: 'Complétez votre dossier' },
  ],
  currentStep: 3,
  texts: {
    ariaLabel: 'étape 3 sur 4',
  },
};

const NavigableWithRestrictionTemplate = (args) => {
  return {
    template: hbs`<PixStepper
  @steps={{this.steps}}
  @currentStep={{this.currentStep}}
  @texts={{this.texts}}
  @onStepClick={{fn (mut this.currentStep)}}
  @canNavigateTo={{this.canNavigateTo}}
/>`,
    context: args,
  };
};

export const navigableWithRestriction = NavigableWithRestrictionTemplate.bind({});
navigableWithRestriction.args = {
  steps: [
    { title: 'Informations', subtitle: 'Renseignez vos informations' },
    { title: 'Confirmation', subtitle: 'Vérifiez vos données' },
    { title: 'Validation', subtitle: 'Finalisez votre inscription' },
    { title: 'Finalisation', subtitle: 'Complétez votre dossier' },
  ],
  currentStep: 3,
  texts: {
    ariaLabel: 'étape 3 sur 4',
  },
  canNavigateTo: (n) => n > 1 && n < 3,
};
