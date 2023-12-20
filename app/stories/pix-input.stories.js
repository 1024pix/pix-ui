import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Inputs/Input',
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
    label: {
      name: 'label',
      description: "Le label de l'input",
      type: { name: 'string', required: false },
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
    requiredLabel: {
      name: 'requiredLabel',
      description:
        'Label indiquant que le champ est requis, le paramètre @label devient obligatoire avec ce paramètre.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
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
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixInput
  @id={{this.id}}
  @label={{this.label}}
  @information={{this.information}}
  @errorMessage={{this.errorMessage}}
  placeholder='Jeanne, Pierre ...'
  @requiredLabel={{this.requiredLabel}}
  @validationStatus={{this.validationStatus}}
  @labelSize={{this.labelSize}}
  disabled={{this.disabled}}
  readonly={{this.readonly}}
/>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'first-name',
  ariaLabel: 'Prénom',
};

export const withLabel = Template.bind({});
withLabel.args = {
  id: 'first-name',
  label: 'Prénom',
  information: 'a small information',
};

export const errorState = Template.bind({});
errorState.args = {
  id: 'first-name',
  label: 'Prénom',
  errorMessage: "un message d'erreur",
  validationStatus: 'error',
};

export const successState = Template.bind({});
successState.args = {
  id: 'first-name',
  label: 'Prénom',
  validationStatus: 'success',
};

export const disabledState = Template.bind({});
disabledState.args = {
  id: 'first-name',
  label: 'Prénom',
  disabled: true,
};

export const readonlyState = Template.bind({});
readonlyState.args = {
  id: 'first-name',
  label: 'Prénom',
  readonly: true,
};

export const withRequiredLabel = Template.bind({});
withRequiredLabel.args = {
  id: 'first-name',
  label: 'Prénom',
  requiredLabel: 'Champ obligatoire',
};
