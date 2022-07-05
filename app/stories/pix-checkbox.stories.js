import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixCheckbox
        @id={{id}}
        @label={{label}}
        @isIndeterminate={{isIndeterminate}}
      />
    `,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  id: 'acceptNewsletter',
  label: 'Recevoir la newsletter',
};

export const isIndeterminateCheckbox = Template.bind({});
isIndeterminateCheckbox.args = {
  id: 'acceptNewsletter2',
  label: 'Recevoir la newsletter',
  isIndeterminate: true,
};

export const argTypes = {
  id: {
    name: 'id',
    description: 'Identifiant du champ permettant de lui attacher un label',
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  label: {
    name: 'label',
    description: "Le label de l'input",
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  ariaLabel: {
    name: 'ariaLabel',
    description: "L'action du champ, pour l'accessibilité. Requis si label n'est pas définit.",
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  isIndeterminate: {
    name: 'isIndeterminate',
    description:
      "Rendre la checkbox indeterminée, état indiquant que la/les case(s) n'est ni cochée(s) ni décochée(s) (exemple: une checkbox parent indiquant la sélection partielle de plusieurs checkbox enfants)",
    type: { name: 'boolean', required: true },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
};
