import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixInputCode
        @ariaLabel={{ariaLabel}}
        @legend={{legend}}
        @inputType={{inputType}}
        @numInputs={{numInputs}}
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  ariaLabel: "Chiffre",
  legend: "Code de validation d'adresse e-mail"
}

export const argTypes = {
  ariaLabel: {
    name: 'ariaLabel',
    description: "L'aria-label de chaque case. L'aria-label est automatiquement complété à la fin par n°<numéro>. Avec <numéro> correspondant à la position du champ dans le PixInputCode.",
    type: { name: 'string', required: true },
  },
  legend: {
    name: 'legend',
    description: "La description du composant. Indiquer ce à quoi correspond votre PixInputCode.",
    type: { name: 'string', required: true },
  },
  inputType: {
    name: 'inputType',
    description: "Le type de chaque champ : `number` ou `text`",
    type: { name: 'string', required: false },
    options: ['number', 'text'],
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'number' },
    }
  },
  numInputs: {
    name: 'numInputs',
    description: "Le nombre de champ",
    type: { name: 'number', required: false },
    table: {
      defaultValue: { summary: 6 },
    }
  },
  onAllInputsFilled: {
    name: 'onAllInputsFilled',
    description: 'fonction appelée (avec le code en paramètre) une fois tous les champs remplis',
    type: { required: false },
    control: { disable: true },
  },
};
