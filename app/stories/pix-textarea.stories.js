import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Form/Textarea',
  argTypes: {
    id: {
      name: 'id',
      description: 'id généré automatiquement, peut être définit manuellement si besoin',
      type: { name: 'string', required: false },
    },
    value: {
      name: 'value',
      description: 'Valeur du champ',
      type: { name: 'string', required: false },
    },
    maxlength: {
      name: 'maxlength',
      description: 'Nombre de caractères maximal à taper dans le champ',
      type: { name: 'number', required: false },
    },
    errorMessage: {
      name: 'errorMessage',
      description: 'Affiche une erreur en dessous du champ.',
      type: { name: 'string', required: false },
    },
    label: {
      name: 'label',
      description: 'Donne un label au champ.',
      type: { name: 'string', required: false },
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
    inlineLabel: {
      name: 'inlineLabel',
      description: 'Permet de ne pas afficher la marge pour les éléments de formulaire inline',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => {
  return {
    template: hbs`<PixTextarea
  @id={{this.id}}
  @value={{this.value}}
  @maxlength={{this.maxlength}}
  @errorMessage={{this.errorMessage}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @requiredLabel={{this.requiredLabel}}
  @inlineLabel={{this.inlineLabel}}
><:label>{{this.label}}</:label></PixTextarea>`,
    context: args,
  };
};

const TemplateWithoutlabel = (args) => {
  return {
    template: hbs`<PixTextarea
  @id={{this.id}}
  @value={{this.value}}
  @maxlength={{this.maxlength}}
  @errorMessage={{this.errorMessage}}
  @size={{this.size}}
  @subLabel={{this.subLabel}}
  @requiredLabel={{this.requiredLabel}}
  @inlineLabel={{this.inlineLabel}}
/>`,
    context: args,
  };
};

export const textarea = Template.bind({});
textarea.args = {
  id: 'textarea',
  label: 'Label du textarea',
  subLabel: 'Sous-label',
  value: 'Contenu du textarea',
};

const FullWidthTemplate = (args) => {
  return {
    template: hbs`{{! template-lint-disable no-inline-styles }}
<div
  style='border: 1px solid var(--pix-neutral-500); background: var(--pix-neutral-20); padding: var(--pix-spacing-4x); width: 500px; height: 250px;'
>
  <PixTextarea
    @id={{this.id}}
    @value={{this.value}}
    @subLabel={{this.subLabel}}
    @maxlength={{this.maxlength}}
  ><:label>{{this.label}}</:label></PixTextarea>
</div>`,
    context: args,
  };
};

export const FullWidth = FullWidthTemplate.bind({});
FullWidth.args = {
  id: 'textarea',
  label: 'Label du textarea',
  subLabel: 'Sous-label',
  value: 'Contenu du textarea',
  maxlength: 120,
};

export const textareaWithoutLabel = TemplateWithoutlabel.bind({});
textareaWithoutLabel.args = {
  id: 'textarea-without-label',
  value: 'Contenu du textarea sans label affiché',
};
