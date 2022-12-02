import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => {
  return {
    template: hbs`<PixRadioButton @label={{label}} @value={{value}} @isDisabled={{isDisabled}} />`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  label: 'Poivron',
};

export const isDisabled = Template.bind({});
isDisabled.args = {
  ...Default.args,
  isDisabled: true,
};

const checked = (args) => {
  return {
    template: hbs`<PixRadioButton @label={{label}} @isDisabled={{isDisabled}} checked />`,
    context: args,
  };
};

export const disabledChecked = checked.bind({});
disabledChecked.args = {
  ...Default.args,
  isDisabled: true,
};

export const defaultChecked = checked.bind({});
defaultChecked.args = Default.args;

export const argTypes = {
  label: {
    name: 'label',
    description: 'Le label du bouton radio',
    type: { name: 'string', required: true },
    defaultValue: null,
  },
  value: {
    name: 'value',
    description: "Valeur permettant d'identifier l'option sélectionnée",
    type: { name: 'string', required: false },
    defaultValue: null,
  },
  isDisabled: {
    name: 'isDisabled',
    description: 'Pour désactiver/activer le bouton radio',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    table: {
      defaultValue: { summary: 'false' },
    },
  },
};
