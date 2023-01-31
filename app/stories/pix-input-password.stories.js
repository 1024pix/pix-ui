import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`<PixInputPassword
  @ariaLabel={{this.ariaLabel}}
  @id={{this.id}}
  @label={{this.label}}
  @information={{this.information}}
  @errorMessage={{this.errorMessage}}
  @prefix={{this.prefix}}
  @requiredLabel={{this.requiredLabel}}
  @validationStatus={{this.validationStatus}}
/>`,
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
  information: 'Une brève information',
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

export const argTypes = {
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
  label: {
    name: 'label',
    description: "Label de l'input. Requis si ariaLabel n'est pas définit.",
    type: { name: 'string', required: true },
  },
  ariaLabel: {
    name: 'ariaLabel',
    description: "L'action du champ, pour l'accessibilité. Requis si label n'est pas définit.",
    type: { name: 'string', required: true },
  },
  information: {
    name: 'information',
    description: 'Un descriptif complétant le label',
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
  requiredLabel: {
    name: 'requiredLabel',
    description:
      'Label indiquant que le champ est requis, le paramètre @label devient obligatoire avec ce paramètre.',
    type: { name: 'string', required: false },
    table: {
      type: { summary: 'string' },
    },
  },
};
