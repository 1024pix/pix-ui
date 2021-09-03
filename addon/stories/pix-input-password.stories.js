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
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'firstName',
  ariaLabel:'Mot de passe'
}

export const withLabelAndInformation = Template.bind({});
withLabelAndInformation.args = {
  id: 'password',
  label: 'Mot de passe',
  information: 'Une brève information',
}

export const withErrorMessage = Template.bind({});
withErrorMessage.args = {
  id: 'password',
  label: 'Mot de passe',
  errorMessage: 'Un message d\'erreur.',
}

export const argTypes = {
  id: {
    name: 'id',
    description: 'Identifiant du champ permettant de lui attacher un label',
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  label: {
    name: 'label',
    description: 'Label de l\'input',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  ariaLabel: {
    name: 'ariaLabel',
    description: 'l\'action du bouton, pour l\'accessibilité',
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
    description: 'Affiche le message d\'erreur donné et encadre en rouge le champ',
    type: { name: 'string', required: false },
    defaultValue: null,
  },
};
