import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixInput
        @id={{id}}
        @label={{label}}
        @information={{information}}
        @errorMessage={{errorMessage}}
        @icon={{icon}}
        @isIconLeft={{isIconLeft}}
        placeholder='Jeanne, Pierre ...' />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'firstName',
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

export const withIcon = Template.bind({});
withIcon.args = {
  id: 'firstName',
  label: 'Prénom',
  icon: 'eye',
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
  icon: {
    name: 'icon',
    description: "Affiche l'icône choisie à la fin de l'input",
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  isIconLeft: {
    name: 'isIconLeft',
    description: "Permet d'afficher l'icône choisie sur la gauche",
    type: { name: 'boolean', required: false },
    control: { type: 'boolean' },
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};
