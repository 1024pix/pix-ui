import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Radio Button',
  argTypes: {
    id: {
      name: 'id',
      description:
        'Identifiant du champ permettant de lui attacher un label. Généré automatiquement si non renseigné.',
      type: { name: 'string' },
    },
    label: {
      name: 'label',
      description: 'Le label du bouton radio',
      type: { name: 'string', required: true },
    },
    class: {
      name: 'class',
      description: "Permet d'ajouter une classe CSS au parent du composant.",
      type: { name: 'string' },
    },
    value: {
      name: 'value',
      description: "Valeur permettant d'identifier l'option sélectionnée",
      type: { name: 'string', required: false },
    },
    disabled: {
      name: 'disabled',
      description: 'Pour désactiver/activer le bouton radio',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

/* Default stories */
const Template = (args) => {
  return {
    template: hbs`<PixRadioButton
  @value={{this.value}}
  @id={{this.id}}
  @class={{this.class}}
  disabled={{this.disabled}}
>
  {{this.label}}
</PixRadioButton>`,
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
  disabled: true,
};

/* Checked stories */
const checked = (args) => {
  return {
    template: hbs`<PixRadioButton
  @value={{this.value}}
  disabled={{this.disabled}}
  checked
>{{this.label}}</PixRadioButton>`,
    context: args,
  };
};

export const disabledChecked = checked.bind({});
disabledChecked.args = {
  ...Default.args,
  disabled: true,
};

export const defaultChecked = checked.bind({});
defaultChecked.args = Default.args;

/* Multiple components story */
const multipleTemplate = (args) => {
  return {
    template: hbs`<PixRadioButton disabled={{this.disabled}} name='radio'>{{this.label}}</PixRadioButton>
<PixRadioButton disabled={{this.disabled}} name='radio'>{{this.label}}</PixRadioButton>
<PixRadioButton disabled={{this.disabled}} name='radio'>{{this.label}}</PixRadioButton>`,
    context: args,
  };
};

export const multiple = multipleTemplate.bind({});
multiple.args = {
  ...Default.args,
};
