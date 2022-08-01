import { hbs } from 'ember-cli-htmlbars';

export const Template = (args) => {
  return {
    template: hbs`
      <PixCheckbox
        @id={{id}}
        @label={{label}}
        @isIndeterminate={{isIndeterminate}}
        @labelSize={{labelSize}}
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

export const indeterminateCheckbox = Template.bind({});
indeterminateCheckbox.args = {
  id: 'acceptNewsletter2',
  label: 'Recevoir la newsletter',
  isIndeterminate: true,
};

export const checkboxWithSmallLabel = Template.bind({});
checkboxWithSmallLabel.args = {
  id: 'acceptNewsletter2',
  label: 'Recevoir la newsletter',
  labelSize: 'small',
};

export const checkboxWithLargeLabel = Template.bind({});
checkboxWithLargeLabel.args = {
  id: 'acceptNewsletter2',
  label: 'Recevoir la newsletter',
  labelSize: 'large',
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
  labelSize: {
    name: 'labelSize',
    description: 'Correspond à la taille de la police du label.',
    type: { name: 'string', required: false },
    defaultValue: { summary: 'default' },
    control: {
      type: 'select',
      options: ['small', 'default', 'large'],
    },
  },
};
