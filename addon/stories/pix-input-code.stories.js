import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixInputCode
        @ariaLabel={{ariaLabel}}
        @inputType={{inputType}}
        @numInputs={{numInputs}}
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  ariaLabel: "Code de validation d'adresse e-mail",
}

export const argTypes = {
  'ariaLabel': {
    name: 'ariaLabel',
    description: "L'aria-label de chaque champ",
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
};
