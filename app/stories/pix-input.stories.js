import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`<PixInput
  @id={{this.id}}
  @label={{this.label}}
  @information={{this.information}}
  @errorMessage={{this.errorMessage}}
  placeholder='Jeanne, Pierre ...'
  @requiredLabel={{this.requiredLabel}}
  @ariaLabel={{this.ariaLabel}}
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

export const withErrorMessage = Template.bind({});
withErrorMessage.args = {
  id: 'first-name',
  label: 'Prénom',
  information: 'a small information',
  errorMessage: "un message d'erreur",
};

export const withRequiredLabel = Template.bind({});
withRequiredLabel.args = {
  id: 'first-name',
  label: 'Prénom',
  requiredLabel: 'Champ obligatoire',
};

export const argTypes = {
  ariaLabel: {
    name: 'ariaLabel',
    description: "L'action du champ, pour l'accessibilité. Requis si label n'est pas définit.",
    type: { name: 'string', required: true },
  },
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
  errorMessage: {
    name: 'errorMessage',
    description: "Affiche le message d'erreur donné et encadre en rouge le champ",
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
