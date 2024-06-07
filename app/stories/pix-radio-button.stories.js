import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Inputs/Radio Button',
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
    checked: {
      name: 'checked',
      description: 'Permet de cocher la radio',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
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
  checked={{this.checked}}
  disabled={{this.disabled}}
  @isDisabled={{this.isDisabled}}
  @size={{this.size}}
  @screenReaderOnly={{this.screenReaderOnly}}
  @requiredLabel={{this.requiredLabel}}
  @subLabel={{this.subLabel}}
>
  <:label>{{this.label}}</:label>
</PixRadioButton>`,
    context: args,
  };
};

const FullWidthTemplate = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<div
  style='border: 1px solid var(--pix-neutral-500); background: var(--pix-neutral-20); padding: var(--pix-spacing-4x); width: 500px'
><PixRadioButton @id={{this.id}}>
    <:label>{{this.label}}</:label>
  </PixRadioButton></div>`,
    context: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  label: 'Poivron',
};

export const defaultChecked = Template.bind({});
defaultChecked.args = {
  ...Default.args,
  checked: true,
};

export const FullWidth = FullWidthTemplate.bind({});
FullWidth.args = {
  label: 'Une réponse',
};

export const isDisabled = Template.bind({});
isDisabled.args = {
  ...Default.args,
  isDisabled: true,
};

export const checkedIsDisabled = Template.bind({});
checkedIsDisabled.args = {
  ...Default.args,
  isDisabled: true,
  checked: true,
};

/* Multiple components story */
const multipleTemplate = (args) => {
  return {
    template: hbs`<PixRadioButton disabled={{this.disabled}} @isDisabled={{this.isDisabled}} name='radio'>
  <:label>{{this.label}}</:label>
</PixRadioButton>
<PixRadioButton disabled={{this.disabled}} @isDisabled={{this.isDisabled}} name='radio'>
  <:label>{{this.label}}</:label>
</PixRadioButton>
<PixRadioButton disabled={{this.disabled}} @isDisabled={{this.isDisabled}} name='radio'>
  <:label>{{this.label}}</:label>
</PixRadioButton>`,
    context: args,
  };
};

export const multiple = multipleTemplate.bind({});
multiple.args = {
  ...Default.args,
};
