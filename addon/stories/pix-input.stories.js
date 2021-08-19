import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixInput
        @id={{id}}
        @label={{label}}
        @information={{information}}
        @errorMessage={{errorMessage}}
        placeholder='Jeanne, Pierre ...' />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'firstName',
}

export const input = Template.bind({});
input.args = {
  id: 'firstName',
  label: 'Prénom',
  information: 'a small information',
}

export const inError = Template.bind({});
inError.args = {
  id: 'firstName',
  label: 'Prénom',
  information: 'a small information',
  errorMessage: 'un message d\'erreur',
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
    description: 'Le label de l\'input',
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
