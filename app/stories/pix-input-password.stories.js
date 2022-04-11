import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixInputPassword
        @ariaLabel={{ariaLabel}}
        @id={{id}}
        @label={{label}}
        @information={{information}}
        @errorMessage={{errorMessage}}
        @prefix={{prefix}}
        @requiredLabel={{requiredLabel}}
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'firstName',
  ariaLabel: 'Mot de passe',
};

export const withLabelAndInformation = Template.bind({});
withLabelAndInformation.args = {
  id: 'password',
  label: 'Mot de passe',
  information: 'Une brève information',
};

export const withErrorMessage = Template.bind({});
withErrorMessage.args = {
  id: 'password',
  label: 'Mot de passe',
  errorMessage: "Un message d'erreur.",
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
    description: "Label de l'input. Requis si ariaLabel n'est pas définit.",
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  ariaLabel: {
    name: 'ariaLabel',
    description: "L'action du bouton, pour l'accessibilité. Requis si label n'est pas définit.",
    type: { name: 'string', required: true },
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
  prefix: {
    name: 'prefix',
    description: 'Affiche un préfixe avant la zone de saisie du champ',
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
