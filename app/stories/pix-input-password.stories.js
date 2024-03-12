import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Inputs/Password',
  argTypes: {
    id: {
      name: 'id',
      description: 'Identifiant du champ permettant de lui attacher un label',
      type: { name: 'string', required: true },
    },
    value: {
      name: 'value',
      description: "Valeur de l'input",
      type: { name: 'string', required: false },
    },
    validationStatus: {
      name: 'validationStatus',
      description:
        "Définit l'état du champ, neutre par défaut, en succès ou erreur selon l'action de l'utilisateur",
      type: { name: 'string', required: false },
      options: ['default', 'success', 'error'],
      control: { type: 'select' },
    },
    errorMessage: {
      name: 'errorMessage',
      description:
        "Affiche le message d'erreur donné. Doit s'accompagner du paramètre validationStatus en 'error'",
      type: { name: 'string', required: false },
    },
    prefix: {
      name: 'prefix',
      description: 'Affiche un préfixe avant la zone de saisie du champ',
      type: { name: 'string', required: false },
    },

    label: {
      name: 'label',
      description: 'Le label du champ',
      type: { name: 'string', required: true },
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
    labelSize: {
      name: 'labelSize',
      description: 'Correspond à la taille de la police du label.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: { type: 'select' },
      options: ['small', 'large', 'default'],
    },
    inlineLabel: {
      name: 'inlineLabel',
      description: 'Permet de ne pas afficher la marge pour les éléments de formulaire inline',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixInputPassword
  @id={{this.id}}
  @errorMessage={{this.errorMessage}}
  @prefix={{this.prefix}}
  @validationStatus={{this.validationStatus}}
  @labelSize={{this.labelSize}}
  @subLabel={{this.subLabel}}
  @inlineLabel={{this.inlineLabel}}
  @requiredLabel={{this.requiredLabel}}
  @screenReaderOnly={{this.screenReaderOnly}}
>
  <:label>{{this.label}}</:label>
</PixInputPassword>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'first-name',
  ariaLabel: 'Mot de passe',
};

export const withLabelAndInformation = Template.bind({});
withLabelAndInformation.args = {
  id: 'password',
  label: 'Mot de passe',
  subLabel: 'Une brève information',
};

export const errorState = Template.bind({});
errorState.args = {
  id: 'password',
  label: 'Mot de passe',
  errorMessage: "un message d'erreur",
  validationStatus: 'error',
};

export const successState = Template.bind({});
successState.args = {
  id: 'password',
  label: 'Mot de passe',
  validationStatus: 'success',
};

export const withPrefix = Template.bind({});
withPrefix.args = {
  id: 'password',
  label: 'Mot de passe',
  prefix: 'C -',
};

export const withRequiredLabel = Template.bind({});
withRequiredLabel.args = {
  id: 'password',
  label: 'Mot de passe',
  requiredLabel: 'Champ obligatoire',
};
