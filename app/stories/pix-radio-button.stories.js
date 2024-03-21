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
    isDisabled: {
      name: 'isDisabled',
      description: 'Pour désactiver/activer le bouton radio',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: 'false' },
      },
    },

    label: {
      name: 'label',
      description: 'Le label du champ',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    subLabel: {
      name: 'subLabel',
      description: 'Un descriptif complétant le label',
      type: { name: 'string', required: false },
    },
    requiredLabel: {
      name: 'requiredLabel',
      description: 'Label indiquant que le champ est requis.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    screenReaderOnly: {
      name: 'screenReaderOnly',
      description: "Permet de rendre le label lisible uniquement par les lecteurs d'écran",
      control: { type: 'boolean' },
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      name: 'size',
      description: 'Correspond à la taille de la police du label.',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: { type: 'select' },
      options: ['small', 'large', 'default'],
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
  disabled={{this.isDisabled}}
  @isDisabled={{this.isDisabled}}
  @size={{this.size}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @requiredLabel={{this.requiredLabel}}
>
  <:label>{{this.label}}</:label>
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
    template: hbs`<PixRadioButton @value={{this.value}} disabled={{this.disabled}} checked><:label
  >{{this.label}}</:label></PixRadioButton>`,
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
    template: hbs`<PixRadioButton disabled={{this.isDisabled}} @isDisabled={{this.isDisabled}} name='radio'><:label
  >{{this.label}}</:label></PixRadioButton>
<PixRadioButton disabled={{this.isDisabled}} @isDisabled={{this.isDisabled}} name='radio'><:label
  >{{this.label}}</:label></PixRadioButton>
<PixRadioButton disabled={{this.isDisabled}} @isDisabled={{this.isDisabled}} name='radio'><:label
  >{{this.label}}</:label></PixRadioButton>`,
    context: args,
  };
};

export const multiple = multipleTemplate.bind({});
multiple.args = {
  ...Default.args,
};
