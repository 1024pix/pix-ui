import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Forms/Code',
  argTypes: {
    id: {
      name: 'id',
      description: 'Identifiant du champ permettant de lui attacher un label',
      type: { name: 'string', required: true },
    },
    length: {
      name: 'length',
      description: 'Correspond au nombre de caractères attendu dans le champ',
      type: { name: 'number', required: true },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    validationStatus: {
      name: 'validationStatus',
      description:
        "Définit l'état du champ, neutre par défaut ou en erreur selon l'action de l'utilisateur",
      type: { name: 'string', required: false },
      options: ['default', 'error'],
      control: { type: 'select' },
    },
    errorMessage: {
      name: 'errorMessage',
      description:
        "Affiche le message d'erreur donné. Doit s'accompagner du paramètre validationStatus en 'error'",
      type: { name: 'string', required: false },
    },
    label: {
      name: 'label',
      description: 'Le label du champ',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    subLabel: {
      name: 'subLabel',
      description: 'Un descriptif complétant le label',
      type: { name: 'string', required: false },
    },
    requiredLabel: {
      name: 'requiredLabel',
      description: 'Label indiquant que le champ est requis.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    screenReaderOnly: {
      name: 'screenReaderOnly',
      description: "Permet de rendre le label lisible uniquement par les lecteurs d'écran",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixCode
  @length={{this.length}}
  @errorMessage={{this.errorMessage}}
  @validationStatus={{this.validationStatus}}
  @label={{this.label}}
  @requiredLabel={{this.requiredLabel}}
  @subLabel={{this.subLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
</PixCode>`,
    context: args,
  };
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  length: 10,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  length: 8,
  label: 'Code de vérification',
  subLabel: 'Exemple: P-XXXXXXXX',
};

export const Error = Template.bind({});
Error.args = {
  length: 6,
  label: 'Code de certification',
  errorMessage: "un message d'erreur",
  validationStatus: 'error',
};
