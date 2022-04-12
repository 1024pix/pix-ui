import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixInput
        @id={{id}}
        @label={{label}}
        @information={{information}}
        @errorMessage={{errorMessage}}
        placeholder='Jeanne, Pierre ...'
        @requiredLabel={{requiredLabel}}
        @ariaLabel={{ariaLabel}}
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'firstName',
  ariaLabel: 'Prénom',
};

export const withLabel = Template.bind({});
withLabel.args = {
  id: 'firstName',
  label: 'Prénom',
  information: 'a small information',
};

export const withErrorMessage = Template.bind({});
withErrorMessage.args = {
  id: 'firstName',
  label: 'Prénom',
  information: 'a small information',
  errorMessage: "un message d'erreur",
};

export const withRequiredLabel = Template.bind({});
withRequiredLabel.args = {
  id: 'firstName',
  label: 'Prénom',
  requiredLabel: 'Champ obligatoire',
};

export const argTypes = {
  ariaLabel: {
    name: 'ariaLabel',
    description: "L'action du champ, pour l'accessibilité. Requis si label n'est pas définit.",
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  id: {
    name: 'id',
    description: 'Identifiant du champ permettant de lui attacher un label',
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  value: {
    name: 'value',
    description: "Valeur de l'input",
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  label: {
    name: 'label',
    description: "Le label de l'input",
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  information: {
    name: 'information',
    description: 'Un descriptif complétant le label',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  errorMessage: {
    name: 'errorMessage',
    description: "Affiche le message d'erreur donné et encadre en rouge le champ",
    type: { name: 'string', required: false },
    defaultValue: null,
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
